import type { Metadata } from 'next';

import '../styles/_index.scss';
import SideNavBar from '@/components/SideNavBar';

import { Syne } from 'next/font/google';
const syne = Syne({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nimmu Labs | Front-end Development',
  description: 'TODO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <main>
          <div className="container">
            <SideNavBar />

            <div className="content">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
