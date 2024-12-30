// transformAnimalData.js
export const transformAnimalData = (data) => {
  return data.map(animal => ({
    id: animal.name.toLowerCase().replace(/\s+/g, '-'),
    name: animal.name,
    image: `https://source.unsplash.com/featured/?${encodeURIComponent(animal.name)}`,
    description: `${animal.characteristics?.behavior || ''} ${animal.characteristics?.habitat || ''}`.trim(),
    category: 'animals',
    attributes: {
      diet: animal.characteristics?.diet || 'Unknown',
      habitat: animal.characteristics?.habitat || 'Unknown',
      lifespan: animal.characteristics?.lifespan || 'Unknown',
      location: Array.isArray(animal.locations) ? animal.locations.join(', ') : 'Unknown'
    }
  }));
};

// transformPlantData.js
export const transformPlantData = (data) => {
  return data.data.map((plant) => ({
    id: plant.id.toString(),
    name: plant.common_name || plant.scientific_name,
    image: plant.default_image?.regular_url || `https://source.unsplash.com/featured/?${encodeURIComponent(plant.common_name || plant.scientific_name)}`,
    description: plant.description,
    category: 'plants',
    attributes: {
      scientific: plant.scientific_name,
      family: plant.family,
      origin: Array.isArray(plant.origin) ? plant.origin.join(', ') : 'Unknown',
      cycle: plant.cycle
    }
  }));
};

// transformBirdData.js
export const transformBirdData = (data) => {
  return data.map((bird) => ({
    id: bird.id,
    name: bird.name,
    imageUrl: bird.image, 
    description: bird.description, 
  }));
};
