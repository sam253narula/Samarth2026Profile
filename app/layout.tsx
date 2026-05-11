import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Samarth Narula | Cloud, AI & Platform Architect',
  description:
    'Premium profile website for Samarth Narula, Senior Cloud Architect specializing in AWS, GCP, AI/ML platforms, Kubernetes, DevOps and large-scale enterprise systems.',
  keywords: [
    'Samarth Narula',
    'Cloud Architect',
    'AI Architect',
    'AWS',
    'GCP',
    'Kubernetes',
    'DevOps',
    'Platform Engineering'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise font-sans antialiased">{children}</body>
    </html>
  );
}
