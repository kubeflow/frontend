import * as React from 'react';
// @ts-ignore
import LineChart from 'react-svg-line-chart';
import {classes, stylesheet} from 'typestyle';
import {CARD_SPACER_HEIGHT, px} from './LineageCss';
import {CARD_TITLE_HEIGHT} from "./LineageCard";
import {CardDetails} from "./LineageCardColumn";
import {findDOMNode} from 'react-dom';
import {sleep} from './Utils'

interface EdgeCanvasProps {
    cards: CardDetails[];
    columnPadding: number;
    // If true edges are drawn from right to left.
    reverseEdges: boolean;
}

interface EdgeCanvasState {
    edgeGap: number
    parentWidth: number
}

/**
 * Canvas that draws the lines connecting the edges of a list of vertically stacked cards in one
 * <LineageCardColumn /> to the topmost <LineageCard /> in an adjacent <LineageCardColumn />.
 *
 * The adjacent column is assumed to be to right of the connecting cards unless `reverseEdges`
 * is set to true.
 */


export class EdgeCanvas extends React.Component<EdgeCanvasProps, EdgeCanvasState> {
    constructor(props: any) {
        super(props)
        this.state = {
            edgeGap: -1,
            parentWidth: -1,
        }
    }

    public render(): JSX.Element | null {
        const {cards, columnPadding, reverseEdges} = this.props;

        let viewHeight = 1;
        const cardBodyHeight = 67;
        const cardContainerBorders = 2;
        const cardOffset = CARD_SPACER_HEIGHT + CARD_TITLE_HEIGHT + cardContainerBorders;
        const {edgeGap, parentWidth} = this.state
        const viewWidth = Math.max(edgeGap, 0) + 2 * columnPadding;

        const css = stylesheet({
            edgeCanvas: {
                border: 0,
                display: 'block',
                left: parentWidth - edgeGap,
                top: px(CARD_TITLE_HEIGHT + cardBodyHeight / 2),
                overflow: 'visible',
                position: 'absolute',
                width: viewWidth,
                zIndex: -1,
                transition: 'transform .25s',
                $nest: {
                    svg: {
                        display: 'block',
                        overflow: 'visible',
                        position: 'absolute',
                    },
                    '&.edgeCanvasReverse': {
                        left: 0,
                        transform: 'translateX(-100%)',
                    },
                },
            },
        });

        const lastNode = reverseEdges ? 'y1' : 'y4';
        const lastNodePositions = {y1: 0, y4: 0};

        const edgeLines: JSX.Element[] = [];
        cards.forEach((card, i) => {
            card.elements.forEach((element, j) => {
                if (!element.next) return;
                const {y1, y4} = lastNodePositions;
                edgeLines.push(
                    <LineChart
                        key={`${i}-${j}`}
                        data={[
                            {x: 0, y: y1},
                            {x: 30, y: y1},
                            {x: viewWidth - 30, y: y4},
                            {x: viewWidth     , y: y4},
                        ]}
                        areaVisible={false}
                        axisVisible={false}
                        gridVisible={false}
                        labelsVisible={false}
                        pathColor={'#BDC1C6'}
                        pathVisible={true}
                        pathWidth={1}
                        pathOpacity={1}
                        pointsVisible={false}
                        viewBoxHeight={viewHeight}
                        viewBoxWidth={viewWidth}
                        pathSmoothing={0} />
                );
                viewHeight += cardBodyHeight;
                lastNodePositions[lastNode] += cardBodyHeight;
            });
            viewHeight += cardOffset;
            lastNodePositions[lastNode] += cardOffset;
        });

        const edgeCanvasClasses = classes(css.edgeCanvas, reverseEdges && 'edgeCanvasReverse');
        sleep(1).then(this.componentDidMount.bind(this))
        return <div className={edgeCanvasClasses}>{edgeLines}</div>
    }

    async componentDidMount() {
        const $this = findDOMNode(this) as HTMLElement
        const [$next, $parent] = [$this.nextSibling, $this.parentElement] as HTMLElement[]
        if (!$this || !$next) return
        await sleep(1) // So the browser has time to draw the elements (and have correct clientWidth values)
        const parentWidth = $parent.clientWidth
        const edgeGap = parentWidth - $next.clientWidth
        if (edgeGap === this.state.edgeGap) return
        this.setState({edgeGap, parentWidth})
    }
}
