const qs = new URLSearchParams(window.location.search)

window.getURLParam = (param) => {
  var param = qs.get(param)
  
  if (!param) return null;
  
  return param
}

window.getAllURLParams = () => {
  var entries = {}
  
  qs.forEach((v,k) => {
    entries[k] = v
  })
  
  return entries
}
