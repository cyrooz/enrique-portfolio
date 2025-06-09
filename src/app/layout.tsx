
import StyledComponentsRegistry from './registry';
import Navbar from './components/Navbar';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Enrique Melendez',
  description: 'Celebrity stylist portfolio',
};

// Load Inter variable font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
