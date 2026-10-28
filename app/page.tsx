'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Cloud, BrainCircuit, GitBranch, Database, MapPin, Mail, Phone, MessageCircle, Award, Github, Linkedin, Menu, X, Check, Layers3, TerminalSquare } from 'lucide-react';

const assetPath = process.env.NODE_ENV === 'production' ? '/Samarth2026Profile' : '';
const navItems = ['work', 'services', 'experience', 'skills'];

const metrics = [
  { value: '80%', label: 'AWS cost reduction', detail: '$250K → $50K/month' },
  { value: '30K+', label: 'users served', detail: 'telecom cloud platform' },
  { value: '55', label: 'engineers led', detail: 'global delivery teams' },
  { value: '7', label: 'cloud certifications', detail: 'AWS + Google Cloud' }
];

const services = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    text: 'AWS, GCP and Azure architecture for enterprise platforms, data lakes, SaaS deployments and secure cloud foundations.',
    tags: ['AWS', 'GCP', 'Azure']
  },
  {
    icon: BrainCircuit,
    title: 'AI Platform Engineering',
    text: 'AI/ML platforms, RAG workflows, AI productivity tools, cybersecurity remediation systems and GenAI-powered search.',
    tags: ['RAG', 'MLOps', 'GenAI']
  },
  {
    icon: GitBranch,
    title: 'DevOps & Kubernetes',
    text: 'GitOps, Kubernetes, Terraform, ArgoCD, Helm and CI/CD modernization for fast, repeatable and governed delivery.',
    tags: ['K8s', 'ArgoCD', 'Terraform']
  },
  {
    icon: Database,
    title: 'Data Platforms',
    text: 'Lakehouse, ETL, streaming and real-time systems using BigQuery, Spark, Kafka, Flink, Snowflake and PostgreSQL.',
    tags: ['Kafka', 'Spark', 'BigQuery']
  }
];

const projects = [
  {
    number: '01',
    title: 'AI Cybersecurity Remediation Platform',
    company: 'Cyberender LLC · Capital One Bank',
    description:
      'Architected an AI-driven cybersecurity solution integrating Mend and Checkmarx to automate vulnerability remediation, accelerate fixes and strengthen cloud security posture.',
    stack: ['AI', 'Mend', 'Checkmarx', 'AWS', 'GCP', 'Java'],
    accent: 'from-lime-300 via-emerald-300 to-cyan-300'
  },
  {
    number: '02',
    title: 'Telecom Cloud Lakehouse for 30K+ Users',
    company: 'Pixeldust Technologies · Deutsche Telekom',
    description:
      'Led on-prem to GCP migration, designed scalable Lakehouse architecture with BigQuery, Spark, Dataproc, Kubeflow MLOps and governance tooling.',
    stack: ['GCP', 'BigQuery', 'Dataproc', 'Kubeflow', 'Terraform'],
    accent: 'from-sky-300 via-indigo-300 to-violet-300'
  },
  {
    number: '03',
    title: 'Zero-Touch Multi-Tenant SaaS Onboarding',
    company: 'Atlan · Remote Worldwide',
    description:
      'Built AWS automation using CloudFormation, EKS, Argo, Lambda, SNS and S3 to enable secure cross-account deployments and rapid customer provisioning.',
    stack: ['AWS', 'EKS', 'Argo', 'Lambda', 'CloudFormation'],
    accent: 'from-orange-300 via-rose-300 to-pink-300'
  },
  {
    number: '04',
    title: 'Autonomous Driving Data Pipelines',
    company: 'HERE Technologies · Maps Product',
    description:
      'Built distributed ETL pipelines transforming Protobuf geospatial data into GeoJSON, powering HD Maps and autonomous driving datasets.',
    stack: ['Spark', 'Scala', 'Java', 'Kafka', 'Flink', 'Akka'],
    accent: 'from-yellow-300 via-lime-300 to-green-300'
  },
  {
    number: '05',
    title: 'Trading & Portfolio Data Platform',
    company: 'Oracle · State Street Bank',
    description:
      'Built Bloomberg API powered trading data platforms and modernized monoliths into Spring Boot microservices with strong testing and Sonar compliance.',
    stack: ['Spring Boot', 'Bloomberg APIs', 'Kafka', 'Jenkins', 'Oracle DB'],
    accent: 'from-red-300 via-orange-300 to-amber-300'
  },
  {
    number: '06',
    title: 'Financial Workflow Modernization',
    company: 'Accenture · Goldman Sachs & MasterCard',
    description:
      'Built mandate and customer parameter platforms for regulatory compliance, onboarding and document workflows across banking systems.',
    stack: ['Spring Boot', 'MongoDB', 'SQL', 'Redis', 'OAuth2'],
    accent: 'from-blue-300 via-cyan-300 to-teal-300'
  }
];

