import * as React from "react"
import { Link } from "gatsby"
import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const Header = ({ siteTitle }) => (
<AppBar position="static">
    <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </Typography>
        </Toolbar>
    </Container>
</AppBar>
)

export default Header
