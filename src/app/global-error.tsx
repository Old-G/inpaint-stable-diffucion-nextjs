'use client'

import { Button, Heading } from '@chakra-ui/react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <head></head>
      <body>
        <Heading>Something went wrong!</Heading>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}
