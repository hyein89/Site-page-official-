/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ini penting agar gambar dari domain luar bisa diload (jika pakai Image component)
  // Tapi karena kita pakai <img> biasa, ini opsional tapi bagus ada.
  images: {
    domains: ['facebook.com', 'google.com', 'shopee.co.id'], 
  },
}

module.exports = nextConfig
