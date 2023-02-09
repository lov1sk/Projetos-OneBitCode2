export default function editElements(element, options) {
  const el = document.getElementsByTagName(element)[0]
  Object.assign(el,options)
  console.log (el)
}