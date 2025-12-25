// app/layout.tsx
//import './globals.css'

export const metadata = {
  title: 'CircleSurvival 3D',
  description: 'Play CircleSurvival 3D - Endless survival game in browser!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
