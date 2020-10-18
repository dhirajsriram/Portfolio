import React from 'react';
import Bubble from '../Me/Bubble';

const Technologies: React.FC = () => {
    const faGrapQl = {
        prefix: 'fac',
        iconName: 'graphql', // Any name you like
        icon: [
            400, // width
            400, // height
            [], // ligatures
            '', // unicode (if relevant)
            'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9' // svg path data
        ]
    }
    return (
        <div className="resume-section  p-3 d-flex flex-column transition-item" id="projects">
            <div className="my-auto projects-container">
                <h2 id="skillsh2" className="heading-padd" />
                <h2 className="Heading skills">Technologies</h2>
            </div>
            <div className="mb-5 pb-5 row">
                <Bubble
                    itemName={'React'}
                    itemClass={'fab fa-react'}
                    size={"small"}
                />

                <Bubble
                    itemName={'Angular'}
                    itemClass={'fab fa-angular'}
                    size={"small"}
                />
                <Bubble
                    itemName={'HTML5'}
                    itemClass={'fab fa-html5'}
                    size={"small"}
                />
                <Bubble
                    itemName={'CSS3'}
                    itemClass={'fab fa-css3-alt'}
                    size={"small"}
                />
                <Bubble
                    itemName={'SASS'}
                    itemClass={'fab fa-sass'}
                    size={"small"}
                />
                <Bubble
                    itemName={'JavaScript'}
                    itemClass={'fab fa-js-square'}
                    size={"small"}
                />
                <Bubble
                    itemName={'NodeJS'}
                    itemClass={'fab fa-node'}
                    size={"small"}
                />
                <Bubble
                    itemName={'Wordpress'}
                    itemClass={'fab fa-wordpress'}
                    size={"small"}
                />
                <Bubble
                    itemName={'Joomla'}
                    itemClass={'fab fa-joomla'}
                    size={"small"}
                />
                <Bubble
                    itemName={'PHP'}
                    itemClass={'fab fa-php'}
                    size={"small"}
                />
                <Bubble
                    itemName={'Docker'}
                    itemClass={'fab fa-docker'}
                    size={"small"}
                />
                <Bubble
                    itemName={'Github'}
                    itemClass={'fab fa-github'}
                    size={"small"}
                />
            </div>
        </div>
    );
};

export default Technologies;
