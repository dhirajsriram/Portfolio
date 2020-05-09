import React, { Component } from 'react';
import './ProgressBar.scss';

interface Progressbar {
  name: string;
  percent: string;
}

const ProgressBar: React.FC<Progressbar> = (props) => {
  return (
    <div className="row">
      <div className="Name col-sm-3 text-center">{props.name}</div>
      <div className="progress progressBar col-sm-9">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={parseInt(props.percent, 10)}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: props.percent }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
