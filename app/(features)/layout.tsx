import { AppProviders } from 'app/_providers';
import 'app/_styles/global/index.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AppProviders>
      <html lang="en-US">
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    </AppProviders>
  )
}