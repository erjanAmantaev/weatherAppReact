const API_KEY = '966351a78e8a493b867133659261402';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const weatherApi = {
  // Search for cities
  searchCities: async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
      );
      if (!response.ok) throw new Error('Failed to search cities');
      return await response.json();
    } catch (error) {
      console.error('Error searching cities:', error);
      throw error;
    }
  },

  // Get current weather
  getCurrentWeather: async (location) => {
    try {
      const response = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=yes`
      );
      if (!response.ok) throw new Error('Failed to fetch current weather');
      return await response.json();
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  },

  // Get forecast
  getForecast: async (location, days = 7) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=yes&alerts=yes`
      );
      if (!response.ok) throw new Error('Failed to fetch forecast');
      return await response.json();
    } catch (error) {
      console.error('Error fetching forecast:', error);
      throw error;
    }
  }
};
