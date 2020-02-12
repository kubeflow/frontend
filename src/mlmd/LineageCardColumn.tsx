import grey from '@material-ui/core/colors/grey';
import React from 'react';
import {classes, stylesheet} from 'typestyle';
import {LineageCard} from './LineageCard';
import {LineageCardType, LineageRow} from './LineageTypes';
import {CARD_OFFSET, EdgeCanvas} from './EdgeCanvas';
import {Artifact} from "..";
import {ControlledEdgeCanvas} from './ControlledEdgeCanvas';
import {CARD_ROW_HEIGHT} from './LineageCss';

export interface CardDetails {
  title: string;
  elements: LineageRow[];
}

export interface LineageCardColumnProps {
  type: LineageCardType;
  title: string;
  cards: CardDetails[];
  columnWidth: number;
  columnPadding: number;
  reverseBindings?: boolean;
  skipEdgeCanvas?: boolean;
  outputExecutionToOutputArtifactMap?: Map<number, number[]>;
  setLineageViewTarget?(artifact: Artifact): void;
}

export class LineageCardColumn extends React.Component<LineageCardColumnProps> {
  public render(): JSX.Element | null {
    const {columnPadding, type, title} = this.props;

    const css = stylesheet({
      mainColumn: {
        display: 'inline-block',
        justifyContent: 'center',
        minHeight: '100%',
        padding: `0 ${columnPadding}px`,
        width: this.props.columnWidth,
        boxSizing: 'border-box',
        $nest: {
          h2: {
            color: grey[600],
            fontFamily: 'PublicSans-Regular',
            fontSize: '12px',
            letterSpacing: '0.5px',
            lineHeight: '40px',
            textAlign: 'left',
            textTransform: 'capitalize'
          }
        }
      },
      columnBody: {
        position: 'relative',
        width: '100%',
      },
      columnHeader: {
        height: '40px',
        margin: '10px 0px',
        textAlign: 'left',
        width: '100%',
      }
    });

    return (
      <div className={classes(css.mainColumn, type)}>
        <div className={classes(css.columnHeader)}>
          <h2>{title}</h2>
        </div>
        <div className={classes(css.columnBody)}>
          {this.drawColumnContent()}
        </div>
      </div>
    );
  }
  private jsxFromCardDetails(det: CardDetails, i: number): JSX.Element {
    const isNotFirstEl = i > 0;
    return <LineageCard
      key={i}
      title={det.title}
      type={this.props.type}
      addSpacer={isNotFirstEl}
      rows={det.elements}
      isTarget={/Target/i.test(this.props.title)}
      setLineageViewTarget={this.props.setLineageViewTarget}
    />;
  }

  private drawColumnContent(): JSX.Element {
    const {cards, columnPadding, columnWidth, skipEdgeCanvas} = this.props;
    const edgeWidth = columnPadding * 2;
    const cardWidth = columnWidth - edgeWidth;

    let edgeCanvases: JSX.Element[] = [];

    if (this.props.outputExecutionToOutputArtifactMap) {
      edgeCanvases = this.buildOutputExecutionToOutputArtifactEdgeCanvases(
        this.props.outputExecutionToOutputArtifactMap,
        cards,
        edgeWidth,
        cardWidth,
      )
    } else {
      edgeCanvases.push(
        <EdgeCanvas
          cardWidth={cardWidth}
          edgeWidth={edgeWidth}
          cards={cards}
          reverseEdges={!!this.props.reverseBindings}
        />
      )
    }

    return <React.Fragment>
      {skipEdgeCanvas ? null : edgeCanvases}
      {cards.map(this.jsxFromCardDetails.bind(this))}
    </React.Fragment>;
  }

  private buildOutputExecutionToOutputArtifactEdgeCanvases(
    outputExecutionToOutputArtifactMap: Map<number, number[]>,
    artifactCards: CardDetails[],
    edgeWidth: number,
    cardWidth: number,
  ): JSX.Element[] {
    const edgeCanvases: JSX.Element[] = [];

    const artifactIdToCardMap = new Map<number, number>();
    artifactCards.forEach((card, index) => {
      card.elements.forEach((row) => {
        artifactIdToCardMap.set(row.resource.getId(), index);
      });
    });

    // Offset relative to the top of the column
    let artifactOffset = 0;
    let artifactCardIndex: number | undefined;
    let executionCardIndex = 0;

    outputExecutionToOutputArtifactMap.forEach((artifactIds) => {
      const executionCardTop = (CARD_ROW_HEIGHT + CARD_OFFSET) * executionCardIndex;

      edgeCanvases.push(
        <ControlledEdgeCanvas
          cardWidth={cardWidth}
          edgeWidth={edgeWidth}
          reverseEdges={!!this.props.reverseBindings}
          artifactIds={artifactIds}
          artifactToCardMap={artifactIdToCardMap}
          offset={artifactOffset - executionCardTop}
          outputExecutionToOutputArtifactMap={outputExecutionToOutputArtifactMap}
          top={executionCardTop}
        />
      );

      // Advance starting artifact offset.
      artifactIds.forEach((artifactId) => {
        if (artifactCardIndex === null) {
          artifactCardIndex = artifactIdToCardMap.get(artifactId) as number;
          return;
        }

        const newArtifactIndex = artifactIdToCardMap.get(artifactId);
        if (artifactCardIndex === newArtifactIndex) {
          // Next artifact row is on the same card
          artifactOffset += CARD_OFFSET;
        } else {
          // Next artifact row is on the next card
          artifactOffset += CARD_ROW_HEIGHT + CARD_OFFSET;
        }
        artifactCardIndex = newArtifactIndex;
      });

      executionCardIndex++;
    });

    return edgeCanvases
  }

}