const experience = [
  {
    role: 'Independent Consultant & Founder',
    company: 'Narula Cloud & AI Consulting',
    client: 'Cloud, AI and DevOps consulting',
    location: 'Mumbai, India',
    period: '30 May 2026 – Present',
    points: [
      'Founded Narula Cloud & AI Consulting, delivering independent cloud architecture, AI engineering and DevOps consulting.',
      'Provide hands-on engineering through freelance client engagements, including Precisely via Uplers.'
    ]
  },
  {
    role: 'Freelance Senior AI DevOps Engineer',
    company: 'Precisely',
    client: 'Via Narula Cloud & AI Consulting · Uplers',
    location: 'Mumbai, India',
    period: '18 May 2026 – Present',
    points: [
      'Architected an agentic AI CI/CD auto-remediation framework with 15 specialized agents, RAG and MCP integrations for Jenkins and Bitbucket, with human approvals and pipeline validation.',
      'Modernized and containerized enterprise CI/CD across Java, JavaScript and .NET applications; built reusable Jenkins agent images and integrated JFrog Artifactory.',
      'Built AI-powered pipeline analysis and Copilot usage dashboards, automated Linear release comparison reports, and strengthened DevSecOps with CodeQL and cross-platform digital signing.'
    ]
  },
  {
    role: 'Cloud Architect',
    company: 'Cyberender LLC',
    client: 'Capital One Bank',
    location: 'VA, USA',
    period: '05/2024 – 04/2026',
    points: [
      'Designed multi-cloud AWS and GCP architecture for scalable data platforms and medallion-style data lakes.',
      'Implemented GitOps pipelines with ArgoCD and event-driven systems using Lambda, Step Functions and Confluent Kafka.',
      'Built AI-driven cybersecurity remediation integrating Mend and Checkmarx, reducing manual remediation effort.'
    ]
  },
  {
    role: 'Technical Architect',
    company: 'Pixeldust Technologies',
    client: 'Deutsche Telekom',
    location: 'Mumbai, India',
    period: '12/2022 – 05/2024',
    points: [
      'Led on-prem to GCP migration for 30K+ users with Lakehouse architecture across BigQuery, Spark and Dataproc.',
      'Architected Kubeflow MLOps, Prophecy.io and low-code data workflows to speed up ETL and ML deployment.',
      'Directed a 55-member global engineering team, modernized CI/CD from Jenkins to GitLab and built reusable Terraform modules.'
    ]
  },
  {
    role: 'Principal Engineer',
    company: 'Atlan',
    client: 'Low-code data catalog SaaS',
    location: 'Remote Worldwide',
    period: '04/2022 – 11/2022',
    points: [
      'Architected zero-touch multi-tenant SaaS onboarding on AWS using CloudFormation, EKS and Argo.',
      'Designed Kubernetes platforms with EKS, VCluster, Helm and ArgoCD for secure multi-tenancy and isolation.',
      'Reduced infrastructure spend by optimizing EKS, logging, compute usage, ARM and Spot instances.'
    ]
  },
  {
    role: 'Senior Engineer',
    company: 'HERE Technologies',
    client: 'Maps product / HD maps',
    location: 'Mumbai, India',
    period: '08/2020 – 03/2022',
    points: [
      'Built Spark, Scala and Java ETL pipelines transforming Protobuf geospatial data into GeoJSON.',
      'Designed event-driven microservices data platforms with Kafka, Flink and Akka for real-time processing.',
      'Automated Kubernetes deployments and cloud infrastructure across EKS, Helm, GitLab CI/CD, RDS and VPC peering.'
    ]
  },
  {
    role: 'Staff Consultant',
    company: 'Oracle',
    client: 'State Street Bank',
    location: 'Mumbai, India',
    period: '12/2019 – 08/2020',
    points: [
      'Built Bloomberg API based trading and portfolio data platforms for real-time decision-making.',
      'Modernized monoliths into Spring Boot microservices with JPA/Hibernate, CQRS, Kafka and API Gateway patterns.',
      'Improved engineering quality with JUnit, Mockito, Sonar compliance and stable Jenkins CI/CD pipelines.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Accenture',
    client: 'Goldman Sachs and MasterCard',
    location: 'Mumbai, India',
    period: '11/2017 – 12/2019',
    points: [
      'Developed Trader Mandate applications for regulatory compliance under Volcker Rule workflows.',
      'Built customer parameter enablement platforms for bank and financial-institution onboarding.',
      'Modernized backend services with Spring Boot, MongoDB, SQL, Redis, OAuth2, PCF, AWS and GCP.'
    ]
  }
];

const skillGroups = [
  { title: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Data Lakes', 'Cloud Security', 'Cost Optimization'] },
  { title: 'AI', items: ['ChatGPT', 'Gemini', 'Perplexity', 'Meta Llama', 'RAG', 'Agentic Workflows'] },
  { title: 'DevOps', items: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitLab CI/CD', 'GitHub Actions', 'Jenkins'] },
  { title: 'Data', items: ['Kafka', 'BigQuery', 'Snowflake', 'Spark', 'Flink', 'PostgreSQL', 'Neo4J'] },
  { title: 'Engineering', items: ['Java', 'Scala', 'Spring Boot', 'Spring Security', 'JPA', 'Hibernate', 'Python', 'Bash'] }
];

const certifications = [
  'AWS Certified Solutions Architect – Professional',
  'AWS Certified DevOps Engineer – Professional',
  'AWS Certified Machine Learning – Specialty',
  'AWS Certified Security – Specialty',
  'Google Cloud Professional Cloud Architect',
  'Professional Machine Learning Engineer',
  'Professional Cloud Security Engineer'
];

function SectionHeading({ number, label, title, text }: { number: string; label: string; title: string; text?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{text && <p className="section-intro">{text}</p>}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner">
    <a className="wordmark" href="#top" aria-label="Samarth Narula, home"><span className="monogram">sn<span>.</span></span><span>Samarth Narula<span className="wordmark-sub">Cloud & AI Architect</span></span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a key={item} href={`#${item}`}>{item}</a>)}</nav>
    <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={16}/></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X/> : <Menu/>}</button>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[...navItems, 'contact'].map(item => <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item}<ArrowUpRight size={18}/></a>)}</nav>}</header>;
}

