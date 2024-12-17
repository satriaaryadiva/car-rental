const cars = [
  // Sedan
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'Sedan',
    price: 450000, // Converted from $30/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/toyotacorola.jpg',
    description: 'Sedan yang andal dan efisien, sempurna untuk perjalanan harian.',
  },
  {
    id: 2,
    name: 'Honda Civic',
    category: 'Sedan',
    price: 525000, // Converted from $35/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/civic.jpg',
    description: 'Mobil kompak yang menawarkan kinerja hebat dan efisiensi bahan bakar.',
  },
  {
    id: 9,
    name: 'Nissan Altima',
    category: 'Sedan',
    price: 675000, // Converted from $45/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/nissan-altima.jpg',
    description: 'Sedan ukuran menengah yang dikenal dengan kenyamanan berkendara dan interior luas.',
  },
  {
    id: 10,
    name: 'Hyundai Elantra',
    category: 'Sedan',
    price: 525000, // Converted from $35/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/hyundai-elantra.jpg',
    description: 'Sedan bergaya dengan teknologi canggih dan efisiensi bahan bakar yang baik.',
  },
  {
    id: 11,
    name: 'Kia Optima',
    category: 'Sedan',
    price: 570000, // Converted from $38/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/kiaOptima.jpg',
    description: 'Sedan yang menawarkan kenyamanan dan performa dengan harga terjangkau.',
  },
  {
    id: 12,
    name: 'Mazda 3',
    category: 'Sedan',
    price: 495000, // Converted from $33/day
    seats: 5,
    transmission: 'Manual',
    image: '/public/assets/mazda3.jpg',
    description: 'Sedan sporty dengan handling yang lincah dan desain yang menarik.',
  },

  // Sports
  {
    id: 3,
    name: 'Ford Mustang',
    category: 'Sports',
    price: 900000, // Converted from $60/day
    seats: 4,
    transmission: 'Manual',
    image: '/public/assets/ford-mustang.jpg',
    description: 'Mobil otot klasik Amerika dengan performa yang kuat.',
  },
  {
    id: 4,
    name: 'Chevrolet Camaro',
    category: 'Sports',
    price: 825000, // Converted from $55/day
    seats: 4,
    transmission: 'Automatic',
    image: '/public/assets/camaro.jpg',
    description: 'Mobil sport dengan desain ramping dan mesin bertenaga.',
  },
  {
    id: 21,
    name: 'Porsche 911',
    category: 'Sports',
    price: 3000000, // Converted from $200/day
    seats: 2,
    transmission: 'Manual',
    image: '/public/assets/porsche-911-carrera_100787037_h-289059408.jpg',
    description: 'Mobil sport ikonik dengan performa tinggi dan desain yang elegan.',
  },
  {
    id: 22,
    name: 'Lamborghini Huracan',
    category: 'Sports',
    price: 5250000, // Converted from $350/day
    seats: 2,
    transmission: 'Automatic',
    image: '/public/assets/huracan.jpg',
    description: 'Mobil super dengan performa luar biasa dan desain yang mencolok.',
  },

  // Luxury
  {
    id: 5,
    name: 'BMW 3 Series',
    category: 'Luxury',
    price: 1050000, // Converted from $70/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/New-BMW-3-Series-3759226992.jpg',
    description: 'Sedan mewah yang menawarkan kombinasi performa, kenyamanan, dan teknologi.',
  },
  {
    id: 6,
    name: 'Mercedes-Benz C-Class',
    category: 'Luxury',
    price: 1125000, // Converted from $75/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/mercedes  benc c class.jpg',
    description: 'Sedan mewah dengan desain elegan dan fitur-fitur canggih.',
  },
  {
    id: 7,
    name: 'Audi A4',
    category: 'Luxury',
    price: 975000, // Converted from $65/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/audi a4.jpg',
    description: 'Sedan mewah dengan performa tinggi dan teknologi mutakhir.',
  },
  {
    id: 23,
    name: 'Lexus LS',
    category: 'Luxury',
    price: 1500000, // Converted from $100/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/lexus ls.jpg',
    description: 'Sedan mewah dengan fitur premium dan kenyamanan yang tak tertandingi.',
  },

  // SUV
  {
    id: 13,
    name: 'Jeep Wrangler',
    category: 'SUV',
    price: 750000, // Converted from $50/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/jeep wrangler.jpg',
    description: 'SUV tangguh yang cocok untuk petualangan off-road.',
  },
  {
    id: 16,
    name: 'Chevrolet Tahoe',
    category: 'SUV',
    price: 975000, // Converted from $65/day
    seats: 7,
    transmission: 'Automatic',
    image: '/public/assets/2018-chevrolet-tahoe-custom-midnight-edition-0-1455616348.jpg',
    description: 'SUV besar yang menawarkan kenyamanan dan ruang yang luas.',
  },
  {
    id: 19,
    name: 'Honda CR-V',
    category: 'SUV',
    price: 825000, // Converted from $55/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/crv.jpg',
    description: 'SUV kompak dengan ruang yang luas dan efisiensi bahan bakar yang baik.',
  },
  {
    id: 20,
    name: 'Subaru Outback',
    category: 'SUV',
    price: 900000, // Converted from $60/day
    seats: 5,
    transmission: 'Automatic',
    image: '/public/assets/subaru.jpg',
    description: 'SUV yang andal dengan kemampuan all-wheel drive untuk segala medan.',
  },
  {
    id: 30,
    name: 'Toyota Highlander',
    category: 'SUV',
    price: 1050000, // Converted from $70/day
    seats: 7,
    transmission: 'Automatic',
    image: '/public/assets/toyota higlander.jpg',
    description: 'SUV keluarga dengan ruang yang luas dan fitur-fitur canggih.',
  },
];

export default cars;
