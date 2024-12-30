import { getApiConfig } from './endpoints';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map(); // No need for type annotation in JSX

export const fetchCategoryData = async (categoryId) => {
  const cacheKey = categoryId;
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const config = getApiConfig(categoryId);
  if (!config) {
    throw new Error('Category not supported');
  }

  try {
    const url = new URL(config.url);
    if (config.options?.params) {
      url.search = config.options.params;
    }

    const response = await fetch(url.toString(), {
      method: config.options?.method || 'GET',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    const transformedData = config.transform(data);
    const items = Array.isArray(transformedData) ? transformedData : [transformedData];

    cache.set(cacheKey, { data: items, timestamp: Date.now() });
    return items;
  } catch (error) {
    console.error(`Error fetching ${categoryId} data:`, error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch data');
  }
};
