/* @flow */

export const setPageTitle: (title?: string) => void = (title) => {
  document.title = title ? `${title} / Potatoro` : 'Potatoro'
}
