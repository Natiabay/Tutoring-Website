import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enat Tutor - Serving with Care!',
  description: 'Personalized Tutoring with a Mother\'s Care. Grades 1-12 in Addis Ababa, Ethiopia. Online and in-person tutoring by AAU graduates.',
  keywords: 'tutoring, education, Addis Ababa, Ethiopia, online tutoring, personalized learning',
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
    title: 'Enat Tutor - Serving with Care!',
    description: 'Personalized Tutoring with a Mother\'s Care. Grades 1-12 in Addis Ababa, Ethiopia.',
    url: 'https://www.enattutor.com',
    siteName: 'Enat Tutor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enat Tutor - Personalized Tutoring with a Mother\'s Care',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enat Tutor - Serving with Care!',
    description: 'Personalized Tutoring with a Mother\'s Care. Grades 1-12 in Addis Ababa, Ethiopia.',
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
        {children}
      </body>
    </html>
  )
} 