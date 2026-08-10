import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <div className='h-100vh flex'>
        <div className='flex flex-col gap-20 ma text-center'>
          <h1>404: Not Found</h1>
          <p>You've just hit a page that doesn&#39;t exist. Please return home.</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='404: Not Found' />
