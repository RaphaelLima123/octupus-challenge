const urlBase = 'https://octupus-challenge.vercel.app/api/options?';

export const getOctupusPlnas = async (lat, lon) => {
  const data = await fetch(`${urlBase}lat=${lat}&lon=${lon}`);
  const json = data.json();
  return json;
};
