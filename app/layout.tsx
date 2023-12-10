import GlobalStyle from "./globals"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '700'] })

export const metadata: Metadata = {
  title: 'HUBusca',
  description: 'Busca por perfis do GitHub.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
