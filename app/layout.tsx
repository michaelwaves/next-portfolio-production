import './globals.css'
import type { Metadata } from 'next'
import { Lilita_One, Audiowide, STIX_Two_Text, Indie_Flower, VT323 } from 'next/font/google'


const lilitaOne = Lilita_One({ subsets: ['latin'], weight: ["400"], variable: "--font-lilita" })
const audiowide = Audiowide({ subsets: ['latin'], weight: ["400"], variable: "--font-audiowide" })
const indie = Indie_Flower({ subsets: ['latin'], weight: ["400"], variable: "--font-indie" })
const stix = STIX_Two_Text({ subsets: ['latin'], weight: ["400"], variable: "--font-stix" })
const vt323 = VT323({ subsets: ['latin'], weight: ["400"], variable: "--font-vt323" })

export const metadata: Metadata = {
  title: 'Michaels Room',
  description: 'The best room in space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${lilitaOne.variable} ${audiowide.variable} ${indie.variable} ${stix.variable} ${audiowide.className} ${vt323.variable}`}>{children}</body>
    </html>
  )
}


