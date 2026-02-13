// lib/crypto.js

// Mengubah string menjadi Hex (terlihat seperti kode acak)
export function encodeData(data) {
  try {
    const jsonString = JSON.stringify(data);
    let hex = '';
    for (let i = 0; i < jsonString.length; i++) {
      hex += '' + jsonString.charCodeAt(i).toString(16);
    }
    return hex;
  } catch (e) {
    return null;
  }
}

// Mengembalikan Hex menjadi JSON object
export function decodeData(hexString) {
  try {
    let str = '';
    for (let i = 0; i < hexString.length; i += 2) {
      str += String.fromCharCode(parseInt(hexString.substr(i, 2), 16));
    }
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}
