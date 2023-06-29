import { Inter } from 'next/font/google'
import getMetadata from './setup'

const inter = Inter({ subsets: ['latin'] })

export const metadata = getMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="poppins mb-6">
          <span className="font-bold">Github</span>
          {" "}
          <span>Jobs</span>
        </div>
        {children}
      </body>
    </html>
  )
}
