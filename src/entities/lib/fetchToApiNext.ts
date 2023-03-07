export const fetchToApiNext = async (url: string, body: any) => {
  const request = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  })

  return request
}
