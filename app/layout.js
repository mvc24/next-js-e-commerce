import './globals.css';
import { Inter } from 'next/font/google';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Oriana Music', template: '%s | Oriana Music' },
  description: 'Handmade music editions',
};

export default function RootLayout({ children }) {
  const allItemsFromCookie = getCookie('cart');
  const parsedCookie = parseJson(allItemsFromCookie);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Header itemsInCart={parsedCookie} />
        </nav>

        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
