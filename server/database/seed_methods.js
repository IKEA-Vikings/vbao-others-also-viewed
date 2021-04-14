const generateSeedData = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let data = [];

  for (let id = 1; id <= 100; id++) {
    let doc = {};
    doc.id = id;
    doc.similar_items = [];
    const numItemsAlsoViewed = random(1, 20);
    for (let i = 0; i < numItemsAlsoViewed; i++) {
      let itemID = random(1, 100);
      while (itemID === i) {
        itemID = random(1, 100);
      }
      doc.similar_items.push(itemID);
    }
    data.push(doc);
  }

  return data;
};

module.exports = generateSeedData;