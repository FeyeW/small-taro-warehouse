import defaultSettings from '@/settings'

const title = defaultSettings.title || '智慧农业门户系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
