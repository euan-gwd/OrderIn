export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function getStoreNames() {
  const restaurants = [
    'Senhor Calistos',
    'The Sticky Fingers BBQ',
    'KFC',
    'Steers',
    'Cafe Jinga',
    'Three Feathers',
    'The Mash Tun',
    'Bingo',
    'Fishaways',
    'Burger King'
  ];

  return restaurants;
}
