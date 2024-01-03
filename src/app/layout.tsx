import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Rubik } from 'next/font/google'
import { Archivo } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import NavBar from './navbar'
import Footer from './footer'
import Script from 'next/script'
import FacebookLink from '@/components/Links'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '700'] })
const playFair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] })
const rubik = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })
const archivo = Archivo({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], style: ['normal'] })

export const metadata: Metadata = {
  title: 'GT Code Lab',
  description: 'Creative Software Solutions',
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LftAT4pAAAAAPCVNchOKg3eifc47suFNMHI_Zon" async />
        {/* Tutaj mogą być inne elementy head, takie jak meta tagi, title itp. */}
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={inter.className}>
        {children}
        <FacebookLink />
      </body>
    </html>
  );
}
