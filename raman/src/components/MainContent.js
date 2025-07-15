import React from 'react';

const MainContent = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  const sectionStyle = {
    marginBottom: '60px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#0A66C2',
    borderBottom: '2px solid #ccc',
    paddingBottom: '6px',
  };

  const projectCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    marginBottom: '16px',
  };

  return (
    <main style={{ padding: '40px', lineHeight: '1.6', color: '#333' }}>
      {/* About */}
      <section ref={aboutRef} style={sectionStyle}>
        <h2 style={headingStyle}>About Me</h2>
        <p>
          I am a software engineer with almost 3 years of experience, currently based in Tokyo. I hold a B.Tech in Electrical Engineering from the Indian Institute of Technology Kanpur.
        </p>
        <p>
          Currently, I am working as a Software Engineer at Rakuten Mobile, focusing on backend development, infrastructure automation, and DevOps. My tech stack includes Kubernetes, Docker, Jenkins, GitHub Actions, Spring Boot, and Cassandra.
        </p>
        <p>
          I’m also deeply interested in AI/ML and LLMs, and actively contribute to open-source projects using LangChain, LLaMA, and Generative AI frameworks.
        </p>
      </section>

      {/* Experience */}
      <section ref={experienceRef} style={sectionStyle}>
        <h2 style={headingStyle}>Experience</h2>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>
          Rakuten Mobile, Tokyo <span style={{ fontWeight: 'normal', color: '#666' }}>| Oct 2022 – Present</span>
        </h3>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
          <li>
            <strong>Ads-Platform:</strong> Led the full lifecycle delivery of a personalization-driven advertisement platform from scratch — including architecture design, API specs, service implementation, CI/CD setup (GitHub Actions + Jenkins), and production deployment using Helm on Kubernetes. Built a <strong>Java Virtual Threads</strong> based scheduler, hyper-personalized ad updates with synchronized DB writes, boosting ad <strong>conversion rates 3x</strong>.
          </li>
          <li>
            <strong>Message Store Application (Rakuten Link Official Accounts):</strong> Designed and developed a high-throughput <strong>real-time chat application</strong> using <strong>Spring Boot, Cassandra, and WebSockets</strong>, serving over <strong>5M+ users</strong>. Achieved <strong>20,000 QPS</strong> during performance tests with <strong>99.99th percentile latency under 1.1s</strong>. Used Apache Kafka to handle race conditions and spikes in requests.
          </li>
          <li>
            <strong>Generative AI Applications:</strong> Developed a <strong>GitHub AI Code Reviewer</strong> using GitHub Actions and Generative AI APIs, reducing manual code review time by over 30%. Built a <strong>RAG-based AI assistant</strong> for infrastructure queries using <strong>GPT-4, Vector DB, and Confluence</strong>. Created a <strong>Generative AI-driven competitor insights</strong> platform leveraging web crawling and LLMs to extract and summarize competitor offerings.
          </li>
          <li>
            <strong>JVM and Legacy Code Improvements:</strong> Optimized <strong>JVM configurations</strong> (GC tuning, heap sizing) and refactored legacy messaging microservices. Introduced in-memory caching and asynchronous processing, resulting in <strong>76.1% latency reduction</strong>, <strong>3.77× availability increase</strong>, and complete offloading of DB reads.
          </li>
          <li>
            <strong>DevOps:</strong> Built standardized templates for Spring Boot microservices and <strong>Helm charts</strong> with rollback support and SonarQube, streamlining deployment across <strong>20+ services</strong>. Migrated CI pipelines from CircleCI to a <strong>self-hosted GitHub Actions runner</strong>, reducing third-party dependency. Automated build workflows using Bash and improved observability with <strong>ELK, Prometheus, Grafana, and Filebeat</strong>.
          </li>
          <li>
            <strong>Other Contributions:</strong> Refactored a monolithic application into <strong>modular microservices</strong>, improving maintainability. Designed <strong>Spring Batch</strong> jobs deployed via Kubernetes CronJobs for off-peak data cleanup. <strong>Mentored junior and mid-level developers</strong>, fostering growth and autonomy.
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section ref={projectsRef} style={sectionStyle}>
        <h2 style={headingStyle}>Projects</h2>
        <div>
          {[
            { title: "RAG AI System", link: "https://github.com/ramandeep11/RAG-local", desc: "Built REST APIs for ingestion, vector DB search, and semantic Q&A using LangChain and LLaMA3 with Gradio." },
            { title: "LLM for Optimized Search", link: "https://github.com/ramandeep11/LLM_with_Web", desc: "Web scraper integrated with LLMs for automated summarization of content." },
            { title: "Japanese Learning Web App", link: "https://github.com/ramandeep11/ReactWeb", desc: "React-based web app for learning Japanese characters and quizzes." },
            { title: "Japanese Learning Mobile App", link: "https://github.com/ramandeep11/ReactNative", desc: "React Native app for Japanese learning with offline capability." },
            { title: "Cars Price Prediction", link: "https://github.com/ramandeep11/Cars-ML", desc: "Regression and ML-based car price predictor with R² of 0.83." },
            { title: "Fake News Detection", link: "https://github.com/ramandeep11/Fake-News", desc: "ML classifier with 94% accuracy using tree-based models." },
            { title: "Audio Classification", link: "https://github.com/ramandeep11/Python", desc: "Audio classification using MFCC features with 71% accuracy." },
            { title: "TA201 Differential Prototype", desc: "Awarded Best Group Project under Prof. I.P. Singh." },
            { title: "Li-Fi Communication", desc: "Li-Fi system with 2kbps data transfer over 20cm. Won Most Innovative Project." },
          ].map((proj, i) => (
            <div key={i} style={projectCardStyle}>
              <h3 style={{ marginBottom: '6px', fontSize: '18px', color: '#0A66C2' }}>
                {proj.link ? <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.title}</a> : proj.title}
              </h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Certificates</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><a href="https://www.linkedin.com/learning/certificates/5ff31d2c91ad247380852472034d7f7c5281dec0342f87497e118bd8d61c86dc" target="_blank" rel="noopener noreferrer">LinkedIn Learning – DevOps Essentials</a></li>
          <li><a href="https://www.udemy.com/certificate/UC-6c2c7e49-273f-4f26-b469-079eb49ad850/" target="_blank" rel="noopener noreferrer">Udemy – Kubernetes Certified Application Developer (CKAD)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/DJ8MV6MHDAH2" target="_blank" rel="noopener noreferrer">Coursera – Deep Learning Specialization</a></li>
        </ul>
      </section>

      {/* Contact */}
      <section ref={contactRef}>
        <h2 style={headingStyle}>Contact Me</h2>
        <p>Email: <a href="mailto:ramandeep20012001@gmail.com" style={{ color: '#0A66C2' }}>ramandeep20012001@gmail.com</a></p>
      </section>
    </main>
  );
};

export default MainContent;