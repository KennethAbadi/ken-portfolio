import { useEffect, useState, type MouseEvent } from 'react';
import { projects, type Project } from './data/projects';
import { experiences, type Experience } from './data/experiences';

const navItems = [
  { label: 'Projects', path: '#projects' },
  { label: 'Experience', path: '#experience' },
  { label: 'Questions', path: '#questions' },
  { label: 'Contact', path: '#contact' },
];
// Tracks how many in-app pushState navigations deep we are, so "back" links can pop history instead of piling on new entries.
function historyDepth() {
  return (window.history.state as { idx?: number } | null)?.idx ?? 0;
}

function pushPath(path: string) {
  window.history.pushState({ idx: historyDepth() + 1 }, '', path);
}

function navigate(path: string) {
  pushPath(path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack(fallback: string) {
  if (historyDepth() > 0) {
    window.history.back();
  } else {
    navigate(fallback);
  }
}

type LinkProps = (href: string) => {
  href: string;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    if (window.history.state === null)
      window.history.replaceState({ idx: 0 }, '', window.location.href);
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  const linkProps = (href: string) => ({
    href,
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith('#')) {
        event.preventDefault();
        if (window.location.pathname !== '/') {
          pushPath('/');
          setPath('/');
        }
        window.requestAnimationFrame(() =>
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }),
        );
        return;
      }
      if (href.startsWith('/')) {
        event.preventDefault();
        navigate(href);
      }
    },
  });
  const page =
    path === '/' || path === '/journey' || path === '/uses' || path === '/contact' ? (
      <Home linkProps={linkProps} />
    ) : path === '/projects' ? (
      <Projects linkProps={linkProps} />
    ) : path.startsWith('/projects/') ? (
      <ProjectPage slug={path.split('/').pop() ?? ''} linkProps={linkProps} />
    ) : path === '/experience' ? (
      <ExperienceIndex linkProps={linkProps} />
    ) : path.startsWith('/experience/') ? (
      <ExperiencePage slug={path.split('/').pop() ?? ''} linkProps={linkProps} />
    ) : (
      <NotFound linkProps={linkProps} />
    );
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" {...linkProps('/')}>
          Kenneth Abadi<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.path}
              className={item.path === '#projects' && path === '/projects' ? 'active' : ''}
              {...linkProps(item.path)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-note" {...linkProps('#contact')}>
          Open to developer roles <span>↗</span>
        </a>
      </header>
      {page}
      <Footer linkProps={linkProps} />
    </div>
  );
}

function Home({ linkProps }: { linkProps: LinkProps }) {
  return (
    <main>
      <section className="hero wrap">
        <p className="eyebrow">Vancouver, BC</p>
        <h1>
          Hi!
          <br />
          I'm Kenneth, I try to make cool things and analyze data.
        </h1>
        <div className="hero-lower">
          <p className="hero-copy">
            
          </p>
        </div>
      </section>
      <section className="statement wrap">
        <p className="eyebrow">A little more context</p>
        <div className="statement-grid">
          <h2>I like bringing insight to problems and building interesting things.</h2>
          <div>
            <p>
              Id like to think that i'm a full stack developer and a data enthusiast. I enjoy building applications on things im passionate about as well as analyzing data to uncover meaningful insights.
              I care about thoughtful insights and clean design and architecture. 
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="work-section wrap">
        <SectionLabel text="Projects" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} linkProps={linkProps} />
          ))}
        </div>
      </section>
      <ExperienceSection linkProps={linkProps} />
      <QuestionsSection />
      <ContactSection />
    </main>
  );
}

function Projects({ linkProps }: { linkProps: LinkProps }) {
  return (
    <main className="subpage wrap">
      <PageIntro
        eyebrow="Projects"
        title="Projects I’m building from."
        copy="A few examples of work where I used data to ask better questions, test ideas, and turn complexity into something usable."
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} linkProps={linkProps} />
        ))}
      </div>
    </main>
  );
}

