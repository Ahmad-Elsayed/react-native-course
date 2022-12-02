import * as React from "react"
import { Link } from "gatsby"
import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import colors from "../constants/colors"

const Header = ({ siteTitle }) => (
  <AppBar position="static" sx={{ backgroundColor: colors.blue }}>
    <Container>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: colors.extraExtraLightGray,
              fontWeight: "600",
            }}
          >
            {siteTitle.toUpperCase()}
          </Link>
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
)

export default Header
