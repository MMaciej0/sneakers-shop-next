import Navbar from './components/navbar/Navbar';
import { Roboto } from 'next/font/google';
import './globals.css';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sneakers Shop',
  description: 'Sneakers Shop',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <LoginModal />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
