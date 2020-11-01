import React from 'react';
import Bubble from '../Me/Bubble';

const Technologies: React.FC = () => {
    return (
        <div className="resume-section  p-3 d-flex flex-column transition-item" id="technologies">
            <div className="my-auto projects-container">
                <h2 id="skillsh2" className="heading-padd" />
                <h2 className="Heading skills">Technologies</h2>
            </div>
            <div className="mb-5 pb-5 row">
                <Bubble
                    itemName={'React'}
                    itemClass={'fab fa-react'}
                    size={'small'}
                />

                <Bubble
                    itemName={'Angular'}
                    itemClass={'fab fa-angular'}
                    size={'small'}
                />
                <Bubble
                    itemName={'HTML5'}
                    itemClass={'fab fa-html5'}
                    size={'small'}
                />
                <Bubble
                    itemName={'CSS3'}
                    itemClass={'fab fa-css3-alt'}
                    size={'small'}
                />
                <Bubble
                    itemName={'SASS'}
                    itemClass={'fab fa-sass'}
                    size={'small'}
                />
                <Bubble
                    itemName={'JavaScript'}
                    itemClass={'fab fa-js-square'}
                    size={'small'}
                />
                <Bubble
                    itemName={'NodeJS'}
                    itemClass={'fab fa-node'}
                    size={'small'}
                />
                <Bubble
                    itemName={'Wordpress'}
                    itemClass={'fab fa-wordpress'}
                    size={'small'}
                />
                <Bubble
                    itemName={'Joomla'}
                    itemClass={'fab fa-joomla'}
                    size={'small'}
                />
                <Bubble
                    itemName={'PHP'}
                    itemClass={'fab fa-php'}
                    size={'small'}
                />
                <Bubble
                    itemName={'Docker'}
                    itemClass={'fab fa-docker'}
                    size={'small'}
                />
                <Bubble
                    itemName={'Github'}
                    itemClass={'fab fa-github'}
                    size={'small'}
                />
            </div>
        </div>
    );
};

export default Technologies;
