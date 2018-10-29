const loadElement = (element: any, str: string, position: 'head' | 'body') => {
  if (!document) {
    return
  }
  const existing = document.getElementById(`__SMART_MOBILE_${str}_NODE__`)
  if (!existing) {
    if (position === 'head') {
      document.getElementsByTagName('head')[0].appendChild(element)
    } else {
      const mountNode = document.body
      mountNode.insertAdjacentHTML('afterbegin', element)
    }
  }
}

export default loadElement
