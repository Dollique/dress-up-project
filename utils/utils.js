// checks if an object is empty
export const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
};

// get active product object by id
export const getActiveProduct = (productArray, id) => {
  if (!id) return;
  const result = productArray.filter((item) => item.id === id);
  return result[0].attributes;
};

export const splitProductOption = (activeItem, option) => {
  if (!isEmpty(activeItem)) {
    return activeItem[option].split(",");
  }
};

// remove last char of a string if it's an 's'
export const strToSingular = (str) => {
  if (str.slice(-1) === "s") return str.slice(0, -1);
};