function Hero() {
  return <section id="top" className="hero shell">
    <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> Independent consultant · Mumbai, India</p>
      <h1>Complex systems.<br/><span className="serif">Clear solutions.</span></h1>
      <p className="hero-description">I’m Samarth. I turn ambitious cloud and AI ideas into platforms that work in the real world.</p>
      <p className="hero-detail">Cloud architecture. AI engineering. Hands-on delivery.<br/>Founder of Narula Cloud & AI Consulting.</p>
      <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDown size={17}/></a><a className="text-link" href={`${assetPath}/Samarth-Narula-Resume.pdf`} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17}/></a></div>
      <div className="hero-platforms"><span>BUILT WITH</span><span>AWS</span><span>Google Cloud</span><span>Kubernetes</span></div>
    </div>
    <div className="hero-visual"><div className="portrait-frame">
      <div className="portrait-label"><span className="status-dot"/> OPEN TO COLLABORATE <ArrowUpRight size={16}/></div>
      <img src={`${assetPath}/profile-photo.webp`} alt="Samarth Narula, Cloud and AI Architect" width="640" height="720" fetchPriority="high"/>
      <div className="portrait-caption"><span>Architect.<br/>Engineer. Builder.</span><span className="portrait-location"><MapPin size={14}/> Mumbai, IN</span></div>
    </div><div className="architecture-note"><span className="note-icon"><Layers3 size={21}/></span><div><strong>From architecture to impact.</strong><span>AWS · GCP · AI · DevOps</span></div><span className="note-mark">↗</span></div><span className="visual-index">01 / A LITTLE ABOUT ME</span></div>
    <a href="#impact" className="scroll-note"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
  </section>;
}

