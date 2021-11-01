import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const myApiKey = '6aca5fd1f6430f3a2dc19eecc3571e5f';
export const fetchTrend = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${myApiKey}`);
    const results = data.results;
    return results;
  } catch (error) {
    console.log('Error', error);
  }
};
export const fetchDetailsPage = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${myApiKey}&language=en-US`,
    );
    return data;
  } catch (error) {
    console.log('Error', error);
  }
};

export const findMovies = async searchQuery => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${myApiKey}&query=${searchQuery}&language=en-US`,
    );

    const results = data.results;

    return results;
  } catch (error) {
    console.log('Error', error);
  }
};
export const fetchCast = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=90c365fd33e40d9888dd0e4d3c3072e6`,
    );

    return data;
  } catch (error) {
    console.log('error', error);
  }
};
export const fetchReviews = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=90c365fd33e40d9888dd0e4d3c3072e6&language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.log('error', error);
  }
};
