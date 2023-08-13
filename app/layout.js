"use client"
import { useClient } from 'next/client';
import Head from 'next/head'
import './globals.css'

import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.css'

import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
       
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>{children}</body>
    </html>
  )
}
