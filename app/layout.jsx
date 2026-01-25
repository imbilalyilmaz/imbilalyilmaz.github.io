import './globals.css'

export const metadata = {
  title: 'Bilal Yılmaz - Portfolio',
  description: 'Bilal Yılmaz - Computer Engineering Student | AI, Cloud Computing & Computer Graphics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
