import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  
  addToCart: (product) => set((state) => {
    const existingIndex = state.cart.findIndex((item) => 
      item.id === product.id && 
      item.selectedSize === product.selectedSize && 
      item.selectedColor === product.selectedColor
    );
    
    if (existingIndex > -1) {
      const newCart = [...state.cart];
      newCart[existingIndex] = {
        ...newCart[existingIndex],
        quantity: newCart[existingIndex].quantity + 1
      };
      return { cart: newCart };
    }
    
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  removeFromCart: (productId, size, color) => set((state) => ({
    cart: state.cart.filter((item) => 
      !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
    ),
  })),

  decreaseQuantity: (productId, size, color) => set((state) => {
    const item = state.cart.find((item) => 
      item.id === productId && item.selectedSize === size && item.selectedColor === color
    );
    
    if (item && item.quantity > 1) {
      return {
        cart: state.cart.map((i) =>
          i.id === productId && i.selectedSize === size && i.selectedColor === color
            ? { ...i, quantity: i.quantity - 1 } 
            : i
        )
      };
    }
    return { 
      cart: state.cart.filter((i) => 
        !(i.id === productId && i.selectedSize === size && i.selectedColor === color)
      ) 
    };
  }),

  clearCart: () => set({ cart: [] }),
}));
