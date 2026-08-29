const detailPages = new Set([
  'new-member-open-house',
  'apex-arena',
]);

export function getEventHref(slug) {
  return detailPages.has(slug) ? `/events/${slug}` : `/events#${slug}`;
}
