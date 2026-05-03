import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MagneticCursor } from '@/components/MagneticCursor';
import { Loader } from '@/components/Loader';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Aditya Katyayan — Customer Support Officer',
  description:
    'Technical support professional supporting POS systems, enterprise apps, and IAM. Azure AZ-900 certified.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Loader />
          <MagneticCursor />
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
