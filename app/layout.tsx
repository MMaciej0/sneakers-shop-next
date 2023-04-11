import Navbar from './components/Navbar/Navbar';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sneakers Shop',
  description: 'Sneakers Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
