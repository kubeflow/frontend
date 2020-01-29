import * as React from 'react';
import {Link} from "react-router-dom";
import {classes, cssRaw} from "typestyle";
import {LineageCardType, LineageResource} from "./LineageTypes";
import {getResourceDescription, getResourceName} from "./Utils";
import {Artifact} from "..";

cssRaw(`
.cardRow {
  align-items: center;
  border-bottom: 1px solid var(--grey-200);
  display: flex;
  height: 54px;
  padding: 6px 0px;
  position: relative;
}

.cardRow.clickTarget {
  cursor: pointer;
}

.cardRow .noRadio {
  height: 16px;
  width: 16px;
}

.cardRow .form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  background-color: #fff;
  border: 1px solid var(--grey-400);
  color: var(--blue-500);
  top: 0px;
  height: 18px;
  width: 18px;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
}

.cardRow .form-radio:checked {
  border: 2px solid var(--blue-500);
}

.cardRow .form-radio:checked::before {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  content: '';
  transform: translate(-50%, -50%);
  padding: 5px;
  display: block;
  background: currentColor;
}

.cardRow .form-radio:hover {
  background-color: var(--grey-100);
}

.cardRow .form-radio:checked {
  background-color: #fff;
}

.cardRow div {
  display: inline-block;
  vertical-align: middle;
}

.cardRow div input {
  margin: 10px 10px 0 20px;
}

.cardRow .rowTitle {
  font-size: 12px;
  font-family: "PublicSans-SemiBold";
  color: var(--grey-900);
  letter-spacing: 0.2px;
  line-height: 24px;
  text-decoration: none;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
}

.cardRow .rowTitle:hover {
  text-decoration: underline;
  color: var(--blue-600);
  cursor: pointer;
}

.cardRow .rowDesc {
  font-size: 11px;
  color: var(--grey-600);
  letter-spacing: 0.3px;
  line-height: 12px;
}
.cardRow footer {
  overflow: hidden;
}
.cardRow [class^='edge'] {
  width: 8px;
  height: 8px;
  background-color: var(--grey-700);
  border-radius: 2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
}
.cardRow .edgeRight {
  left: 100%;
}

.cardRow .edgeLeft {
  left: 0;
}

.cardRow.lastRow {
  border-bottom: 0px;
}

`);

interface LineageCardRowProps {
  leftAffordance: boolean;
  rightAffordance: boolean;
  hideRadio: boolean;
  isLastRow: boolean;
  isTarget?: boolean;
  resource: LineageResource;
  resourceDetailsRoute: string;
  type: LineageCardType;
  setLineageViewTarget?(artifact: Artifact): void
}

export class LineageCardRow extends React.Component<LineageCardRowProps> {
  constructor(props: LineageCardRowProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public checkEdgeAffordances(): JSX.Element[] {
    const affItems = [];
    this.props.leftAffordance && affItems.push(<div className='edgeLeft' key={'edgeLeft'} />);
    this.props.rightAffordance && affItems.push(<div className='edgeRight' key={'edgeRight'} />);
    return affItems;
  }

  public render(): JSX.Element {
    const {isLastRow, type} = this.props;
    const canTarget = type === 'artifact';
    const cardRowClasses = classes('cardRow', isLastRow && 'lastRow', canTarget && 'clickTarget');

    return (
      <div className={cardRowClasses} onClick={this.handleClick}>
        {this.checkRadio()}
        <footer>
          <Link className={'rowTitle'} to={this.props.resourceDetailsRoute}>
            {getResourceName(this.props.resource)}
          </Link>
          <p className='rowDesc'>{getResourceDescription(this.props.resource)}</p>
        </footer>
        {this.checkEdgeAffordances()}
      </div>
    );
  }

  private checkRadio(): JSX.Element {
    if (this.props.hideRadio) {
      return <div className='noRadio' />;
    }

    return (
      <div>
        <input
          type='radio'
          className='form-radio'
          name=''
          value=''
          onClick={this.handleClick}
          checked={this.props.isTarget}
          readOnly={true}
        />
      </div>
    );
  }

  private handleClick(e: React.MouseEvent) {
    if (!this.props.setLineageViewTarget || !(this.props.type === 'artifact')) return;
    this.props.setLineageViewTarget(this.props.resource as Artifact);
  }
}
