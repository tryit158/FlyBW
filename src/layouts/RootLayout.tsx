import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
  const location = useLocation();
  const { hash, pathname } = location;

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen flex flex-col pt-8 px-4 md:px-8 max-w-5xl mx-auto print:p-0 print:m-0 print:min-h-0 print:block print:w-full">
      <div className="print:hidden"><Header /></div>
      <main className="flex-grow space-y-24 py-12 print:space-y-0 print:py-0 print:m-0">
        <Outlet />
      </main>
      <div className="print:hidden"><Footer /></div>
      <ScrollRestoration />
    </div>
  );
}
