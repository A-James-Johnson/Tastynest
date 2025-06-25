export const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Failed to load from localStorage:", e);
    return undefined;
  }
};

export const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Failed to save to localStorage:", e);
  }
};
