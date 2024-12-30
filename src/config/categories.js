import { Bird, Leaf, Apple, Carrot, Dog, ShoppingBag, PartyPopper, CircleDot, Shirt } from 'lucide-react';

export const categories = [
  {
    id: 'animals',
    name: 'Animals',
    icon: Dog,
    endpoint: 'https://api.api-ninjas.com/v1/animals'
  },
  {
    id: 'fruits',
    name: 'Fruits',
    icon: Apple,
    endpoint: 'https://perenual.com/api/species-list'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: Carrot,
    endpoint: 'https://perenual.com/api/species-list'
  },
  {
    id: 'plants',
    name: 'Plants',
    icon: Leaf,
    endpoint: 'https://perenual.com/api/species-list'
  },
  {
    id: 'birds',
    name: 'Birds',
    icon: Bird,
    endpoint: 'https://api.ebird.org/v2/data/obs/recent'
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: ShoppingBag,
    endpoint: '/api/groceries' // Mock endpoint for now
  },
  {
    id: 'parties',
    name: 'Parties',
    icon: PartyPopper,
    endpoint: '/api/parties' // Mock endpoint for now
  },
  {
    id: 'things',
    name: 'Things',
    icon: CircleDot,
    endpoint: '/api/things' // Mock endpoint for now
  },
  {
    id: 'clothes',
    name: 'Clothes',
    icon: Shirt,
    endpoint: '/api/clothes' // Mock endpoint for now
  }
];
