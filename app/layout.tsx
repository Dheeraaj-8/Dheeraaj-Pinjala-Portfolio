import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../contexts/theme-context'

export const metadata: Metadata = {
  title: 'Dheeraaj Pinjala - Portfolio',
  description: 'AI Enthusiast | Cloud & DevOps Practitioner | Ex-Software Engineer',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
