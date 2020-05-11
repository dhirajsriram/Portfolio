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
  const [hover, setHover] = useState<boolean>(false);
  const handleMouseHover = (): void => {
    setHover(!hover);
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
      <div className="projects" onClick={handleMouseHover}>
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
        {hover && (
          <div className="project-backside">
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
