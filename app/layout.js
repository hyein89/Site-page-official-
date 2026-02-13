// app/layout.js
import config from '../config';
import Script from 'next/script'; // Wajib import ini buat jalanin Histats di Next.js

export const metadata = {
  title: config.siteName,
  description: 'Redirect service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Bootstrap 3 CDN */}
        <link 
          rel="stylesheet" 
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
        />
        
        {/* NEW FONT: Poppins (Lebih modern dan cantik daripada Roboto) */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" 
        />
        
        <style>{`
          /* Terapkan font Poppins ke seluruh body */
          body { 
            font-family: 'Poppins', sans-serif; 
            background-color: #f5f5f5; 
          }
        `}</style>
      </head>
      <body>
        
        {/* Konten Halaman Utama */}
        {children}

        {/* --- HISTATS INTEGRATION START --- */}
        
        {/* 1. Counter Div (Disembunyikan biar rapi, hapus style display jika mau dimunculkan) */}
        <div id="histats_counter" style={{ display: 'none' }}></div>

        {/* 2. Script Utama Histats */}
        <Script id="histats-script" strategy="afterInteractive">
          {`
            var _Hasync= _Hasync|| [];
            _Hasync.push(['Histats.start', '1,4828760,4,511,95,18,00000000']);
            _Hasync.push(['Histats.fasi', '1']);
            _Hasync.push(['Histats.track_hits', '']);
            (function() {
            var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
            hs.src = ('//s10.histats.com/js15_as.js');
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
            })();
          `}
        </Script>

        {/* 3. Noscript (Backup jika JS mati) */}
        <noscript>
          <a href="/" target="_blank">
            <img src="//sstatic1.histats.com/0.gif?4828760&101" alt="histats" border="0" />
          </a>
        </noscript>
        
        {/* --- HISTATS INTEGRATION END --- */}

      </body>
    </html>
  );
}
