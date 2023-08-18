import NavBar from '@/components/NavBar'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preukti Parajuli',
  description: "Hi, I am Preukti Parajuli, a passionate UI/UX Designer based in Kathmandu, Nepal.  I began my designing journey since 2023. This space is where creativity and functionality unite. I believe that design is not just about making things look pretty, but it's also about crafting seamless and meaningful user experiences. Here you'll find a collection of my latest projects. Feel free to explore my work and get in touch if you'd like to collaborate. Let's create exceptional experiences together!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body >
        {children}
        </body>
    </html>
  )
}
