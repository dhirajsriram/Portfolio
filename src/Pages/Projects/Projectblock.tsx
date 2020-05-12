import React, { useState } from 'react';
import './ProjectBlock.scss';

interface Projectblock {
  background?: string;
  description: string;
  name: string;
  siteurl: string;
  technologies?: string[];
  image?: string;
  Class?: string;
}

const ProjectBlock: React.FC<Projectblock> = (props) => {
  const [selected, setselected] = useState<boolean>(false);
  const handleMouseselected = (): void => {
    setselected(!selected);
  };
  return (
    <div
      className={
        props.Class === 'second-line'
          ? 'col-md-12 col-12 col-sm-12 col-lg-12 col-xl-4 projectBlock second-line'
          : props.Class === 'first'
          ? 'col-md-12 col-12 col-sm-12 col-lg-12 col-xl-4 projectBlock first-proj'
          : 'col-md-12 col-12 col-sm-12 col-lg-12 col-xl-4 projectBlock'
      }
    >
      <div className="projects" onClick={handleMouseselected}>
        <div className="background-image-container">
          {props.background && (
            <img
              className="background-image"
              width="360"
              height="180"
              src={props.background}
              alt={props.name + '-bg'}
              loading="lazy"
            />
          )}
        </div>
        <div className="image-project">
          <img
            loading="lazy"
            src={
              props.name !== 'SOLR XM'
                ? props.image
                : require('../../assets/solr-logo.webp')
            }
            alt="brandsmart-logo"
            height={props.name !== 'React docs - Tamil' ? 40 : 60}
            className="img-responsive"
          />
        </div>
        {selected && (
          <div className="project-backside" id={props.name}>
            <div className="project-desc">{props.description}</div>
            <div className="link-button">
              <a href={props.siteurl}>View Website</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBlock;
