import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Cruz Electic Contractor - Storm Lake',
  description: 'Electric storm lake contractor isaac cruz cherokee',
}

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  )
}
