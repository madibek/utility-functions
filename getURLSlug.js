function getURLSlug(word) {

  return words
    .replace(/\s+/g, '-')
    .toLowerCase();
}
