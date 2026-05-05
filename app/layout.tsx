import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillGap — Identify skill gaps in your engineering team',
  description: 'Analyzes job descriptions, GitHub activity, and team surveys to identify skill gaps and suggest training priorities for engineering managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fa91c2c7-9149-435f-93e4-380bbfa81a21"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
