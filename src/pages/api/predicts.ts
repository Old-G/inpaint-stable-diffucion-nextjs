import { NextApiRequest, NextApiResponse } from 'next'

const database: { result: any }[] = []

const url = process.env.NEXT_PUBLIC_API_STABLE_DIFFUSION_URL_LOCAL

async function sendPostToStable(
  imageFilePrompt: string,
  prompt?: string,
  stylesChoose?: string[],
  batch_size?: number,
  mask?: string,
  init_img_with_mask?: string,
  mode?: number,
  n_iter?: number,
  script_args?: [],
  batch_count?: number
) {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      init_images: imageFilePrompt,
      prompt: prompt,
      styles: stylesChoose,
      batch_size: batch_size,
      mask: mask,
      init_img_with_mask: init_img_with_mask,
      mode: mode,
      n_iter: n_iter,
      script_args: script_args,
      batch_count: batch_count,
    }),
  })
  const data = await response?.json()

  const result = await data
  return { result }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { init_images, prompt, styles } = req.body

  const result = await sendPostToStable(init_images, prompt, styles)

  console.log({ result })

  database.push(result)

  res.status(200).json({ message: 'Retrieved successfully!', result: database })
}
