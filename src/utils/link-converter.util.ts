interface LinkElement {
  href: string
  onclick?: () => void
}

const convertLinkToRouter = (linksList: LinkElement[], history: { push: (path: string) => void }): void => {
  linksList.forEach(e => {
    const href = e.href
    e.href = 'javascript:void(0);'
    e.onclick = () => {
      const url = href.replace(window.location.origin, '')
      history.push(url)
    }
  })
}

export default convertLinkToRouter
