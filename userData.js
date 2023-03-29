import axios from 'axios';

export default async function getData(userId) {
  try {
    const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return {
      user: userData.data,
      posts: userPosts.data,
    };
  } catch (error) {
    console.error(error);
  }
}
