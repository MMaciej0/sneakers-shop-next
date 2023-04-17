import Navbar from './components/navbar/Navbar';
import { Roboto } from 'next/font/google';
import './globals.css';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/providers/ToasterProvider';

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
        <RegisterModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
