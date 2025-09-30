import React, { useState, useEffect } from 'react';

const MainContent = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['about', 'experience', 'projects', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const baseStyles = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    lineHeight: '1.8',
    padding: '0',
    minHeight: '100vh',
    backgroundColor: darkMode ? '#0f0f23' : '#ffffff',
    color: darkMode ? '#e4e4e7' : '#1f2937',
    transition: 'all 0.4s ease',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const sectionStyle = (id) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '4rem 0',
    opacity: visibleSections.has(id) ? 1 : 0,
    transform: visibleSections.has(id) ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  });

  const headingStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '3rem',
    textAlign: 'center',
  };

  const subHeadingStyle = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '700',
    marginBottom: '2rem',
    color: darkMode ? '#f1f5f9' : '#1e293b',
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '8rem 0 4rem',
  };

  const heroTitleStyle = {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
  };

  const heroSubtitleStyle = {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
    color: darkMode ? '#94a3b8' : '#64748b',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  };

  const cardStyle = {
    background: darkMode
      ? 'linear-gradient(145deg, #1e293b, #0f172a)'
      : 'linear-gradient(145deg, #ffffff, #f8fafc)',
    borderRadius: '20px',
    padding: '2.5rem',
    marginBottom: '2rem',
    boxShadow: darkMode
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const projectCardStyle = {
    ...cardStyle,
    cursor: 'pointer',
    transform: 'translateY(0)',
  };

  const linkStyle = {
    color: darkMode ? '#818cf8' : '#667eea',
    textDecoration: 'none',
    fontWeight: '600',
    position: 'relative',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    position: 'fixed',
    top: '100px',
    right: '2rem',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    background: darkMode
      ? 'linear-gradient(135deg, #1e293b, #334155)'
      : 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#ffffff',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const skillBadgeStyle = {
    display: 'inline-block',
    padding: '6px 16px',
    margin: '4px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
    background: darkMode
      ? 'rgba(129, 140, 248, 0.2)'
      : 'rgba(102, 126, 234, 0.1)',
    color: darkMode ? '#818cf8' : '#667eea',
    border: darkMode
      ? '1px solid rgba(129, 140, 248, 0.3)'
      : '1px solid rgba(102, 126, 234, 0.2)',
  };

  const skills = {
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "Go", "SQL"],
    "Frameworks": ["Spring Boot", "React", "Node.js", "LangChain", "FastAPI"],
    "Cloud & DevOps": ["Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Helm", "Prometheus"],
    "Databases": ["Cassandra", "PostgreSQL", "Redis", "Vector DB", "Elasticsearch"],
    "AI/ML": ["LLaMA", "GPT-4", "RAG", "Vector Search", "Generative AI", "PyTorch"]
  };

  return (
    <main style={baseStyles}>
      <button
        onClick={toggleTheme}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        {darkMode ? '☀️' : '🌙'} {darkMode ? 'Light' : 'Dark'}
      </button>

      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={heroTitleStyle} className={darkMode ? 'hero-gradient-dark' : 'hero-gradient'}>Software Engineer</h1>
          <p style={heroSubtitleStyle}>
            Building scalable systems, AI-powered solutions, and meaningful experiences
            at the intersection of technology and innovation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['Backend Development', 'DevOps', 'AI/ML', 'Cloud Architecture'].map(skill => (
              <span key={skill} style={skillBadgeStyle}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} id="about" style={sectionStyle('about')}>
        <div style={containerStyle}>
          <h2 style={headingStyle} className={darkMode ? 'text-gradient-dark' : 'text-gradient'}>About Me</h2>
          <div style={cardStyle}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I'm a <strong>Software Engineer</strong> based in Tokyo with nearly <strong>3 years</strong> of experience
              building high-performance systems and AI-powered solutions. I graduated from <strong>IIT Kanpur</strong>
              with a B.Tech in Electrical Engineering.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Currently at <strong>Rakuten Mobile</strong>, I focus on backend development, infrastructure automation,
              and DevOps. I've led the delivery of personalization-driven platforms, built real-time chat applications
              serving 5M+ users, and optimized JVM performance achieving 76% latency reduction.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              I'm passionate about <strong>AI/ML and LLMs</strong> — building open-source tools with LangChain,
              LLaMA, and generative frameworks. I love solving complex problems and creating tools that make
              developers' lives easier.
            </p>

            <h3 style={subHeadingStyle}>Technical Skills</h3>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: darkMode ? '#818cf8' : '#667eea'
                }}>{category}</h4>
                <div>
                  {items.map(skill => (
                    <span key={skill} style={skillBadgeStyle}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section ref={experienceRef} id="experience" style={sectionStyle('experience')}>
        <div style={containerStyle}>
          <h2 style={headingStyle} className={darkMode ? 'text-gradient-dark' : 'text-gradient'}>Experience</h2>
          <div style={cardStyle}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: darkMode ? '#f1f5f9' : '#1e293b',
                  marginBottom: '0.5rem'
                }}>
                  Software Engineer
                </h3>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: darkMode ? '#818cf8' : '#667eea',
                  marginBottom: '0.5rem'
                }}>
                  Rakuten Mobile, Tokyo
                </h4>
              </div>
              <span style={{
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                background: darkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)',
                color: darkMode ? '#4ade80' : '#16a34a',
                border: darkMode ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(34, 197, 94, 0.2)',
              }}>
                Oct 2022 – Present
              </span>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                {
                  title: "Ads-Platform",
                  description: "Led the full lifecycle delivery of a personalization-driven advertisement platform from scratch — including architecture design, API specs, service implementation, CI/CD setup (GitHub Actions + Jenkins), and production deployment using Helm on Kubernetes. Built a Java Virtual Threads based scheduler, hyper-personalized ad updates with synchronized DB writes.",
                  impact: "3x boost in ad conversion rates"
                },
                {
                  title: "Message Store Application (Rakuten Link Official Accounts)",
                  description: "Designed and developed a high-throughput real-time chat application using Spring Boot, Cassandra, and WebSockets, serving over 5M+ users. Used Apache Kafka to handle race conditions and request spikes.",
                  impact: "20,000 QPS with 99.99th percentile latency under 1.1s"
                },
                {
                  title: "Generative AI Applications",
                  description: "Developed a GitHub AI Code Reviewer using GitHub Actions and Generative AI APIs. Built a RAG-based AI assistant for infrastructure queries using GPT-4, Vector DB, and Confluence. Created a Generative AI-driven competitor insights platform leveraging web crawling and LLMs.",
                  impact: "30% reduction in manual code review time"
                },
                {
                  title: "JVM And Legacy Code Improvements",
                  description: "Optimized JVM configurations (GC tuning, heap sizing) and refactored legacy components of Rakuten Link's messaging microservice. Introduced in-memory caching and asynchronous processing.",
                  impact: "76.1% latency reduction, 3.77× increase in availability"
                },
                {
                  title: "DevOps & Infrastructure",
                  description: "Built standardized templates for Spring Boot microservices and Helm charts with rollback support. Migrated CI pipeline from CircleCI to self-hosted GitHub Actions. Enhanced monitoring using ELK Stack, Prometheus, and Grafana.",
                  impact: "Streamlined deployment across 20+ services"
                }
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  borderRadius: '12px',
                  background: darkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: darkMode ? '#818cf8' : '#667eea',
                    marginBottom: '0.75rem'
                  }}>{item.title}</h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    marginBottom: '0.75rem',
                    color: darkMode ? '#cbd5e1' : '#475569'
                  }}>{item.description}</p>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    background: darkMode ? 'rgba(34, 197, 94, 0.15)' : 'rgba(34, 197, 94, 0.1)',
                    color: darkMode ? '#4ade80' : '#16a34a',
                  }}>
                    {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} id="projects" style={sectionStyle('projects')}>
        <div style={containerStyle}>
          <h2 style={headingStyle} className={darkMode ? 'text-gradient-dark' : 'text-gradient'}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: "RAG AI System",
                link: "https://github.com/ramandeep11/RAG-local",
                desc: "Built REST APIs for ingestion, vector DB search, and semantic Q&A using LangChain and LLaMA3 with Gradio.",
                tech: ["LangChain", "LLaMA3", "Vector DB", "FastAPI"],
                featured: true
              },
              {
                title: "LLM for Optimized Search",
                link: "https://github.com/ramandeep11/LLM_with_Web",
                desc: "Web scraper integrated with LLMs for automated summarization of content.",
                tech: ["Python", "LLM", "Web Scraping", "NLP"],
                featured: true
              },
              {
                title: "Japanese Learning Web App",
                link: "https://github.com/ramandeep11/ReactWeb",
                desc: "React-based web app for learning Japanese characters and quizzes.",
                tech: ["React", "JavaScript", "CSS", "PWA"]
              },
              {
                title: "Japanese Learning Mobile App",
                link: "https://github.com/ramandeep11/ReactNative",
                desc: "React Native app for Japanese learning with offline capability.",
                tech: ["React Native", "TypeScript", "SQLite"]
              },
              {
                title: "Cars Price Prediction",
                link: "https://github.com/ramandeep11/Cars-ML",
                desc: "Regression and ML-based car price predictor with R² of 0.83.",
                tech: ["Python", "Scikit-learn", "Pandas", "ML"]
              },
              {
                title: "Fake News Detection",
                link: "https://github.com/ramandeep11/Fake-News",
                desc: "ML classifier with 94% accuracy using tree-based models.",
                tech: ["Python", "NLP", "Random Forest", "ML"]
              }
            ].map((proj, i) => (
              <div
                key={i}
                style={{
                  ...projectCardStyle,
                  background: proj.featured
                    ? (darkMode
                      ? 'linear-gradient(145deg, #1e293b, #0f172a)'
                      : 'linear-gradient(145deg, #f8fafc, #e2e8f0)')
                    : cardStyle.background,
                  border: proj.featured
                    ? (darkMode ? '2px solid rgba(129, 140, 248, 0.3)' : '2px solid rgba(102, 126, 234, 0.3)')
                    : cardStyle.border,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = darkMode
                    ? '0 35px 60px -12px rgba(0, 0, 0, 0.9)'
                    : '0 35px 60px -12px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                }}
              >
                {proj.featured && (
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    background: darkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)',
                    color: darkMode ? '#4ade80' : '#16a34a',
                    marginBottom: '1rem',
                  }}>
                    ⭐ Featured
                  </div>
                )}
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: darkMode ? '#f1f5f9' : '#1e293b'
                }}>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
                      ...linkStyle,
                      textDecoration: 'none',
                    }}>
                      {proj.title} ↗
                    </a>
                  ) : (
                    proj.title
                  )}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  color: darkMode ? '#cbd5e1' : '#475569'
                }}>{proj.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {proj.tech.map(tech => (
                    <span key={tech} style={{
                      ...skillBadgeStyle,
                      fontSize: '0.8rem',
                      padding: '4px 10px',
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Projects */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={subHeadingStyle}>Academic Projects</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: "TA201 Differential Prototype", desc: "Awarded Best Group Project under Prof. I.P. Singh." },
                { title: "Li-Fi Communication", desc: "Li-Fi system with 2kbps data transfer over 20cm. Won Most Innovative Project." },
              ].map((proj, i) => (
                <div key={i} style={{
                  ...cardStyle,
                  padding: '1.5rem',
                }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: darkMode ? '#818cf8' : '#667eea'
                  }}>{proj.title}</h4>
                  <p style={{
                    fontSize: '1rem',
                    margin: 0,
                    color: darkMode ? '#cbd5e1' : '#475569'
                  }}>{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section style={{ ...sectionStyle('certificates'), minHeight: 'auto', padding: '2rem 0' }}>
        <div style={containerStyle}>
          <h2 style={{ ...headingStyle, fontSize: '2rem', marginBottom: '2rem' }} className={darkMode ? 'text-gradient-dark' : 'text-gradient'}>Certificates & Learning</h2>
          <div style={cardStyle}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { title: "AWS Essential Training for Developers", provider: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/5ff31d2c91ad247380852472034d7f7c5281dec0342f87497e118bd8d61c86dc" },
                { title: "Kubernetes Certified Application Developer (CKAD)", provider: "Udemy", link: "https://www.udemy.com/certificate/UC-6c2c7e49-273f-4f26-b469-079eb49ad850/" },
                { title: "Deep Learning Specialization", provider: "Coursera", link: "https://www.coursera.org/account/accomplishments/verify/DJ8MV6MHDAH2" }
              ].map((cert, i) => (
                <div key={i} style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  background: darkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                }}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
                    ...linkStyle,
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    {cert.title} ↗
                  </a>
                  <p style={{
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.9rem',
                    color: darkMode ? '#94a3b8' : '#64748b'
                  }}>{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} id="contact" style={sectionStyle('contact')}>
        <div style={containerStyle}>
          <h2 style={headingStyle} className={darkMode ? 'text-gradient-dark' : 'text-gradient'}>Let's Connect</h2>
          <div style={{
            ...cardStyle,
            textAlign: 'center',
            padding: '3rem 2rem',
          }}>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '2rem',
              color: darkMode ? '#cbd5e1' : '#475569'
            }}>
              Always excited to discuss new opportunities, innovative projects, or just tech in general.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <a
                href="mailto:ramandeep20012001@gmail.com"
                style={{
                  ...linkStyle,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  background: darkMode
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: '#ffffff',
                  fontWeight: '600',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.3)';
                }}
              >
                📧 Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent; 