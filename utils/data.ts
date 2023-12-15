export const getSearch = async () => {
  const searchResponse = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/airbnb-web-clone%2Fsearch.json?alt=media'
  );
  return searchResponse.json();
};
