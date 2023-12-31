import './globals.css'
import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import 'funuicss/css/fun.css'
import Head from 'next/head'
const mont_serrat = Montserrat_Alternates({
   subsets: ["latin"] ,
  weight: ['400', '700' , '100', '200' , '500' , '900' , '800'],
style: ['normal', 'italic'], })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mont_serrat.className}>
      <Head>
   
      </Head>
      <body>{children}</body>
    </html>
  )
}

