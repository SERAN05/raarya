import { Property } from './types';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Residential Plot in Prime Location',
    price: 5500000,
    location: {
      address: '123 Luxury Avenue',
      city: 'Mumbai',
      state: 'Maharashtra',
      zip: '400001',
      coordinates: [19.0760, 72.8777]
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 2500,
      yearBuilt: 2020
    },
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Premium residential plot in the heart of the city with excellent connectivity.',
    features: ['Prime Location', 'Ready to Build', 'Clear Title', 'Gated Community'],
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya@raarya.com',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-01-15'),
    status: 'For Sale',
    type: 'Residential'
  },
  {
    id: '2',
    title: 'Premium Agricultural Land for Organic Farming',
    price: 2800000,
    location: {
      address: 'Green Valley Farm',
      city: 'Pune',
      state: 'Maharashtra',
      zip: '411001',
      coordinates: [18.5204, 73.8567]
    },
    specs: {
      beds: 0,
      baths: 0,
      sqft: 50000,
      yearBuilt: 2018
    },
    images: [
      'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Fertile agricultural land perfect for organic farming with water source.',
    features: ['Water Source', 'Fertile Soil', 'Road Access', 'Organic Certified'],
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43211',
      email: 'rajesh@raarya.com',
      photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-01-20'),
    status: 'For Sale',
    type: 'Agricultural'
  },
  {
    id: '3',
    title: 'Commercial Space in IT Hub',
    price: 12000000,
    location: {
      address: 'Tech Park Plaza',
      city: 'Bangalore',
      state: 'Karnataka',
      zip: '560001',
      coordinates: [12.9716, 77.5946]
    },
    specs: {
      beds: 0,
      baths: 4,
      sqft: 5000,
      yearBuilt: 2021
    },
    images: [
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Modern commercial space in prime IT hub with state-of-the-art facilities.',
    features: ['IT Hub Location', 'Modern Infrastructure', 'Parking Space', '24/7 Security'],
    agent: {
      name: 'Anita Desai',
      phone: '+91 98765 43212',
      email: 'anita@raarya.com',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-02-01'),
    status: 'For Sale',
    type: 'Commercial'
  },
  {
    id: '4',
    title: 'Industrial Plot for Manufacturing',
    price: 8500000,
    location: {
      address: 'Industrial Estate',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zip: '600001',
      coordinates: [13.0827, 80.2707]
    },
    specs: {
      beds: 0,
      baths: 2,
      sqft: 15000,
      yearBuilt: 2019
    },
    images: [
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Strategic industrial plot with excellent connectivity for manufacturing setup.',
    features: ['Industrial Zone', 'Power Connection', 'Transport Access', 'Approved Layout'],
    agent: {
      name: 'Suresh Reddy',
      phone: '+91 98765 43213',
      email: 'suresh@raarya.com',
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-02-05'),
    status: 'For Sale',
    type: 'Industrial'
  },
  {
    id: '5',
    title: 'Spacious Villa for Immediate Sale',
    price: 15000000,
    location: {
      address: 'Villa Gardens',
      city: 'Goa',
      state: 'Goa',
      zip: '403001',
      coordinates: [15.2993, 74.1240]
    },
    specs: {
      beds: 5,
      baths: 4,
      sqft: 4000,
      yearBuilt: 2022
    },
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Luxurious villa with sea view and modern amenities in prime location.',
    features: ['Sea View', 'Swimming Pool', 'Garden', 'Modern Kitchen'],
    agent: {
      name: 'Maria Fernandes',
      phone: '+91 98765 43214',
      email: 'maria@raarya.com',
      photo: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-02-10'),
    status: 'For Sale',
    type: 'Residential'
  },
  {
    id: '6',
    title: 'Modern Apartment for Rent',
    price: 45000,
    location: {
      address: 'City Center',
      city: 'Delhi',
      state: 'Delhi',
      zip: '110001',
      coordinates: [28.7041, 77.1025]
    },
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1800,
      yearBuilt: 2020
    },
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Contemporary apartment in city center with all modern amenities.',
    features: ['City Center', 'Furnished', 'Gym Access', 'Parking'],
    agent: {
      name: 'Rahul Gupta',
      phone: '+91 98765 43215',
      email: 'rahul@raarya.com',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-02-15'),
    status: 'For Rent',
    type: 'Residential'
  },
  {
    id: '7',
    title: 'Investment Plot Near Airport',
    price: 3200000,
    location: {
      address: 'Airport Road',
      city: 'Hyderabad',
      state: 'Telangana',
      zip: '500001',
      coordinates: [17.3850, 78.4867]
    },
    specs: {
      beds: 0,
      baths: 0,
      sqft: 1200,
      yearBuilt: 2023
    },
    images: [
      'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Strategic investment opportunity near major airport with high growth potential.',
    features: ['Airport Proximity', 'Investment Potential', 'Development Area', 'Good ROI'],
    agent: {
      name: 'Lakshmi Devi',
      phone: '+91 98765 43216',
      email: 'lakshmi@raarya.com',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-02-20'),
    status: 'For Sale',
    type: 'Residential'
  },
  {
    id: '8',
    title: 'Farmhouse with Modern Amenities',
    price: 7800000,
    location: {
      address: 'Green Hills',
      city: 'Nashik',
      state: 'Maharashtra',
      zip: '422001',
      coordinates: [19.9975, 73.7898]
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 3500,
      yearBuilt: 2021
    },
    images: [
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Beautiful farmhouse with vineyard view and modern amenities.',
    features: ['Vineyard View', 'Open Spaces', 'Modern Amenities', 'Peaceful Location'],
    agent: {
      name: 'Vikram Singh',
      phone: '+91 98765 43217',
      email: 'vikram@raarya.com',
      photo: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-02-25'),
    status: 'For Sale',
    type: 'Agricultural'
  },
  {
    id: '9',
    title: 'Office Space in Business District',
    price: 25000,
    location: {
      address: 'Business Bay',
      city: 'Mumbai',
      state: 'Maharashtra',
      zip: '400051',
      coordinates: [19.0176, 72.8562]
    },
    specs: {
      beds: 0,
      baths: 2,
      sqft: 1500,
      yearBuilt: 2022
    },
    images: [
      'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: 'Premium office space in prime business district with excellent facilities.',
    features: ['Business District', 'Modern Facilities', 'Conference Rooms', 'High-speed Internet'],
    agent: {
      name: 'Neha Patel',
      phone: '+91 98765 43218',
      email: 'neha@raarya.com',
      photo: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    listed: new Date('2024-03-01'),
    status: 'For Rent',
    type: 'Commercial'
  }
];