export const getPostsData = async ({ start = 0, limit = 10, callback }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts?_start=${start}&_limit=${limit}&`,
    );

    const result = await response.json();
    return result;
  } catch (err) {
    console.trace(err);
    return [];
  }
};
export default getPostsData;
