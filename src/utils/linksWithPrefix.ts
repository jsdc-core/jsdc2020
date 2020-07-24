import { ILink } from '~/constant';

export default function linksWithPrefix(links: ILink[]) {
  return links.map(link => ({
    ...link,
    href: `${link.href}`,
  }))
}
