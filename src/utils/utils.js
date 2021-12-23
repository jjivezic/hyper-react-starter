export const objToArray = obj => {
  if (!obj) return []
  return Object.keys(obj).map(key => ({ key, value: obj[key] }))
}

export const arrayToObj = arr => {
  if (!arr) return {}
  const obj = {}
  arr.forEach(({ key, value }) => {
    if (key && value) {
      obj[key] = value
    }
  })
  return obj
}

export const sortDescendingBy = key => {
  return (a, b) => b[key] - a[key]
}

export const sortAscendingBy = key => {
  return (a, b) => b[key] - a[key]
}

export const isObjectEmpty = obj => {
  if (!obj) return true
  return Object.keys(obj).length === 0
}
