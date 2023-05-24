import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
// eslint-disable-next-line no-unused-vars
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Marcos Vinicius Web Designer',
  description: 'Criamos soluções inovadoras',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900 overflow-hidden`}
      >
        <main className="bg-[url(../assets/bg-stars.svg)] bg-cover grid grid-cols-2 min-h-screen relative">
          {children}

          <div
            className="absolute right-0 top-1/2 h-[288px] blur-full
        w-[556px] -translate-y-1/2 rounded-full translate-x-1/2 bg-purple-700 opacity-50"
          ></div>
        </main>
      </body>
    </html>
  )
}
