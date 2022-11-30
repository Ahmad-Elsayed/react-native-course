import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material"

const IndexPage = ({ data: { allContentfulLessons } }) => {
  return (
    <Layout>
      <Container>
        <Paper variant={"outlined"}>
          <List>
            {allContentfulLessons?.edges?.map(({ node: { title, slug } }) => (
              <Link
                to={`/lessons/${slug}`}
                style={{
                  textDecoration: `none`,
                }}
              >
                <ListItem key={"slug"}>
                  <ListItemButton>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Paper>
      </Container>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulLessons {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
