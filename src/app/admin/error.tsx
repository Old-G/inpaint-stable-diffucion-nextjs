'use client' // Error components must be Client components

import { Button, Flex, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Flex direction={'column'}>
      <Heading>Something went wrong!</Heading>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Flex>
  )
}
