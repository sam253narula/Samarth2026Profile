'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users2,
  Zap
} from 'lucide-react';
import { useRef } from 'react';
import CustomCursor from '@/components/CustomCursor';
import MagneticButton from '@/components/MagneticButton';
import SectionLabel from '@/components/SectionLabel';

const navItems = ['work', 'services', 'experience', 'skills', 'contact'];

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-paper/10 bg-ink/70 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        <a href="#top" className="cursor-target flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-sm font-black text-ink">SN</span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-paper/80 sm:inline">Samarth Narula</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/50 transition hover:text-paper">
              {item}
            </a>
          ))}
        </div>
        <a
          href="mailto:samarthnarula253@gmail.com"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink transition hover:bg-acid md:w-auto md:px-5"
        >
          <span className="hidden text-xs font-bold uppercase tracking-[0.2em] md:inline">Let’s talk</span>
          <ArrowUpRight className="h-4 w-4 md:ml-2" />
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section id="top" ref={heroRef} className="relative min-h-screen overflow-hidden px-4 pt-32 md:px-8 md:pt-40">
      <motion.div style={{ y, opacity }} className="absolute right-[-20vw] top-24 h-[50vw] w-[50vw] rounded-full bg-acid/20 blur-[140px]" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-8rem] top-[18rem] h-64 w-64 rounded-full border border-paper/10 bg-paper/5 blur-sm"
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-4 py-2 text-sm font-medium text-paper/70"
          >
            <Sparkles className="h-4 w-4 text-acid" />
            Senior Cloud Architect · AI Platforms · Kubernetes · DevOps
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 130 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[17vw] font-black uppercase leading-[0.78] tracking-[-0.09em] text-paper md:text-[13vw] lg:text-[9.2rem]"
            >
              Cloud
              <span className="block big-outline">AI</span>
              <span className="block">Architect</span>
            </motion.h1>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.32, duration: 0.8 }}
            className="mt-8 flex max-w-3xl flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-xl text-lg leading-8 text-paper/68 md:text-xl">
              I design and build large-scale cloud, data and AI platforms across AWS and GCP — from enterprise lakehouses and
              Kubernetes platforms to AI-powered engineering products and secure DevOps automation.
            </p>
            <a href="#work" className="cursor-target group grid h-24 w-24 shrink-0 place-items-center rounded-full border border-paper/20 bg-paper text-ink transition hover:bg-acid">
              <ArrowDown className="h-7 w-7 transition group-hover:translate-y-1" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#contact" variant="acid">Hire me</MagneticButton>
            <MagneticButton href="/Samarth-Narula-Resume.pdf" variant="light">Download resume</MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          <div className="card-sheen clip-card rounded-[2.2rem] border border-paper/10 bg-paper p-4 text-ink shadow-glow">
            <div className="rounded-[1.6rem] bg-ink p-5 text-paper">
              <div className="mb-14 flex items-center justify-between">
                <span className="rounded-full bg-acid px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-ink">available</span>
                <span className="text-xs uppercase tracking-[0.24em] text-paper/45">Mumbai · India</span>
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-paper/10 bg-paper/5 p-5">
                <div className="absolute inset-0 bg-radialGrid bg-[length:18px_18px] opacity-25" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="mx-auto h-52 w-52 rounded-full border border-dashed border-acid/70 p-8"
                >
                  <div className="grid h-full w-full place-items-center rounded-full bg-acid text-6xl font-black text-ink">SN</div>
                </motion.div>
                <div className="relative mt-8 grid grid-cols-2 gap-3">
                  {['AWS', 'GCP', 'AI', 'K8s'].map((item) => (
                    <div key={item} className="rounded-2xl border border-paper/10 bg-ink/70 p-4 text-center text-sm font-bold uppercase tracking-[0.18em]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-full border border-paper/10 p-2 pl-5">
                <span className="text-sm text-paper/60">10 years building enterprise systems</span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-paper text-ink"><Zap className="h-5 w-5" /></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ['Cloud Architecture', 'AI Platforms', 'Kubernetes', 'DevOps', 'Data Lakes', 'Security', 'Cost Optimization', 'RAG Workflows'];
  return (
    <section className="overflow-hidden border-y border-paper/10 py-6">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="font-display text-5xl font-black uppercase tracking-[-0.06em] text-paper/90 md:text-7xl">
            {word} <span className="text-acid">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/10 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.7 }}
            className="bg-ink p-8 md:p-10"
          >
            <p className="font-display text-6xl font-black tracking-[-0.08em] text-paper md:text-7xl">{metric.value}</p>
            <p className="mt-4 text-lg font-semibold text-paper">{metric.label}</p>
            <p className="mt-2 text-sm text-paper/50">{metric.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="services" title="What I build for teams that need scale." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                className="card-sheen group rounded-[2rem] border border-paper/10 bg-paper/5 p-6 transition-colors hover:bg-paper hover:text-ink"
              >
                <div className="mb-14 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-paper text-ink transition group-hover:bg-ink group-hover:text-paper">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-5xl font-black tracking-[-0.08em] text-paper/10 transition group-hover:text-ink/10">0{index + 1}</span>
                </div>
                <h3 className="font-display text-3xl font-black tracking-[-0.05em]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-paper/60 transition group-hover:text-ink/65">{service.text}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-paper/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-paper/50 transition group-hover:border-ink/15 group-hover:text-ink/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="selected work" title="Enterprise work, presented like products." />
        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-paper/10 bg-paper text-ink"
            >
              <div className={`absolute right-[-15%] top-[-60%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${project.accent} opacity-70 blur-3xl transition duration-700 group-hover:scale-125`} />
              <div className="relative grid gap-8 p-7 md:grid-cols-[0.26fr_1fr_0.55fr] md:p-10 lg:p-14">
                <span className="font-display text-7xl font-black tracking-[-0.09em] text-ink/12">{project.number}</span>
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-ink/45">{project.company}</p>
                  <h3 className="max-w-3xl font-display text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">{project.title}</h3>
                </div>
                <div className="self-end">
                  <p className="text-base leading-7 text-ink/68">{project.description}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="Career Evolution" title="Full journey." />
        <div className="rounded-[2.5rem] border border-paper/10 bg-paper/5 p-4 md:p-8">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.65 }}
              className="group grid gap-6 border-b border-paper/10 py-8 last:border-b-0 md:grid-cols-[0.24fr_0.36fr_1fr] md:py-10"
            >
              <div>
                <p className="font-display text-5xl font-black tracking-[-0.08em] text-paper/14 group-hover:text-acid">0{index + 1}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-paper/45">{job.period}</p>
              </div>
              <div>
                <h3 className="font-display text-3xl font-black tracking-[-0.05em] text-paper">{job.role}</h3>
                <p className="mt-2 text-lg text-paper/70">{job.company}</p>
                <p className="mt-1 text-sm text-paper/45">{job.client}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-paper/45"><MapPin className="h-4 w-4" />{job.location}</p>
              </div>
              <ul className="space-y-4 text-base leading-7 text-paper/62">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-paper px-4 py-24 text-ink md:px-8">
      <div className="absolute inset-0 bg-radialGrid bg-[length:20px_20px] opacity-25 invert" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-ink/45">/toolkit</p>
            <h2 className="font-display text-6xl font-black leading-[0.85] tracking-[-0.07em] md:text-8xl">Skills, certs & proof.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/65">
            A profile built around cloud architecture, AI engineering, DevOps automation, data platforms and hands-on delivery across enterprise systems.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.65 }}
              className="rounded-[2rem] border border-ink/10 bg-ink p-6 text-paper shadow-soft"
            >
              <h3 className="font-display text-3xl font-black tracking-[-0.05em]">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-paper/10 px-3 py-1 text-xs font-semibold text-paper/62">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-ink p-8 text-paper">
            <div className="mb-8 flex items-center gap-3"><Award className="h-6 w-6 text-acid" /><h3 className="font-display text-4xl font-black tracking-[-0.06em]">Certifications</h3></div>
            <div className="grid gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-2xl border border-paper/10 p-4 text-sm text-paper/72">{cert}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-white/50 p-8">
            <div className="mb-8 flex items-center gap-3"><Globe2 className="h-6 w-6" /><h3 className="font-display text-4xl font-black tracking-[-0.06em]">Publications & recognition</h3></div>
            <div className="grid gap-4">
              <a className="cursor-target group rounded-3xl border border-ink/10 bg-paper p-5 transition hover:bg-acid" href="https://github.com/marketplace/actions/github-pr-review-agent" target="_blank" rel="noreferrer">
                <p className="text-sm uppercase tracking-[0.2em] text-ink/45">GitHub Marketplace</p>
                <p className="mt-2 text-xl font-bold">GitHub AI PR Review Agent</p>
              </a>
              <a className="cursor-target group rounded-3xl border border-ink/10 bg-paper p-5 transition hover:bg-acid" href="https://www.udemy.com/user/samarth-narula-3/" target="_blank" rel="noreferrer">
                <p className="text-sm uppercase tracking-[0.2em] text-ink/45">Instructor</p>
                <p className="mt-2 text-xl font-bold">Udemy & Coursera course publication</p>
              </a>
              <a className="cursor-target group rounded-3xl border border-ink/10 bg-paper p-5 transition hover:bg-acid" href="https://do.starweaver.com/channels/samarth-narula/about-me" target="_blank" rel="noreferrer">
                <p className="text-sm uppercase tracking-[0.2em] text-ink/45">Recognition</p>
                <p className="mt-2 text-xl font-bold">Cloud Domain Expert listing + Marquis Who’s Who Honored Listee</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[3rem] border border-paper/10 bg-paper p-6 text-ink md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-ink/45">/contact</p>
              <h2 className="font-display text-6xl font-black leading-[1.05] tracking-[-0.06em] md:text-8xl">Have a cloud or AI build?</h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
                I’m open to Cloud Architect, AI Architect, DevOps, platform engineering and independent consulting opportunities.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-ink/70">
              <a className="cursor-target flex items-center gap-3 rounded-full bg-ink px-5 py-4 text-paper transition hover:bg-acid hover:text-ink" href="mailto:samarthnarula253@gmail.com"><Mail className="h-5 w-5" />samarthnarula253@gmail.com</a>
              <a className="cursor-target flex items-center gap-3 rounded-full bg-ink px-5 py-4 text-paper transition hover:bg-acid hover:text-ink" href="tel:+919930864102"><Phone className="h-5 w-5" />+91 9930864102</a>
              <a className="cursor-target flex items-center gap-3 rounded-full bg-ink px-5 py-4 text-paper transition hover:bg-acid hover:text-ink" href="https://wa.me/919930864102" target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" />WhatsApp me</a>
            </div>
          </div>
          <form action="mailto:samarthnarula253@gmail.com" method="post" encType="text/plain" className="rounded-[2rem] bg-ink p-5 text-paper md:p-8">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/45">
                Name
                <input name="name" placeholder="Your name" className="rounded-2xl border border-paper/10 bg-paper/5 px-5 py-4 text-base font-medium normal-case tracking-normal text-paper outline-none transition focus:border-acid" />
              </label>
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/45">
                Email
                <input name="email" type="email" placeholder="you@company.com" className="rounded-2xl border border-paper/10 bg-paper/5 px-5 py-4 text-base font-medium normal-case tracking-normal text-paper outline-none transition focus:border-acid" />
              </label>
              <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/45">
                Project
                <textarea name="message" rows={6} placeholder="Tell me what you want to build..." className="rounded-2xl border border-paper/10 bg-paper/5 px-5 py-4 text-base font-medium normal-case tracking-normal text-paper outline-none transition focus:border-acid" />
              </label>
              <button className="cursor-target mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-acid px-6 py-5 text-sm font-black uppercase tracking-[0.2em] text-ink transition hover:bg-paper" type="submit">
                Send inquiry <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-paper/10 px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-3xl font-black tracking-[-0.06em] text-paper">Samarth Narula</p>
        <div className="flex flex-wrap gap-4 text-sm text-paper/50">
          <a href="#top" className="hover:text-paper">Back to top</a>
          <a href="/Samarth-Narula-Resume.pdf" className="hover:text-paper">Resume</a>
          <a href="mailto:samarthnarula253@gmail.com" className="hover:text-paper">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-ink text-paper">
      <CustomCursor />
      <Header />
      <Hero />
      <Marquee />
      <Metrics />
      <Work />
      <Services />
      <Experience />
      <Skills />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/919930864102"
        target="_blank"
        rel="noreferrer"
        className="cursor-target fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-acid text-ink shadow-glow transition hover:scale-110 md:h-16 md:w-16"
        aria-label="WhatsApp Samarth"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
