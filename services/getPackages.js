import getDistance from 'geolib/es/getDistance';
import convertDistance from 'geolib/es/convertDistance';

// FUNÇÕES PARA PEGAR A DISTANCIA E PREÇO REAL
const getSum = (previus, current) => {
  const newDistance = parseFloat(
    convertDistance(
      getDistance(
        {
          latitude: previus.coords.lat,
          longitude: previus.coords.lon,
        },
        { latitude: current.coords.lat, longitude: current.coords.lon },
      ),
      'km',
    ),
  ).toFixed();
  return newDistance;
};

const getTotalPrice = (previus, current, newDistance) => {
  const newPrice = parseFloat(
    previus.price + current.price + newDistance,
  ).toFixed(2);
  return newPrice;
};

export const getPackages = (plans) => {
  // PLANOS DE TV
  const searchTv = 'TV';
  const tvCondition = new RegExp(searchTv);

  const tvResult = plans.filter((plan) => tvCondition.test(plan.type));

  const packages = [];

  tvResult.forEach((plan, n) => {
    const { price } = plan;
    const { distance } = plan;
    const total = price + distance;

    const totalValue = parseFloat(total).toFixed(2);
    const totalDistance = parseFloat(distance).toFixed();

    const tvsObj = {
      name: `Pacote ${n + 1}`,
      items: plan.name,
      coords: {
        lat: plan.coords.lat,
        lon: plan.coords.lon,
      },
      price: totalValue,
      type: plan.type,
      color: plan.color,
      distance: totalDistance,
      broadField: plan,
    };

    packages.push(tvsObj);

    packages.sort((a, b) => a.distance - b.distance);
  });
  return packages;
};