function ProjectCard({
  project,
  index,
  linkProps,
}: {
  project: Project;
  index: number;
  linkProps: LinkProps;
}) {
  return (
    <a className={`project-card ${project.accent}`} {...linkProps(`/projects/${project.slug}`)}>
      <div className="project-art">
        {project.image ? (
          <img className="art-photo" src={project.image} alt={project.title} />
        ) : (
          <>
            <span className="art-index">0{index + 1}</span>
            <span className="art-label">{project.shortTitle}</span>
            <div className="art-shape" />
          </>
        )}
      </div>
      <div className="project-meta">
        <div>
          <h3>{project.title}</h3>
          <p>
            {project.role} · {project.year}
          </p>
        </div>
        <span className="arrow">↗</span>
      </div>
      <p className="project-summary">{project.summary}</p>
    </a>
  );
}

function ProjectPage({ slug, linkProps }: { slug: string; linkProps: LinkProps }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound linkProps={linkProps} />;
  return (
    <main className="project-page wrap">
      <a
        className="back-link"
        href="/projects"
        onClick={(event) => {
          event.preventDefault();
          goBack('/projects');
        }}
      >
        ← All projects
      </a>
      <div className={`case-hero ${project.accent}`}>
        <p className="eyebrow">Case study · {project.year}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <section className="case-content">
        <div>
          <p className="eyebrow">The result</p>
          <h2>{project.outcome}</h2>
        </div>
        <div className="metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="case-details">
        <div>
          <p className="eyebrow">Tools</p>
          <p>{project.stack.join(' · ')}</p>
        </div>
        <div>
          <p className="eyebrow">What I learned</p>
          <p>
            Feature engineering often matters more than model complexity. Clear visual storytelling
            turns technical work into something other people can use.
          </p>
        </div>
      </section>
    </main>
  );
}

function ExperienceIndex({ linkProps }: { linkProps: LinkProps }) {
  return (
    <main className="subpage wrap">
      <PageIntro
        eyebrow="Experience"
        title="A practical path through analytical work."
        copy="Research, problem-solving, and data work across wildfire analysis, dashboarding, and technical interpretation."
      />
      <div className="project-list">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.slug}
            experience={experience}
            index={index}
            linkProps={linkProps}
          />
        ))}
      </div>
    </main>
  );
}

function ExperienceCard({
  experience,
  index,
  linkProps,
}: {
  experience: Experience;
  index: number;
  linkProps: LinkProps;
}) {
  return (
    <a
      className={`project-card ${experience.accent}`}
      {...linkProps(`/experience/${experience.slug}`)}
    >
      <div className="project-art">
        <span className="art-index">0{index + 1}</span>
        <span className="art-label">{experience.organization}</span>
        <div className="art-shape" />
      </div>
      <div className="project-meta">
        <div>
          <h3>{experience.title}</h3>
          <p>
            {experience.role} · {experience.timeline}
          </p>
        </div>
        <span className="arrow">↗</span>
      </div>
      <p className="project-summary">{experience.summary}</p>
    </a>
  );
}

