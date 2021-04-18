import getDistance from 'geolib/es/getDistance';
import convertDistance from 'geolib/es/convertDistance';

export const getPackages = (plans) => {
  const searchTv = 'TV';
  const tvCondition = new RegExp(searchTv);

  const tvResult = plans.filter((plan) => tvCondition.test(plan.type));

  const searchBroadband = 'BROADBAND';
  const broadbandCondition = new RegExp(searchBroadband);

  const broadbandResult = plans.filter((plan) =>
    broadbandCondition.test(plan.type),
  );

  // const searchLandline = 'LANDLINE';
  // const landlineCondition = new RegExp(searchLandline);

  // const landlineResult = plans.filter((plan) =>
  //   landlineCondition.test(plan.type),
  // );

  // const searchAddon = 'ADDON';
  // const addonCondition = new RegExp(searchAddon);

  // const addonResult = plans.filter((plan) => addonCondition.test(plan.type));

  const packages = [];

  tvResult.map((plan, n) => {
    const { price } = plan;
    const { distance } = plan;
    const total = price + distance;

    const totalValue = parseFloat(total).toFixed(2);
    const totalDistance = parseFloat(distance).toFixed(3);

    const obj = {
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
    };

    packages.push(obj);

    packages.sort((a, b) => a.distance - b.distance);
  });

  const tvBroad = [];
  packages.forEach((tvPlan) =>
    broadbandResult.forEach((broad) => {
      const object = { broadCamp: broad };
      const name = { name: `${tvPlan.items} e ${broad.name}` };

      const distance = convertDistance(
        getDistance(
          { latitude: tvPlan.coords.lat, longitude: tvPlan.coords.lon },
          { latitude: broad.coords.lat, longitude: broad.coords.lon },
        ),
        'km',
      );

      const totalDistance = parseFloat(distance + tvPlan.distance).toFixed(3);
      const priceDistance = parseFloat(
        tvPlan.price + broad.price + totalDistance,
      ).toFixed(2);

      const totalPrice = { price: priceDistance };
      const distancePoints = { distance: totalDistance };

      Object.assign(tvPlan, name);
      Object.assign(tvPlan, distancePoints);
      Object.assign(tvPlan, object);
      Object.assign(tvPlan, totalPrice);
      tvBroad.push(tvPlan);
    }),
  );

  // const tvAddon = [];
  // packages.forEach((tvPlan) =>
  //   addonResult.forEach((addon) => {
  //     const objectTest = { addonCamp: addon };
  //     Object.assign(tvPlan, objectTest);
  //     tvAddon.push(tvPlan);
  //   }),
  // );

  // const tvLandline = [];
  // packages.forEach((tvPlan) =>
  //   landlineResult.forEach((landLine) => {
  //     const objectTest = { landLineCamp: landLine };
  //     Object.assign(tvPlan, objectTest);
  //     tvLandline.push(tvPlan);
  //   }),
  // );

  // const newArray = [packages, tvLandline, tvBroad, tvAddon];

  return packages;
};
