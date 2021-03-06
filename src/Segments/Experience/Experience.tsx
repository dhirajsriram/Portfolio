import React from 'react';
import './Experience.scss';
import Work from './Work';

const Experience: React.FC = () => {
  return(<div
    className="resume-section  p-3 d-flex flex-column transition-item"
    id="experience"
  >
    <div className="my-auto">
      <h2 className="mb-5 Heading experience mt-3" >Experience</h2>
    </div>
    <Work
      name={'Everphone'}
      image={require('../../assets/everphone-logo.webp')}
      devrole="Senior Frontend Engineer"
      duties={[
        'Worked exclusively on the customer portal. <span class="bold-text"> Added functionality, performance improvements, improved usability.</span>',
        'Was involved in reviewing and improving the CI/CD pipeline (github actions). Involved in adding in the necessary automation steps which would <span class="bold-text">improve the overall quality and reliability of the portal</span>',
        'Actively involved in consulting <span class="bold-text">Quality of life</span> improvements to the codebase to improve the overall developer experience',
        'Involved in actively looking at some of the <span class="bold-text">state-of-the-art</span> technologies that would help with the performance, maintenance and reliability',
        'Added unit tests as part of the development cycle to ensure that the solutions that we build are <span class="bold-text">reliable</span>',
        'Involved in coordinating with the design, development and product teams so that the features we build are <span class="bold-text">feasible and empowers usability</span> among our customers',
        'Actively involved in setting up the necessary tools to <span class="bold-text">analyze the experience of our customers which would inturn feeds into the concious desicisons</span> that we make towards the product'
      ]}
      duration={'Jan 2020 - Apr 2020 | Berlin, DE'}
      technologies={[
        'fab fa-react',
        'fab fa-node',
        'fab fa-html5',
        'fab fa-css3',
        'fab fa-sass',
        'fab fa-github',
        'fab fa-docker',
        'fab fa-js-square'
      ]}
    />
    <Work
      name={'Saucelabs'}
      image={require('../../assets/saucelabs-logo.webp')}
      devrole="Senior Frontend Engineer"
      duties={[
        'Worked with Design and Product teams to develop features that offers <span class="bold-text">Enhancements, Sustainability, Accessibility</span> to the  platform.',
        'Was involved in developing reusable packages for the <span class="bold-text">Component library</span> which gets used internally across various platforms.',
        'Improved the quality and coverage of unit tests and E2E test which improved the overall <span class="bold-text">quality of the platform.</span>',
        'Was constantly involved in making technical decisions which would impact the productivity of various development teams.',
        'Was responsible for reviewing code which needs to adhere to Front-end standards, Efficiency and Reusability.',
        'Was involved in developing A/B tests to make conscious design decisions based on the user response.'
      ]}
      duration={'Jan 2020 - Apr 2020 | Berlin, DE'}
      technologies={[
        'fab fa-react',
        'fab fa-node',
        'fab fa-html5',
        'fab fa-css3',
        'fab fa-sass',
        'fab fa-js-square'
      ]}
    />
    <Work
      name={'TAISTech'}
      image={require('../../assets/taistech-logo.webp')}
      devrole="UI developer"
      duties={[
        'Involved in designing HTML\'s and providing functionality to the web pages based on the requirements',
        'Responsible for building applications optimized for <span class="bold-text">speed,accessibility and responsiveness</span>',
        'Ensure the technical feasibility of UI/UX designs',
        'Collaborate with other team members and ensuring ceaseless development by helping them out in case of any technical blockades.',
        'Responsible for ensuring that the developed code adhere to the development standards with proper implementation of reusable libraries wherever necessary.',
        'Ensuring that the code is <span class="bold-text">reusable and scalable for any future development.</span>'
      ]}
      duration={'Sep 2017 - Present | Addison, Texas'}
      technologies={[
        'fab fa-angular',
        'fab fa-react',
        'fab fa-node',
        'fab fa-html5',
        'fab fa-css3',
        'fab fa-js-square'
      ]}
    />
    <Work
      name={'PICKBoxx'}
      image={require('../../assets/pickboxx-logo.svg')}
      devrole="Full Stack Dev"
      duties={[
        'Designed and Translated wireframes/PSDs into launch-ready, valid HTML/CSS of websites twghomeremodeling.com, twgcompanies.com, pickboxx.com',
        'Entirely designend and developed the website Lachlist.com.',
        'Lead the design and development of Inutive apllications which ensures <span class="bold-text">ease-of-use and promotes user interaction</span>',
        'Work with QA to ensure that the <span class="bold-text">applications meet desired objectives</span>',
        'Ensured cross-browser and mobile compatibility(Responsive design). '
      ]}
      duration={'Jun 2016 - Sep 2017 | Newark, New jersey'}
      technologies={[
        'fab fa-html5',
        'fab fa-css3',
        'fab fa-js-square',
        'fab fa-php',
        'fab fa-wordpress',
        'fab fa-joomla'
      ]}
    />
  </div>);
};

export default Experience;
