'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import './styles.module.css'

export function LoadingPerPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = (url: any) => url !== pathname && setLoading(true)
    const handleComplete = (url: any) =>
      url === pathname &&
      setTimeout(() => {
        setLoading(false)
      }, 5000)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    loading && (
      <div className='spinner-wrapper'>
        <div className='spinner'></div>
      </div>
    )
  )
}
