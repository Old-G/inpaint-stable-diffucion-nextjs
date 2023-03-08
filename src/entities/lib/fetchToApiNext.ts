export const fetchToApiNext = async (url: string, body: any) => {
  try {
    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    })
    return request
  } catch (error) {
    console.log(error)
  }
}