function ExperiencePage({ slug, linkProps }: { slug: string; linkProps: LinkProps }) {
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) return <NotFound linkProps={linkProps} />;
  return (
    <main className="project-page wrap">
      <a
        className="back-link"
        href="/experience"
        onClick={(event) => {
          event.preventDefault();
          goBack('/experience');
        }}
      >
        ← All experience
      </a>
      <div className={`case-hero ${experience.accent}`}>
        <p className="eyebrow">{experience.organization} · {experience.timeline}</p>
        <h1>{experience.title}</h1>
        <p>{experience.summary}</p>
      </div>

      <section className="case-content">
        <div className="metrics">
          {experience.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="eyebrow">Overview</p>
          <h2 className="experience-overview">{experience.overview}</h2>
        </div>
        
      </section>

      <section className="case-details">
        <div>
          <p className="eyebrow">Organization</p>
          <p>{experience.organization}</p>
        </div>
        <div>
          <p className="eyebrow">Role</p>
          <p>{experience.role}</p>
        </div>
        <div>
          <p className="eyebrow">Timeline</p>
          <p>{experience.timeline}</p>
        </div>
      </section>

      <section className="case-details">
        <div>
          <p className="eyebrow">Key responsibilities</p>
          <ul>
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Technical contributions</p>
          <ul>
            {experience.technicalContributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-details">
        <div>
          <p className="eyebrow">Tech stack</p>
          <p>{experience.techStack.join(' · ')}</p>
        </div>
        <div>
          <p className="eyebrow">Data / domain</p>
          <p>{experience.dataDomain.join(' · ')}</p>
        </div>
      </section>

      <section className="case-details">
        <div>
          <p className="eyebrow">Results</p>
          <ul>
            {experience.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Stakeholders</p>
          <p>{experience.stakeholders.join(' · ')}</p>
        </div>
      </section>
    </main>
  );
}

function ExperienceSection({ linkProps }: { linkProps: LinkProps }) {
  return (
    <section id="experience" className="scroll-section wrap">
      <PageIntro
        eyebrow="Experience"
        title="Learning by doing."
        copy="A practical path through analysis, experimentation, and building useful things from messy information."
      />
      <div className="timeline">
        <div className="timeline-item">
          <span>May 2024 – Aug 2024</span>
          <div>
            <h2>Undergraduate Research Assistant · UBC Okanagan</h2>
            <p>
              Worked on wildfire research and sensor-analysis projects using environmental and IoT
              data to improve wildfire forecasting and communication with response teams.
            </p>
            <small>
              Python · pandas · NumPy · SQL · Power BI · Azure DevOps · Git
            </small>
            <p>
              <a className="text-link" {...linkProps('/experience/wildfire-risk-sensor-analysis')}>
                Read the full role <span>↗</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionsSection() {
  const questions = [
    [
      'What roles am I looking for?',
      'Junior analyst and developer roles where I can keep learning while supporting better decisions and better systems.',
    ],
    [
      'What is my strongest technical area?',
      'Exploratory analysis, visualization, and turning findings into clear, useful stories.',
    ],
    [
      'What is my stack?',
      'Python, pandas, NumPy, scikit-learn, Jupyter, Matplotlib, Seaborn, SQLite, and Parquet.',
    ],
    [
      'What kind of problems do I enjoy?',
      'Questions about behavior, performance, and trends that become clearer once the data is organized well.',
    ],
    [
      'How do I approach a new project?',
      'Start with the question, check the data honestly, test assumptions, and explain the outcome clearly.',
    ],
  ];
  return (
    <section id="questions" className="scroll-section wrap">
      <PageIntro
        eyebrow="Questions"
        title="The quick version."
        copy="A few straightforward answers about how I work and what I’m looking for next."
      />
      <div className="questions-list">
        {questions.map(([question, answer], index) => (
          <div className="question-item" key={question}>
            <span>0{index + 1}</span>
            <div>
              <h2>{question}</h2>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-page scroll-section wrap">
      <p className="eyebrow">Contact</p>
      <h1>
        Want to talk about
        <br />
        <em>data, projects, or the next step?</em>
      </h1>
      <p className="contact-copy">
        I’m open to conversations about building, learning, and solving problems that matter.
      </p>
      <a className="email-link" href="mailto:kenneth.putra25@gmail.com">
        kenneth.putra25@gmail.com ↗
      </a>
    </section>
  );
}

function NotFound({ linkProps }: { linkProps: LinkProps }) {
  return (
    <main className="subpage wrap">
      <PageIntro
        eyebrow="404"
        title="That page went wandering."
        copy="The page you’re looking for doesn’t exist or has moved."
      />
      <a className="text-link" {...linkProps('/')}>
        Back home <span>↗</span>
      </a>
    </main>
  );
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="section-label">
      <span>{text}</span>
      <span>↘</span>
    </div>
  );
}

function Footer({ linkProps }: { linkProps: LinkProps }) {
  return (
    <footer className="footer wrap">
      <div>
        <a className="wordmark" {...linkProps('/')}>
          Kenneth Abadi<span>.</span>
        </a>
        <p>Analyst and developer building useful things from data.</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/KennethAbadi">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/kennethputra">LinkedIn ↗</a>
      </div>
      <small>© {new Date().getFullYear()} Kenneth Abadi</small>
    </footer>
  );
}

export default App;
