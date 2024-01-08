interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}