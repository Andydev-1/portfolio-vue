import { reactive } from 'vue';

export const cartStore = reactive({
  items: [],
  
  addToCart(car) {
    const existingItem = this.items.find(item => item.id === car.id);
    if (!existingItem) {
      this.items.push({
        ...car,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }
  },
  
  removeFromCart(carId) {
    const index = this.items.findIndex(item => item.id === carId);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },
  
  isInCart(carId) {
    return this.items.some(item => item.id === carId);
  },
  
  get totalItems() {
    return this.items.length;
  },
  
  get totalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
  
  clearCart() {
    this.items = [];
  }
});