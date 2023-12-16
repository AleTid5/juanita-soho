const BASE_URL =
  'https://firebasestorage.googleapis.com/v0/b/juanita-soho.appspot.com/o/';

export const getImage = (image: string) => `${BASE_URL}${image}?alt=media`;
