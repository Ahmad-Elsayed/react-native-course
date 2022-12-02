/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import colors from "../constants/colors"

const drawerWidth = 250
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulLessons {
        edges {
          node {
            title
            slug
            order
          }
        }
      }
    }
  `)
  return (
    <div style={{ display: "flex" }}>
      <Box component="nav" sx={{ width: drawerWidth }}>
        <Drawer
          variant={"persistent"}
          open
          sx={{
            display: "block",
            boxSizing: "border-box",
            width: drawerWidth,
          }}
        >
          <Header siteTitle={data.site.siteMetadata?.title} />
          <List>
            {data.allContentfulLessons?.edges
              ?.sort((a, b) => a.node.order - b.node.order)
              .map(({ node: { title, slug } }) => (
                <Link
                  to={`/lessons/${slug}`}
                  style={{
                    textDecoration: `none`,
                    color: "#657786",
                  }}
                  activeStyle={{ color: "#1DA1F2" }}
                >
                  <ListItem key={"slug"}>
                    <ListItemButton>
                      <ListItemText primary={title} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
          </List>
        </Drawer>
      </Box>

      <Container sx={{ padding: 10, marginLeft: 20 }}>
        {children}
        <footer
          style={{
            marginTop: 100,
          }}
        >
          <hr />

          <Typography variant={"caption"}>
            © {new Date().getFullYear()} &middot;
            {` `}
            <a
              href="https://www.linkedin.com/in/ahmedelsayd/"
              style={{
                textDecoration: `none`,
                color: colors.blue,
              }}
            >
              Ahmed Elsayed
            </a>
          </Typography>
        </footer>
      </Container>
    </div>
  )
}

export default Layout
