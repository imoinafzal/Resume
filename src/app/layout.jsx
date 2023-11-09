import './globals.css'
import Sidebar from "../components/sidebar";

import { personalData } from "../components/page-data";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='flex flex-col sm:flex-row'>
        <Sidebar data={personalData} />
        <main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto'>
        {children}
        </main>
      </body>
    </html>
  );
}