function Impact() {
  return <section id="impact" className="impact-section"><div className="shell"><p className="eyebrow">GOOD ARCHITECTURE. MEASURABLE IMPACT.</p><div className="metrics-grid">{metrics.map(metric => <div className="metric" key={metric.label}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.detail}</p></div>)}</div></div></section>;
}

function Work() {
  const icons = [BrainCircuit, Database, Cloud, Layers3, TerminalSquare, GitBranch];
  return <section id="work" className="section shell"><SectionHeading number="01" label="Selected work" title="Built for real-world complexity." text="A selection of platforms, products and engineering challenges across enterprise cloud, AI and data."/>
    <div className="projects-grid">{projects.map((project, index) => { const Icon = icons[index]; return <article className={`project-card project-${index}`} key={project.title}>
      <div className="project-illustration" aria-hidden="true"><div className="diagram-topline"><span>ENGINEERING / {project.number}</span><span className="diagram-live"><i/> SYSTEM DESIGN</span></div><div className="diagram"><div className="diagram-node node-left">{['SCAN', 'INGEST', 'ACCOUNT', 'SENSOR', 'MARKET', 'REQUEST'][index]}</div><span className="diagram-connector"/><div className="diagram-core"><Icon size={33} strokeWidth={1.3}/></div><span className="diagram-connector"/><div className="diagram-node node-right">{['REMEDIATE', 'ACTIVATE', 'DEPLOY', 'MAP', 'INSIGHT', 'PROCESS'][index]}</div></div><div className="diagram-bottomline"><span>ARCHITECTURE → IMPLEMENTATION</span><span>↗</span></div></div>
      <div className="project-copy"><p className="eyebrow">{project.company}</p><h3>{project.title}</h3><p>{project.description}</p><ul className="tags" aria-label="Technologies">{project.stack.map(item => <li key={item}>{item}</li>)}</ul></div>
    </article>; })}</div>
  </section>;
}

function Services() {
  return <section id="services" className="services-section"><div className="section shell"><SectionHeading number="02" label="How I can help" title="Your next challenge. My kind of work." text="Independent consulting that connects the big picture with the details needed to ship."/>
    <div className="services-grid">{services.map((service, index) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-top"><Icon size={27} strokeWidth={1.4}/><span>0{index+1}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-footer">{service.tags.join(' / ')}</div></article>; })}</div>
    <div className="consulting-strip"><span><span className="status-dot"/> Available through <strong>Narula Cloud & AI Consulting</strong></span><a className="text-link" href="#contact">Discuss a project <ArrowUpRight size={17}/></a></div>
  </div></section>;
}

function Experience() {
  return <section id="experience" className="section shell"><SectionHeading number="03" label="Experience" title="A career of building what’s next." text="From enterprise engineering to independent consulting. Deep technical work, across teams and industries."/>
    <div className="experience-list">{experience.map((job,index) => <details key={`${job.company}-${job.period}`} className={`experience-item ${index < 2 ? 'current-role' : ''}`} open={index < 2}>
      <summary><div className="experience-date"><span>{job.period}</span>{index < 2 && <span className="current-badge"><span className="status-dot"/> Current</span>}</div><div className="experience-title"><h3>{job.role}</h3><p>{job.company}</p></div><span className="experience-toggle" aria-hidden="true">+</span></summary>
      <div className="experience-body"><div className="experience-context"><p>{job.client}</p><span><MapPin size={14}/>{job.location}</span></div><ul>{job.points.map(point => <li key={point}><ArrowUpRight size={15}/><span>{point}</span></li>)}</ul></div>
    </details>)}</div><p className="experience-hint">Select any role to explore the work.</p>
  </section>;
}

