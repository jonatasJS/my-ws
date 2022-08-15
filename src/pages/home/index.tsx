import React from 'react'
import type { NextPage } from 'next'

import { SEO } from '~/components/SEO';

export const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="STRV Next.js app"
        description="change me before going to production"
      />

      <div>
        <p>
          Em construção!
        </p>
      </div>
    </>
  )
}
