import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enat Tutor - Transform Your Future with Excellence',
  description: 'Premium Tutoring Services in Addis Ababa. Grades 1-12 with personalized learning, expert tutors, and flexible scheduling. Start your success journey today!',
  keywords: 'tutoring, education, Addis Ababa, Ethiopia, online tutoring, personalized learning, AAU graduates',
  authors: [{ name: 'Enat Tutor' }],
  creator: 'Enat Tutor',
  publisher: 'Enat Tutor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.enattutor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Enat Tutor - Transform Your Future with Excellence',
    description: 'Premium Tutoring Services in Addis Ababa. Grades 1-12 with personalized learning, expert tutors, and flexible scheduling.',
    url: 'https://www.enattutor.com',
    siteName: 'Enat Tutor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enat Tutor - Premium Tutoring Services in Addis Ababa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enat Tutor - Transform Your Future with Excellence',
    description: 'Premium Tutoring Services in Addis Ababa. Grades 1-12 with personalized learning, expert tutors, and flexible scheduling.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 