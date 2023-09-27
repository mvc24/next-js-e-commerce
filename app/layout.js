import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Oriana Music', template: '%s | Oriana Music' },
  description: 'Handmade music editions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/about ">About</Link>
            <Link href="/catalogue">Catalogue</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
