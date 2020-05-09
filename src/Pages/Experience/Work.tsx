import React from 'react';
import './Work.scss';

interface WorkInterface {
  duties: string[];
  name: string;
  devrole: string;
  image: string;
  technologies: string[];
  duration: string;
  
}

const Work: React.FC<WorkInterface> = (props) => {
  const duties = props.duties.map((item: string, i: number) => (
    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
  ));
  return (
    <div className="jumbotron exp mx-auto">
      <div className="exp-header">
        <div className="row">
          <div className="col-6">
            <img alt={props.name} src={props.image} height="50" />
          </div>
          <div className="col-6 float-right">
            <p className="float-right position">{props.devrole}</p>
          </div>
        </div>
        <br />
      </div>
      <div className="exp-content">
        <ul>{duties}</ul>
      </div>
      <div className="exp-footer">
        <div className="row">
          <div className="col-sm-6 col-6">
            <p
              className="duration"
              dangerouslySetInnerHTML={{ __html: props.duration }}
            />
          </div>
          <div className="col-sm-6 col-6">
            <p className="float-right">
              Technologies :
              {props.technologies &&
                props.technologies.map((technology: string, i: number) => {
                  return <i className={technology + ' technologies'} key={i} />;
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
