export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}
