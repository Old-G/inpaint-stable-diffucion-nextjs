export const sendPrompt = async (
  inputFile: string,
  inputText: string,
  styles: string,
  color: string,
  setLoading: (value: boolean) => void,
  setResult: (value: []) => void
) => {
  try {
    const request = await fetch('http://localhost:3000/api/prompts', {
      method: 'POST',
      body: JSON.stringify({
        prompt: `${inputText} ${color && 'color' + ' ' + color} ${styles}`,
        styles: [`${styles}`],
        init_images: [inputFile.toString()],
      }),
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    })

    const res = await request.json()
    console.log({ res })

    if (res.message) {
      console.log(res.message)

      setLoading(false)
      setResult(res.result)
    }
  } catch (error) {
    console.log(error)
  }
}
