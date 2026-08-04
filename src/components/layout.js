import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StagingBadge from "./stagingBadge"
import Header from "./header"
import Footer from "./footer"

import "../scss/site.scss"

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
      <StagingBadge />
    </>
  )
}
