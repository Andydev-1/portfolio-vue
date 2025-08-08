export const cars = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    price: 89990,
    originalPrice: 94990,
    mileage: 2500,
    fuelType: "Electric",
    transmission: "Automatic",
    color: "Pearl White",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&crop=entropy&auto=format",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop&crop=entropy&auto=format"
    ],
    features: ["Autopilot", "Premium Audio", "Glass Roof", "Heated Seats"],
    description: "Experience the future of driving with this pristine Tesla Model S. Featuring cutting-edge technology and unmatched performance.",
    location: "Los Angeles, CA",
    condition: "Excellent",
    mpg: "110 MPGe",
    engine: "Dual Motor",
    isElectric: true,
    isFeatured: true
  },
  {
    id: 2,
    brand: "BMW",
    model: "M3 Competition",
    year: 2022,
    price: 75500,
    originalPrice: 82000,
    mileage: 12000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Alpine White",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=entropy&auto=format",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=entropy&auto=format"
    ],
    features: ["M Performance", "Carbon Fiber Trim", "Harman Kardon Audio", "Sport Seats"],
    description: "Pure driving excitement in this BMW M3 Competition. Track-bred performance meets luxury comfort.",
    location: "New York, NY",
    condition: "Excellent",
    mpg: "18/25",
    engine: "3.0L Twin-Turbo I6",
    isElectric: false,
    isFeatured: true
  },
  {
    id: 3,
    brand: "Audi",
    model: "RS6 Avant",
    year: 2023,
    price: 115000,
    originalPrice: 120000,
    mileage: 5000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Nardo Gray",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=entropy&auto=format",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=600&fit=crop&crop=entropy&auto=format"
    ],
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio", "Sport Differential"],
    description: "The perfect blend of wagon practicality and supercar performance. This RS6 Avant delivers on all fronts.",
    location: "Miami, FL",
    condition: "Like New",
    mpg: "17/24",
    engine: "4.0L Twin-Turbo V8",
    isElectric: false,
    isFeatured: false
  },
  {
    id: 4,
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2022,
    price: 185000,
    originalPrice: 195000,
    mileage: 8000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Guards Red",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&crop=entropy&auto=format",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&crop=entropy&auto=format"
    ],
    features: ["Sport Chrono", "PASM", "Porsche Communication Management", "Sport Exhaust"],
    description: "The ultimate 911 experience. This Turbo S delivers breathtaking performance with everyday usability.",
    location: "San Francisco, CA",
    condition: "Excellent",
    mpg: "15/20",
    engine: "3.8L Twin-Turbo H6",
    isElectric: false,
    isFeatured: true
  },
  {
    id: 5,
    brand: "Mercedes",
    model: "AMG GT 63 S",
    year: 2023,
    price: 155000,
    originalPrice: 165000,
    mileage: 3000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Obsidian Black",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&crop=entropy&auto=format",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop&crop=entropy&auto=format"
    ],
    features: ["AMG Performance", "Burmester Audio", "Panoramic Roof", "AMG Ride Control"],
    description: "Pure AMG performance in this stunning GT 63 S. Four doors of unbridled luxury and power.",
    location: "Chicago, IL",
    condition: "Like New",
    mpg: "16/22",
    engine: "4.0L Twin-Turbo V8",
    isElectric: false,
    isFeatured: false
  },
  {
    id: 6,
    brand: "McLaren",
    model: "720S",
    year: 2021,
    price: 275000,
    originalPrice: 300000,
    mileage: 6500,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Papaya Orange",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&crop=entropy&auto=format",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&crop=entropy&auto=format"
    ],
    features: ["Carbon Fiber Body", "Active Aerodynamics", "Pirelli P Zero Tires", "Track Telemetry"],
    description: "Experience McLaren's engineering excellence in this 720S. Supercar performance meets stunning design.",
    location: "Las Vegas, NV",
    condition: "Excellent",
    mpg: "15/22",
    engine: "4.0L Twin-Turbo V8",
    isElectric: false,
    isFeatured: true
  }
];

export const brands = ["Tesla", "BMW", "Audi", "Porsche", "Mercedes", "McLaren", "Ferrari", "Lamborghini", "Aston Martin"];

export const priceRanges = [
  { label: "Under $50k", min: 0, max: 50000 },
  { label: "$50k - $100k", min: 50000, max: 100000 },
  { label: "$100k - $200k", min: 100000, max: 200000 },
  { label: "$200k+", min: 200000, max: Infinity }
];

export const yearRanges = [
  { label: "2023-2024", min: 2023, max: 2024 },
  { label: "2021-2022", min: 2021, max: 2022 },
  { label: "2019-2020", min: 2019, max: 2020 },
  { label: "2017-2018", min: 2017, max: 2018 }
];