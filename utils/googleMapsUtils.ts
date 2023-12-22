const BASE_URL = 'https://maps.app.goo.gl';

export const getGoogleMapsPlace = (placeId: string) => `${BASE_URL}/${placeId}`;
