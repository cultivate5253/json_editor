export const parseJson = (json: string) => {
    try {
      return JSON.parse(json)
    } catch (error) {
      console.error(error)
      return null
    }
  }
export const setJsonData = (json: string) =>{
    localStorage.setItem("json", json)
    return parseJson(json)
}
  