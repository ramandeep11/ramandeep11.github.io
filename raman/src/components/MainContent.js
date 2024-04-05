// components/MainContent.js
import React from 'react';

const MainContent = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  return (
    <main>
      <section ref={aboutRef}>
        <h2>About Me</h2>
        <p>
          I am a software engineer with around 2 years of experience. I have a bachelor's degree in Electrical Engineering from the Indian Institute of Technology Kanpur.
        </p>
        <p>
          Currently, I am working as a DevOps engineer and transitioning to a backend engineer role. My tech stack includes Kubernetes, Docker, Jenkins, RCP, Circle CI, GitHub Actions, Harbor, etc.
        </p>
        <p>
          I am passionate about AI/ML and have a keen interest in exploring open-source projects in this field. I actively engage in learning and experimenting with AI/ML algorithms.
        </p>
      </section>
      <section ref={experienceRef}>
        <h2>Experience</h2>
        <div>
          <p>
            <strong>Rakuten Mobile, Tokyo</strong> | Software Engineer (Oct'22-Present)
          </p>
          <ul>
            <li>Implemented Kubernetes (K8s) orchestration, crafting YAML for diverse microservices.</li>
            <li>Managed Helm charts, optimizing deployment and configuration processes.</li>
            <li>Orchestrated Docker containers to streamline application packaging.</li>
            <li>Established and enhanced CI/CD pipelines using Jenkins for multiple microservices.</li>
          </ul>
        </div>
        {/* Add more experiences here */}
      </section>
      <section ref={projectsRef}>
              <h2>Projects</h2>
              <div className="projects">
                <div className="project">
                  <h3>React Japanese Learning Web App</h3>
                  <p>
                    (GitHub - <a href="https://github.com/ramandeep11/ReactWeb">Link</a>)
                  </p>
                  <p>
                    (Self Project) Developed a web application for learning Japanese language
                  </p>
                  <ul>
                    <li>Using: React.js framework and JavaScript, HTML, CSS.</li>
                    <li>Include API for character and answer retrieval.</li>
                  </ul>
                </div>
                <div className="project">
                  <h3>React Native Japanese Learning Mobile App</h3>
                  <p>
                    (GitHub - <a href="https://github.com/ramandeep11/ReactNative">Link</a>)
                  </p>
                  <p>
                    (Self Project) Created a mobile app for learning Japanese language and characters using React Native framework.
                  </p>
                  <ul>
                    <li>Utilized React Native framework along with JavaScript, HTML, and CSS for app development.</li>
                    <li>Integrated API to fetch character and answer information an also works without API with in app store.</li>
                  </ul>
                </div>
                <div className="project">
                  <h3>Cars Price Prediction</h3>
                  <p>
                    (GitHub - <a href="https://github.com/ramandeep11/Cars-ML">Link</a>)
                  </p>
                  <p>
                    (Self Project) Cars price prediction using different approaches and comparing them : Regression, Decision Tree Classifier, xgboost, and Random Forest Classifier.
                  </p>
                  <ul>
                    <li>Best R2 score of .83.</li>
                  </ul>
                </div>
                <div className="project">
                  <h3>Audio Classification</h3>
                  <p>
                    (GitHub - <a href="https://github.com/ramandeep11/Python">Link</a>)
                  </p>
                  <p>
                    (Course Project) Audio Classification Using MFCC.
                  </p>
                  <ul>
                    <li>Accuracy of 71%.</li>
                  </ul>
                </div>
                <div className="project">
                  <h3>Fake News Detection</h3>
                  <p>
                    (GitHub - <a href="https://github.com/ramandeep11/Fake-News">Link</a>)
                  </p>
                  <p>
                    (Self Project) Fake News Detection Using Regression, Decision Tree Classifier, and Random Forest Classifier.
                  </p>
                  <ul>
                    <li>Best Accuracy of 94%.</li>
                  </ul>
                </div>
                <div className="project">
                  <h3>TA201 Lab project (Differential prototype)</h3>
                  <p>
                    (Guide: Prof I.P. Singh, 2019-20-odd)
                  </p>
                  <ul>
                    <li>Won Best Group Project certificate.</li>
                  </ul>
                </div>
                <div className="project">
                  <h3>Li-Fi (Light Fidelity)</h3>
                  <p>
                    (Electronics club, IIT Kanpur)
                  </p>
                  <p>
                    (Mentor: Jay Mundra, Summer'19 project)
                  </p>
                  <ul>
                    <li>Li-Fi communication between two laptops at max speed of 2kbps at a distance of 20cm.</li>
                    <li>Studied various papers related to visible light communication.</li>
                    <li>Won most innovative project certificate.</li>
                  </ul>
                </div>
              </div>
            </section>
      <section ref={contactRef}>
        <h2>Contact Me</h2>
        <p>
          You can reach out to me via email at <a href="mailto:ramandeep20012001@gmail.com">ramandeep20012001@gmail.com</a>.
        </p>
        {/* Additional contact information can be added here if needed */}
      </section>
    </main>
  );
}

export default MainContent;
