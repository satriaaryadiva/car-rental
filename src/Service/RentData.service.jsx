const cars = [
  // Sedan
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'Sedan',
    price: 450000, // Converted from $30/day
    seats: 5,
    transmission: 'Automatic',
    image: '/src/assets/toyotacorola.jpg',
    description: 'Sedan yang andal dan efisien, sempurna untuk perjalanan harian.',
  },
  {
    id: 2,
    name: 'Honda Civic',
    category: 'Sedan',
    price: 525000, // Converted from $35/day
    seats: 5,
    transmission: 'Automatic',
    image: '/src/assets/civic.jpg',
    description: 'Mobil kompak yang menawarkan kinerja hebat dan efisiensi bahan bakar.',
  },
  {
    id: 9,
    name: 'Nissan Altima',
    category: 'Sedan',
    price: 675000, // Converted from $45/day
    seats: 5,
    transmission: 'Automatic',
    image: '/src/assets/nissan-altima.jpg',
    description: 'Sedan ukuran menengah yang dikenal dengan kenyamanan berkendara dan interior luas.',
  },
  {
    id: 10,
    name: 'Hyundai Elantra',
    category: 'Sedan',
    price: 525000, // Converted from $35/day
    seats: 5,
    transmission: 'Automatic',
    image: '/src/assets/hyundai-elantra.jpg',
    description: 'Sedan bergaya dengan teknologi canggih dan efisiensi bahan bakar yang baik.',
  },
  {
    id: 11,
    name: 'Kia Optima',
    category: 'Sedan',
    price: 570000, // Converted from $38/day
    seats: 5,
    transmission: 'Automatic',
    image: '/src/assets/kiaOptima.jpg',
    description: 'Sedan yang menawarkan kenyamanan dan performa dengan harga terjangkau.',
  },
  {
    id: 12,
    name: 'Mazda 3',
    category: 'Sedan',
    price: 495000, // Converted from $33/day
    seats: 5,
    transmission: 'Manual',
    image: '/src/assets/mazda3.jpg',
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
    image: '/src/assets/ford-mustang.jpg',
    description: 'Mobil otot klasik Amerika dengan performa yang kuat.',
  },
  {
    id: 4,
    name: 'Chevrolet Camaro',
    category: 'Sports',
    price: 825000, // Converted from $55/day
    seats: 4,
    transmission: 'Automatic',
    image: '/src/assets/camaro.jpg',
    description: 'Mobil sport dengan desain ramping dan mesin bertenaga.',
  },
  {
    id: 21,
    name: 'Porsche 911',
    category: 'Sports',
    price: 3000000, // Converted from $200/day
    seats: 2,
    transmission: 'Manual',
    image: 'https://files.porsche.com/filestore/image/multimedia/none/modelseries-911-carrera-intro-image/normal/01a08e09-e407-11eb-80c1-005056bbdc38;sS;twebp/porsche-normal.webp',
    description: 'Mobil sport ikonik dengan performa tinggi dan desain yang elegan.',
  },
  {
    id: 22,
    name: 'Lamborghini Huracan',
    category: 'Sports',
    price: 5250000, // Converted from $350/day
    seats: 2,
    transmission: 'Automatic',
    image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/share%20img/Huracan-Model%20Page%20Header.jpg',
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
    image: 'https://www.bmwusa.com/content/dam/bmw/marketUSA/bmwusa/3-series-sedan/2023/3-series-sedan.png',
    description: 'Sedan mewah yang menawarkan kombinasi performa, kenyamanan, dan teknologi.',
  },
  {
    id: 6,
    name: 'Mercedes-Benz C-Class',
    category: 'Luxury',
    price: 1125000, // Converted from $75/day
    seats: 5,
    transmission: 'Automatic',
    image: 'https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/c/sedan/all-vehicles/2022-C-SEDAN-AVP-DR.png',
    description: 'Sedan mewah dengan desain elegan dan fitur-fitur canggih.',
  },
  {
    id: 7,
    name: 'Audi A4',
    category: 'Luxury',
    price: 975000, // Converted from $65/day
    seats: 5,
    transmission: 'Automatic',
    image: 'https://www.audiusa.com/content/dam/nemo/us/models/a4/a4my2021/1920x1080_A4_MY2021.jpg',
    description: 'Sedan mewah dengan performa tinggi dan teknologi mutakhir.',
  },
  {
    id: 23,
    name: 'Lexus LS',
    category: 'Luxury',
    price: 1500000, // Converted from $100/day
    seats: 5,
    transmission: 'Automatic',
    image: 'https://www.lexus.com/cm-img/lexus-one/vehicles/2023/ls/2023-lexus-ls-gallery-exterior-003.jpg',
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
    image: 'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2022/wrangler/vlp/2022-jeep-wrangler-vlp-exterior-hero-01.jpg',
    description: 'SUV tangguh yang cocok untuk petualangan off-road.',
  },
  {
    id: 16,
    name: 'Chevrolet Tahoe',
    category: 'SUV',
    price: 975000, // Converted from $65/day
    seats: 7,
    transmission: 'Automatic',
    image: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2021/suvs/tahoe/mov/01-images/2021-tahoe-masthead-01.jpg',
    description: 'SUV besar yang menawarkan kenyamanan dan ruang yang luas.',
  },
  {
    id: 19,
    name: 'Honda CR-V',
    category: 'SUV',
    price: 825000, // Converted from $55/day
    seats: 5,
    transmission: 'Automatic',
    image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2023/CR-V/01-vehicle-gallery/MY23-CR-V-VLP-Hero-1440x768.jpg',
    description: 'SUV kompak dengan ruang yang luas dan efisiensi bahan bakar yang baik.',
  },
  {
    id: 20,
    name: 'Subaru Outback',
    category: 'SUV',
    price: 900000, // Converted from $60/day
    seats: 5,
    transmission: 'Automatic',
    image: 'https://www.subaru.com/content/dam/subaru/vehicles/outback/2022/gallery/2022_Outback_gallery_01.jpg',
    description: 'SUV yang andal dengan kemampuan all-wheel drive untuk segala medan.',
  },
  {
    id: 30,
    name: 'Toyota Highlander',
    category: 'SUV',
    price: 1050000, // Converted from $70/day
    seats: 7,
    transmission: 'Automatic',
    image: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2022/highlander/1J9.png',
    description: 'SUV keluarga dengan ruang yang luas dan fitur-fitur canggih.',
  },
];

export default cars;
