const urlBase = 'https://octupus-challenge.vercel.app/api/options?';

export const getOctupusPlnas = async (location) => {
  const lat = location.latitude;
  const lon = location.longitude;
  const data = await fetch(`${urlBase}lat=${lat}&lon=${lon}`);
  const json = data.json();
  return json;
};
