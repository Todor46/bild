const _ = require("lodash");
const faker = require("faker");

module.exports = function () {
  return {
    projects: _.times(50, (n) => {
      return {
        id: n,
        title: faker.commerce.productName(),
        description: faker.lorem.words(_.random(10, 25)),
        image: `${faker.image.business()}?random=${_.random(0, 1000)}`,
      };
    }),
  };
};