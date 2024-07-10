import { useRef } from 'react';

const useQRCodeDownloadAndWhatsApp = (car, days) => {
  const qrRef = useRef(null);

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendToWhatsApp = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const waMessage = `Anda menyewa mobil ${car.name} untuk ${days} hari. Total: Rp ${(car.price * days).toLocaleString('id-ID')}. Scan QR code berikut untuk melanjutkan pembayaran: ${url}`;
    const waUrl = `https://wa.me/6283867691938?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
  };

  return { qrRef, handleDownload, handleSendToWhatsApp };
};

export default useQRCodeDownloadAndWhatsApp;
