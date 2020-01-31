import grey from '@material-ui/core/colors/grey';
import React from 'react';
import {classes, stylesheet} from 'typestyle';
import {LineageCard} from './LineageCard';
import {LineageCardType, LineageRow} from './LineageTypes';
import {EdgeCanvas} from './EdgeCanvas';
import {Artifact} from "..";

export interface CardDetails {
  title: string;
  elements: LineageRow[];
}

export interface LineageCardColumnProps {
  type: LineageCardType;
  title: string;
  cards: CardDetails[];
  columnPadding: number;
  reverseBindings?: boolean;
  skipEdgeCanvas?: boolean;
  setLineageViewTarget?(artifact: Artifact): void
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
        width: '20%',
        maxWidth: '20%',
        minWidth: 'max(20%, 170px)',
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
    const {cards, columnPadding, skipEdgeCanvas} = this.props;

    return <React.Fragment>
      {
        skipEdgeCanvas ? null :
          <EdgeCanvas
            cards={cards}
            columnPadding={columnPadding}
            reverseEdges={!!this.props.reverseBindings}
          />
      }
      {cards.map(this.jsxFromCardDetails.bind(this))}
    </React.Fragment>;
  }
}
