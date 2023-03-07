import { NextApiRequest, NextApiResponse } from 'next'

const database: { result: any }[] = []

async function sendPostToStable(
  imageFilePrompt: string,
  prompt?: string,
  stylesChoose?: string[],
  mask?: string
) {
  const response = await fetch('http://127.0.0.1:7860/sdapi/v1/img2img', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      init_images: imageFilePrompt,
      prompt: prompt,
      styles: stylesChoose,
      mask: mask,
    }),
  })
  const data = await response.json()
  console.log('tvoyiphpouhouh', data)

  let result = await data
  return { result }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { init_images, prompt, styles } = req.body

  const result = await sendPostToStable(init_images, prompt, styles)

  database.push(result)

  res.status(200).json({ message: 'Retrieved successfully!', result: database })
}
