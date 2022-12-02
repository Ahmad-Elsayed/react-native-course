import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Typography } from "@mui/material"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import colors from "../constants/colors"

const IndexPage = ({ data: { allContentfulIntro } }) => {
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {allContentfulIntro.edges.map(({ node }) =>
          documentToReactComponents(JSON.parse(node.body.raw), {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, content) => (
                <Typography
                  variant={"overline"}
                  sx={{ color: colors.darkGray }}
                >
                  {content}
                </Typography>
              ),
            },
          })
        )}
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
    allContentfulIntro {
      edges {
        node {
          body {
            raw
          }
        }
      }
    }
  }
`
