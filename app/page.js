// app/page.js
import { decodeData } from '../lib/crypto';
import config from '../config';
import { notFound } from 'next/navigation';
import RedirectTimer from './components/RedirectTimer';

// 1. GENERATE METADATA (Untuk Facebook/WA Preview)
export async function generateMetadata({ searchParams }) {
  const queryCode = searchParams.q;

  // Jika tidak ada q, biarkan default (nanti di-handle logic di bawah)
  if (!queryCode) return { title: 'Not Found' };

  const data = decodeData(queryCode);

  // Jika decode gagal
  if (!data) return { title: 'Error' };

  return {
    title: data.title,
    description: "Click to see full content.",
    openGraph: {
      title: data.title,
      description: "Click to see full content.",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
  };
}

// 2. HALAMAN UTAMA
export default function Page({ searchParams }) {
  const queryCode = searchParams.q;

  // LOGIC: Jika tanpa q=, lempar ke 404
  if (!queryCode) {
    notFound();
  }

  const data = decodeData(queryCode);

  // LOGIC: Jika kode acak tidak valid, lempar ke 404
  if (!data) {
    notFound();
  }

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Please Wait</h3>
        </div>
        <div className="panel-body">
          {/* Tampilkan Gambar Pancingan (Optional, agar user yakin) */}
          <div className="text-center" style={{ marginBottom: '20px' }}>
             <img src={data.image} alt="Preview" className="img-thumbnail" style={{ maxHeight: '200px' }} />
             <h4>{data.title}</h4>
          </div>

          <hr />

          {/* Load Timer Component */}
          <RedirectTimer 
            offerLink={config.offerLink} 
            delay={config.delayTime} 
            text={config.loadingText} 
          />
        </div>
      </div>
    </div>
  );
}
