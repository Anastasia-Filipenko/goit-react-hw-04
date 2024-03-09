import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
  client_id: 'a60JZthnI7xy5lBQPo0Lt7fo0ZVEqsaq4rg0OXZm2gU',
};
export const fetchImages = async (searchValue, page) => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        query: searchValue,
        page: page,
        per_page: 6,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
