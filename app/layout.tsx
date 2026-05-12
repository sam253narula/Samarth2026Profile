import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://sam253narula.github.io/Samarth2026Profile';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Samarth Narula | Cloud, AI & Platform Architect',

  description:
    'Samarth Narula is a Senior Cloud Architect specializing in AWS, GCP, Kubernetes, DevOps, AI/ML platforms, data engineering, cybersecurity automation and enterprise cloud modernization.',

  keywords: [
    'Samarth Narula',
    'Cloud Architect',
    'AI Architect',
    'AWS Architect',
    'GCP Architect',
    'Kubernetes Architect',
    'DevOps Consultant',
    'Platform Engineering',
    'GenAI Engineer',
    'Cloud Consultant Mumbai'
  ],

  authors: [{ name: 'Samarth Narula' }],
  creator: 'Samarth Narula',
  publisher: 'Samarth Narula',

  alternates: {
    canonical: siteUrl
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Samarth Narula | Cloud, AI & Platform Architect',
    description:
      'Senior Cloud Architect building AWS, GCP, Kubernetes, DevOps, AI/ML, data and cybersecurity automation platforms.',
    siteName: 'Samarth Narula',
    locale: 'en_IN',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Samarth Narula - Cloud, AI and Platform Architect'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Samarth Narula | Cloud, AI & Platform Architect',
    description:
      'Senior Cloud Architect specializing in AWS, GCP, Kubernetes, DevOps, AI platforms and enterprise cloud modernization.',
    images: [`${siteUrl}/og-image.png`]
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}