 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { selectRentalDetails } from '../../redux/slicer/RentalSlicer';
import useQRCodeDownloadAndWhatsApp from '../Hooks/useQRCodeDownloadAndWhatsApp'; // Ganti ' Sesuaikan path ini dengan struktur direktori Anda

const PaymentQR = () => {
  const { car, days } = useSelector(selectRentalDetails);
  const navigate = useNavigate();

  const { qrRef, handleDownload, handleSendToWhatsApp } = useQRCodeDownloadAndWhatsApp(car, days);

  if (!car || !days) {
    navigate('/');
    return null;
  }

  const paymentInfo = `Anda menyewa mobil ${car.name} untuk ${days} hari, Totalnya adalah: Rp ${car.price * days}`;

  return (
    <div className="min-h-screen bg-gray-900 justify-center flex p-4 md:p-6">
      <div className="min-h-screen max-w-fit rounded bg-green-700 p-4 md:py-6 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Informasi Pembayaran</h1>
        <p className="mb-4 text-base md:text-lg">{`Anda menyewa mobil ${car.name} untuk ${days} hari`}</p>
        <p className="mb-4 text-lg md:text-xl font-semibold">{`Total: Rp ${(car.price * days).toLocaleString('id-ID')}`}</p>
        <div ref={qrRef} className="bg-white p-4 rounded-lg shadow-md max-w-xs md:max-w-sm w-full flex justify-center">
          <QRCode value={paymentInfo} size={256} className="w-full" />
        </div>
        <button
          onClick={handleDownload}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Download QR Code
        </button>
        <button
          onClick={handleSendToWhatsApp}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Kirim QR Code via WhatsApp
        </button>
        <p className="mt-4 text-sm md:text-base text-white-600">Klik tombol Download QR Code untuk mengunduh QR Code atau Kirim QR Code via WhatsApp untuk mengirimkannya langsung ke WhatsApp</p>
      </div>
    </div>
  );
};

export default PaymentQR;
