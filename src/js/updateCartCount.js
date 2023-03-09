export const updateCartItemCount = (newAmount, itemId) => {
 setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
};
