const deepClone = obj => {

  if (typeof obj !== 'object' || obj === null) return obj
  const newObject = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    const value = obj[key]

    newObject[key] = (typeof value === "object") ? deepClone(value) : value
  }

  return newObject
}
export default deepClone

