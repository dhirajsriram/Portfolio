import React, { useState } from 'react';
import './ProjectBlock.scss';

interface Projectblock {
  background: string;
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
      <div
        className="projects"
        style={{
          backgroundImage: 'url(' + props.background + ')',
          backgroundPosition: 'center',
        }}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        {!hover ? (
          <div className="image-project">
            <img
              src={
                props.name !== 'SOLR XM'
                  ? props.image
                  : require('../../assets/Solr-logo.webp')
              }
              alt="brandsmart-logo"
              height={props.name !== 'React docs - Tamil' ? 40 : 60}
              className="img-responsive"
            />
          </div>
        ) : (
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
