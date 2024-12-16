export default function formatPrice(price) {
  if (Math.ceil(price) % price === 0) return price;
  return price.toFixed(2)
}