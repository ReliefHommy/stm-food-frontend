import React, { Suspense } from 'react'
import ThankYouClient from './ThankYouClient'

// Server-side page that wraps the client UI inside Suspense
export default function ThankYouPage() {
  return (
    <Suspense fallback={<div />}>
      <ThankYouClient />
    </Suspense>
  )
}
