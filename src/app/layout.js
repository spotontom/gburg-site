import Link from 'next/link';
import './globals.css';
import Navbar from "./components/Navbar"

export const metadata = {
  title: 'SOTC Property Site',
  description: 'Explore and book beautiful vacation rentals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
      <Navbar />
        <img src="/imgs/transparent_logo.png" alt="Bearadise Logo" className="overlay-logo" />
        <main className="min-h-screen bg-stone-50 text-stone-900">{children}</main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Bearadise in the Smokies</h4>
              <p>© 2023 Bearadise in the Smokies. All rights reserved.</p>
              <h4>Properties</h4>
              <ul>
                <li><a href='https://www.airbnb.com/rooms/1014022255504809661?viralityEntryPoint=1&unique_share_id=9B74436D-3966-45BC-8308-8ECE65B430B3&slcid=66ef925457fc4c8a87052e3a68c4ca77&s=76&adults=1&slug=nDU1EBFS&source_impression_id=p3_1754667086_P3NXKX25Fq0sRIGT'>Gatlinburg Bearadise in the Smokies Cabin</a></li>
                <li><a href='https://www.airbnb.com/rooms/47957094?viralityEntryPoint=1&unique_share_id=D033B526-B34E-49CA-8F59-690DDA2E27E6&slcid=93c50e16c2d444c99c3b7bf8658d5370&s=76&adults=1&slug=g4yUw24F&source_impression_id=p3_1754671530_P3Mh7lXCH1aL_VBr'>Panama City Beach Dream Condo</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/availability">Availability</a></li>
                <li><a href="/book">Book</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@bearadiselodge.com</p>
              <p>Phone: (850) 123-4567</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}