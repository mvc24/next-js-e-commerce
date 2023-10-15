import './globals.css';
import { Cormorant_Garamond } from 'next/font/google';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import Header from './Header';

const mainFont = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: { default: 'Oriana Music', template: '%s | Oriana Music' },
  description: 'Handmade music editions',
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  const allItemsFromCookie = getCookie('cart');
  const parsedCookie = parseJson(allItemsFromCookie);

  return (
    <html lang="en">
      <body className={mainFont.className}>
        <nav className="navigation">
          <Header itemsInCart={parsedCookie} />
        </nav>
        <div className="content">{children}</div>
        <footer>© {year} Richard W. Carter </footer>
      </body>
    </html>
  );
}
