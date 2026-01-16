import './globals.css'

export const metadata = {
  title: 'PT Adnira Dalil Anugrah - Solusi Transportasi, IT & PPOB',
  description: 'Mitra strategis untuk layanan transportasi, pengembangan aplikasi, dan pembayaran digital (PPOB Host to Host). Profesional, terpercaya, dan inovatif.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
