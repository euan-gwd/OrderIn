export function formatPrice(cents) {
  return `R${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
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

export function unSlug(slugs) {
  slugs = slugs.replace(/_/g, "-");
  slugs = slugs.replace(/--/g, "-");

  var list = [];
  slugs.split("-").forEach(function(slug) {
    list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1));
  });
  return list.join(" ");
}
