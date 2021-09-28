const addToDb = (id) => {
  const exists = localStorage.getItem(id);
  if (!exists) {
    localStorage.setItem(id, 1);
  } else {
    const newCount = parseInt(exists) + 1;
    localStorage.setItem(id, newCount);
  }
};
const addToDbObj = (id) => {
  const exists = localStorage.getItem("shopping-cart");
  let shoppingCart = {};
  if (!exists) {
    shoppingCart[id] = 1;
    // localStorage.setItem('shopping-cart',shoppingCart )
  } else {
    shoppingCart = JSON.parse(exists);
    if (shoppingCart[id]) {
      shoppingCart[id] = shoppingCart[id] + 1;
    } else {
      shoppingCart[id] = 1;
    }
  }
  setLocalStorage(shoppingCart);
};
const removeFromDb = (id) => {
  const exists = localStorage.getItem('shopping-cart');
  if (!exists) {
  } else {
    const shoppingCart = JSON.parse(exists);
    delete shoppingCart[id];
    setLocalStorage(shoppingCart);
  }
};
const setLocalStorage = (cart) => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
};

export { addToDb, addToDbObj, removeFromDb };
