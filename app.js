import getData from './userData.js';

const userId = 1;

getData(userId).then(data => {
  console.log(data);
});
