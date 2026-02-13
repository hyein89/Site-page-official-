// app/page.js

import { decodeData } from '../lib/crypto';
import config from '../config';
import { notFound } from 'next/navigation';
import RedirectTimer from './components/RedirectTimer';

// --- 1. METADATA GENERATOR (Server Side) ---
export async function generateMetadata({ searchParams }) {
  const queryCode = searchParams.q;

  // Default metadata if no code is present
  const defaultMeta = {
    title: 'Content Not Found',
    description: 'The link you followed may be broken, or the page may have been removed.',
  };

  if (!queryCode) return defaultMeta;

  const data = decodeData(queryCode);

  // If decoding fails, return default meta
  if (!data) return defaultMeta;

  return {
    title: data.title,
    description: "Click here to watch the full video.", // English description
    openGraph: {
      title: data.title,
      description: "Click here to watch the full video.",
      siteName: 'Viral Video Update',
      images: [
        {
          url: data.image,
          // CRITICAL FIX: Hardcode dimensions to force FB to show the image immediately
          width: 1200, 
          height: 630,
          alt: data.title,
        },
      ],
      type: 'website',
      locale: 'en_US', // Set locale to English
    },
  };
}

// --- 2. MAIN PAGE COMPONENT ---
export default function Page({ searchParams }) {
  const queryCode = searchParams.q;

  // Logic: If no 'q' parameter, go to 404
  if (!queryCode) {
    notFound();
  }

  const data = decodeData(queryCode);

  // Logic: If code is invalid/fake, go to 404
  if (!data) {
    notFound();
  }

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="panel panel-default" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="glyphicon glyphicon-lock"></i> Secure Verification
          </h3>
        </div>
        <div className="panel-body">
          
          {/* Content Preview */}
          <div className="text-center" style={{ marginBottom: '20px' }}>
             <img 
                src={data.image} 
                alt="Preview" 
                className="img-thumbnail" 
                style={{ maxHeight: '250px', width: 'auto' }} 
             />
             <h4 style={{ marginTop: '15px', fontWeight: 'bold' }}>{data.title}</h4>
          </div>

          <hr />

          {/* Timer Component */}
          {/* Note: 'text' prop is passed here to ensure English output */}
          <RedirectTimer 
            offerLink={config.offerLink} 
            delay={config.delayTime} 
            text="Please wait, we are redirecting you to the destination..." 
          />
        </div>
        
        <div className="panel-footer text-center text-muted" style={{ fontSize: '12px' }}>
            &copy; {new Date().getFullYear()} Secure Redirect Service. All rights reserved.
        </div>
      </div>
    </div>
  );
}
