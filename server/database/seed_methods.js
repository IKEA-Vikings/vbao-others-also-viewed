const generateSeedData = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let data = [];

  for (let id = 1; id <= 100; id++) {
    let itemsAlsoViewed = [];
    const numItemsAlsoViewed = random(1, 20);
    for (let i = 0; i < numItemsAlsoViewed; i++) {
      const itemID = random(1, 100);
      itemsAlsoViewed.push(itemID);
    }
    data.push(itemsAlsoViewed);
  }

  return data;
};

module.exports = generateSeedData;