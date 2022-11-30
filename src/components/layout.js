/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import {Container} from "@mui/material";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <Container sx={{marginTop: 5}}>
        {children}
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot;
          {` `}
          <a href="https://www.linkedin.com/in/ahmedelsayd/"                     style={{
              textDecoration: `none`,
          }}>Ahmed Elsayed</a>
        </footer>
      </Container>
      </>
  )
}

export default Layout
