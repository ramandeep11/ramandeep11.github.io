import React, { useState, useEffect } from 'react';

const MainContent = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

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

    const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const skills = ['Java', 'Python', 'Spring Boot', 'Kubernetes', 'Docker', 'AWS', 'AI/ML'];

  const projects = [
    {
      title: "Generative AI Applications",
      description: "Collection of AI/ML projects including RAG systems, LLM-powered search, GitHub code reviewers, and competitor analysis platforms. Features REST APIs, vector databases, and semantic Q&A using LangChain and LLaMA3.",
      tech: ["LangChain", "LLaMA3", "Vector DB", "GPT-4", "Python", "FastAPI", "RAG", "NLP"],
      link: "https://github.com/ramandeep11/Generative-AI-Applications",
      featured: true
    },
    {
      title: "Spring Boot Projects",
      description: "Enterprise-grade Spring Boot applications showcasing microservices architecture, REST APIs, database integration, and production-ready features with comprehensive testing and deployment configurations.",
      tech: ["Spring Boot", "Java", "Microservices", "REST APIs", "JPA", "Maven", "Docker", "Testing"],
      link: "https://github.com/ramandeep11/Spring-Boot-Projects",
      featured: true
    }
  ];

  const experiences = [
    {
      title: "Ads-Platform",
      description: "Led full lifecycle delivery of personalization-driven advertisement platform from architecture to production deployment.",
      impact: "3x boost in ad conversion rates",
      tech: ["Java", "Kubernetes", "GitHub Actions"]
    },
    {
      title: "Message Store Application",
      description: "Designed high-throughput real-time chat application serving 5M+ users using Spring Boot, Cassandra, and WebSockets.",
      impact: "20,000 QPS with 99.99th percentile latency under 1.1s",
      tech: ["Spring Boot", "Cassandra", "Apache Kafka"]
    },
    {
      title: "Generative AI Applications",
      description: "Developed GitHub AI Code Reviewer and RAG-based AI assistant for infrastructure queries using GPT-4 and Vector DB.",
      impact: "30% reduction in manual code review time",
      tech: ["GPT-4", "Vector DB", "LangChain"]
    }
  ];

  return (
    <main className={darkMode ? 'dark' : ''}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-24 right-6 z-40 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Hero Section */}
      <section id="hero" className="section min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-display text-gray-900 dark:text-gray-100 mb-6">
              Software Engineer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Building scalable systems, AI-powered solutions, and meaningful experiences
              at the intersection of technology and innovation.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.slice(0, 6).map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-headline text-gray-900 dark:text-gray-100 mb-6">
                About Me
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-6 text-body text-gray-700 dark:text-gray-300">
                <p>
                  I'm a <strong>Software Engineer</strong> based in Tokyo with nearly <strong>3 years</strong> of experience
                  building high-performance systems and AI-powered solutions. I graduated from <strong>IIT Kanpur</strong>
                  with a B.Tech in Electrical Engineering.
                </p>
                <p>
                  Currently at <strong>Rakuten Mobile</strong>, I focus on backend development, infrastructure automation,
                  and DevOps. I've led the delivery of personalization-driven platforms, built real-time chat applications
                  serving 5M+ users, and optimized JVM performance achieving 76% latency reduction.
                </p>
                <p>
                  I'm passionate about <strong>AI/ML and LLMs</strong> — building open-source tools with LangChain,
                  LLaMA, and generative frameworks. I love solving complex problems and creating tools that make
                  developers' lives easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-headline text-gray-900 dark:text-gray-100 mb-6">
                Experience
              </h2>
              <p className="text-body text-gray-600 dark:text-gray-400 mb-6">
                Software Engineer at Rakuten Mobile, Tokyo
              </p>
              <span className="inline-block px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                Oct 2022 – Present
              </span>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="card">
                    <h3 className="text-title text-gray-900 dark:text-gray-100 mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-body text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-caption text-green-600 dark:text-green-400 font-medium">
                      {exp.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-headline text-gray-900 dark:text-gray-100 mb-6">
                Featured Projects
              </h2>
              <p className="text-body text-gray-600 dark:text-gray-400">
                Comprehensive repositories showcasing enterprise-grade applications in AI/ML and backend development.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`card ${project.featured ? 'ring-2 ring-blue-500/20' : ''}`}
                  >
                    {project.featured && (
                      <span className="inline-block px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded mb-3">
                        Featured
                      </span>
                    )}
                    <h3 className="text-title text-gray-900 dark:text-gray-100 mb-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {project.title} ↗
                      </a>
                    </h3>
                    <p className="text-body text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-headline text-gray-900 dark:text-gray-100 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Always excited to discuss new opportunities, innovative projects, or just tech in general.
            </p>
            <a
              href="mailto:ramandeep20012001@gmail.com"
              className="btn btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;