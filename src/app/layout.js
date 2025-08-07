import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'SOTC Property Site',
  description: 'Explore and book beautiful vacation rentals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/availability">Availability</Link></li>
            <li><Link href="/book">Book</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}