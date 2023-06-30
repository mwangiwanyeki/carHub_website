import { Navbar, Footer } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'Take action an discover your best car you dreames of driving',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
