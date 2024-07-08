 
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';

const PaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { car, days } = state || {};

  if (!car || !days) {
    // Jika tidak ada data, arahkan kembali ke halaman utama
    navigate('/');
    return null;
  }

  const paymentInfo = `Renting ${car.name} for ${days} days. Total: ${car.price * days}`;

  return (
    <div className="min-h-screen bg-background p-6 text-center">
      <h1 className="text-4xl font-bold text-text mb-6">Payment Information</h1>
      <p className="mb-4">{paymentInfo}</p>
      <QRCode value={paymentInfo} />
    </div>
  );
};

export default PaymentQR;
