// app/layout.js
import config from '../config';

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
        {/* Google Fonts: Roboto */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" 
        />
        <style>{`
          body { font-family: 'Roboto', sans-serif; background-color: #f5f5f5; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
