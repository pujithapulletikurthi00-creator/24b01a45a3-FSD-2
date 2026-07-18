function calculateDiscountTraditional(price: number, discount: number): number {
    return price - (price * discount);
}

const calculateDiscountArrow = (price: number, discount: number): number => {
    return price - (price * discount);
};

const getStoreMessage = (store: string): string => `Welcome to ${store} Store!`;

const productPrice: number = 1200;
const discountRate: number = 0.15;

console.log(getStoreMessage("Reliance"));

const finalPrice1 = calculateDiscountTraditional(productPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);

const finalPrice2 = calculateDiscountArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);
