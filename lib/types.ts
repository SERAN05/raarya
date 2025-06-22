export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    coordinates: [number, number];
  };
  specs: {
    beds: number;
    baths: number;
    sqft: number;
    yearBuilt: number;
  };
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  listed: Date;
  status: 'For Sale' | 'For Rent' | 'Pending' | 'Sold';
  type: 'Residential' | 'Commercial' | 'Agricultural' | 'Industrial';
}

export interface NavigationItem {
  name: string;
  url: string;
  icon: any;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  minArea: number;
  maxArea: number;
  beds: number;
  baths: number;
}