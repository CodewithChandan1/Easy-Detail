import { transformAnimalData, transformPlantData, transformBirdData } from './transformers';

export const getApiConfig = (categoryId) => {
  switch (categoryId) {
    case "animals":
      return {
        url: "https://api.api-ninjas.com/v1/animals?name=dog", // Added a default search to get some results
        headers: {
          "X-Api-Key": import.meta.env.VITE_NINJA_API_KEY,
        },
        transform: transformAnimalData,
      };
    case "fruits":
    case "vegetables":
    case "plants":
      return {
        url: "https://perenual.com/api/species-list",
        headers: {},
        options: {
          method: "GET",
          params: new URLSearchParams({
            key: import.meta.env.VITE_PERENUAL_API_KEY,
            type: categoryId,
          }).toString(),
        },
        transform: transformPlantData,
      };
    case "birds":
      return {
        url: "https://www.freetestapi.com/api/v1/birds",
        headers: {},
        transform: transformBirdData,
      };
    case "groceries":
      return {
        url: "https://grocery-api2.p.rapidapi.com/amazon?query=vegetable", // Replace with dynamic search query if needed
        headers: {
          "x-rapidapi-host": "grocery-api2.p.rapidapi.com",
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY, // Store your RapidAPI key securely
        },
        transform: (data) => {
          // Transform the grocery data as needed
          return data.results.map((item) => ({
            id: item.id.toString(),
            name: item.title,
            image: item.image_url,
            description: item.title, // Use a more meaningful description if needed
            category: "groceries",
            attributes: {
              price: item.price,
              url: item.url,
            },
          }));
        },
      };
    case "things":
      return {
        url: "/api/things", // Mock endpoint for things
        headers: {},
        transform: (data) => {
          return data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image_url,
            description: item.description || "No description available",
            category: "things",
            attributes: {
              price: item.price,
              details: item.details || "No additional details",
            },
          }));
        },
      };
    case "clothes":
      return {
        url: "/api/clothes", // Mock endpoint for clothes
        headers: {},
        transform: (data) => {
          return data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image_url,
            description: item.description || "No description available",
            category: "clothes",
            attributes: {
              price: item.price,
              size: item.size || "Unknown size",
            },
          }));
        },
      };
    case "parties":
      return {
        url: "/api/parties", // Mock endpoint for parties, replace with real API if available
        headers: {},
        transform: (data) => {
          return data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image_url,
            description: item.description || "No description available",
            category: "parties",
            attributes: {
              eventDate: item.event_date || "Unknown date",
              location: item.location || "Unknown location",
              price: item.price || "Unknown price",
            },
          }));
        },
      };
    default:
      return null;
  }
};