function Skills() {
  return <section id="skills" className="skills-section"><div className="section shell"><SectionHeading number="04" label="The toolkit" title="Depth where it matters." text="A practical toolkit for designing, building and operating cloud and AI platforms."/>
    <div className="toolkit-grid">{skillGroups.map((group,index) => <div className="toolkit-group" key={group.title}><span className="toolkit-number">0{index+1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
    <div className="credentials-grid"><div className="certifications"><div className="credential-heading"><Award size={22}/><h3>Cloud credentials</h3><span>AWS + GCP</span></div><ul>{certifications.map(cert => <li key={cert}><Check size={15}/>{cert}</li>)}</ul><p className="credential-note">Certifications earned across cloud architecture, security, DevOps and machine learning.</p></div>
      <div className="publications"><p className="eyebrow">Beyond the day job</p><h3>Build. Share. Repeat.</h3><p>Open-source tools, technical courses and industry perspectives.</p>{[
        {label:'GitHub AI PR Review Agent',type:'OPEN SOURCE',href:'https://github.com/marketplace/actions/github-pr-review-agent'},
        {label:'Technical courses on Udemy',type:'TEACHING',href:'https://www.udemy.com/user/samarth-narula-3/'},
        {label:'Technical courses on Coursera',type:'TEACHING',href:'https://www.coursera.org/instructor/samarth-narula'},
        {label:'Cloud expertise & recognition',type:'COMMUNITY',href:'https://do.starweaver.com/channels/samarth-narula/about-me'}
      ].map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><span><small>{link.type}</small>{link.label}</span><ArrowUpRight size={20}/></a>)}</div>
    </div>
  </div></section>;
}

function Contact() {
  return <section id="contact" className="section shell"><div className="contact-panel"><div className="contact-top"><p className="eyebrow"><span className="status-dot"/> LET’S BUILD SOMETHING THAT MATTERS</p><span>MUMBAI, INDIA · WORKING GLOBALLY</span></div><div className="contact-main"><h2>Big ideas.<br/><span className="serif">Let’s make them real.</span></h2><div><p>Have a platform to modernize, an AI idea to build, or a cloud challenge to solve? Let’s talk.</p><a className="button button-accent" href="mailto:samarthnarula253@gmail.com">Start a conversation <ArrowUpRight size={19}/></a></div></div><div className="contact-bottom"><a href="mailto:samarthnarula253@gmail.com"><Mail size={16}/>samarthnarula253@gmail.com</a><a href="tel:+919930864102"><Phone size={16}/>+91 9930864102</a><a href="https://wa.me/919930864102" target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp <ArrowUpRight size={14}/></a></div></div></section>;
}

export default function Home() {
  return <><a href="#main-content" className="skip-link">Skip to content</a><Header/><main id="main-content"><Hero/><Impact/><Work/><Services/><Experience/><Skills/><Contact/></main><footer className="site-footer shell"><a className="footer-brand" href="#top">Samarth Narula<span>Cloud & AI Architect · Independent Consultant</span></a><div className="footer-links"><a href="https://github.com/sam253narula" target="_blank" rel="noreferrer" aria-label="Samarth on GitHub"><Github size={19}/></a><a href="https://linkedin.com/in/samarth-narula" target="_blank" rel="noreferrer" aria-label="Samarth on LinkedIn"><Linkedin size={19}/></a><a href={`${assetPath}/Samarth-Narula-Resume.pdf`} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15}/></a><a href="#top">Back to top <ArrowUpRight size={15}/></a></div></footer></>;
}
