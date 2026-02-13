// app/components/RedirectTimer.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectTimer({ offerLink, delay, text }) {
  const router = useRouter();
  const [count, setCount] = useState(delay / 1000);

  useEffect(() => {
    // Timer mundur visual
    const timer = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Logic Redirect
    const redirectTimeout = setTimeout(() => {
      window.location.replace(offerLink); // Menggunakan replace agar tidak bisa di-back
    }, delay);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [offerLink, delay, router]);

  return (
    <div className="text-center">
      <div className="progress">
        <div 
          className="progress-bar progress-bar-striped active" 
          role="progressbar" 
          style={{ width: '100%' }}
        >
          Loading...
        </div>
      </div>
      <h3>{text}</h3>
      <p>Anda akan dialihkan dalam <strong>{count}</strong> detik.</p>
      <br/>
      <button className="btn btn-success" onClick={() => window.location.replace(offerLink)}>
        Buka Sekarang <i className="glyphicon glyphicon-share-alt"></i>
      </button>
    </div>
  );
}
