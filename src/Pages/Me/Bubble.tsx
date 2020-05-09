import React from 'react';
import './Bubble.scss';

interface Bubbleinterface {
  itemClass: string;
  itemName: string;
  information: string;
}

const Bubble: React.FC<Bubbleinterface> = (props) => {
  return (
    <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-2 skill text-center">
      <div className="circle text-center">
        <i className={props.itemClass} />
      </div>
      <h3 className="subHeading text-white bubble-header">{props.itemName}</h3>
      <p>{props.information}</p>
    </div>
  );
};

export default Bubble;
