export default function linksWithPrefix(links) {
  return links.map(link => ({
    ...link,
    href: `${link.href}`,
  }))
}
