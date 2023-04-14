let aPriceList;

export const setPriceList = (priceList) => {
  aPriceList = priceList;
};

export const getPrice = () => {
  return 54401;
};

setPriceList([1, 2, 3]);
print(getPrice(), aPriceList);
