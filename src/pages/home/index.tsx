import React from 'react'
import type { NextPage } from 'next'

import { SEO } from '~/components/SEO';

export const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Next Rocket"
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
