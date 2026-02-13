// app/not-found.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Simulasi import jika pakai npm, tapi kita pakai CDN di layout

export default function NotFound() {
  return (
    <div className="container" style={{ marginTop: '100px', textAlign: 'center' }}>
      <div className="jumbotron">
        <h1 className="text-danger">404</h1>
        <p className="lead">Halaman yang Anda cari tidak ditemukan.</p>
        <p>Silakan periksa kembali URL Anda.</p>
        <a href="/" className="btn btn-primary btn-lg">Kembali ke Beranda</a>
      </div>
    </div>
  );
}
