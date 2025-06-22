import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RAARYA - Modern Real Estate Solutions',
  description: 'Find your dream property with RAARYA. Premium real estate services for buying, selling, and renting properties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919876543210?text=Hello%20RAARYA%2C%20I%20am%20interested%20in%20your%20properties!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 bottom-6 right-6 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-400 shadow-2xl shadow-yellow-400/40 border-4 border-white/80 hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-9 h-9 text-green-700 drop-shadow-lg"
            >
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.25 6.438L4 29l7.75-2.188C13.416 27.168 14.684 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.168 0-2.312-.188-3.396-.562l-.24-.084-4.604 1.302 1.312-4.5-.156-.24C7.188 18.312 7 17.168 7 16c0-5.062 4.134-9.188 9.188-9.188S25.375 10.938 25.375 16c0 5.062-4.134 9.188-9.188 9.188zm5.188-6.25c-.25-.125-1.5-.75-1.75-.834-.25-.084-.438-.125-.625.125-.188.25-.719.834-.875 1.01-.156.188-.312.188-.562.062-.25-.125-1.062-.391-2.031-1.25-.75-.668-1.25-1.5-1.406-1.75-.146-.25-.016-.375.109-.5.109-.109.25-.281.375-.422.125-.141.166-.25.25-.417.084-.167.042-.313-.021-.438-.062-.125-.625-1.5-.854-2.062-.229-.562-.459-.479-.625-.479-.167 0-.354-.021-.542-.021-.188 0-.479.062-.729.312-.25.25-.958.938-.958 2.281 0 1.344.979 2.646 1.125 2.833.146.188 1.917 2.938 4.646 3.979.65.229 1.156.365 1.552.469.652.167 1.246.146 1.708.084.521-.062 1.5-.604 1.708-1.188.208-.583.208-1.083.146-1.188-.062-.104-.229-.167-.479-.292z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce group-hover:animate-none">Chat</span>
          </div>
        </a>
        <Toaster />
      </body>
    </html>
  );
}