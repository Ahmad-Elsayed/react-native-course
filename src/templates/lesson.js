import React from "react"
import {graphql} from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
import Layout from "../components/layout"
import {ImageListItem, Paper, Typography} from "@mui/material";

function Lesson({data}) {
    return (
        <Layout>
            <Paper sx={{padding: 10}}>
                <Typography variant={"h1"} component="h2" sx={{fontSize: '2rem', fontWeight: 'bold', marginBottom: 5}}>
                    {
                        data.contentfulLessons.title
                    }
                </Typography>
                {documentToReactComponents(JSON.parse(data.contentfulLessons.body.raw), {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: (node) => {
                            console.log(node.data.target, data.allContentfulAsset.nodes)
                            const {publicUrl, width} = data.allContentfulAsset.nodes.filter(assetNode => assetNode.contentful_id === node.data.target.sys.id)[0] || {}
                            const url = decodeURIComponent(publicUrl.substring(publicUrl.indexOf('http')))
                            console.log(width)
                            return (
                                <ImageListItem sx={{paddingTop: 2, paddingBottom: 2, width, maxWidth: '100%' }}>
                                    <img
                                        src={url}
                                        alt={node.data.target.fields?.description}
                                    />
                                </ImageListItem>
                            )
                        },
                        [BLOCKS.PARAGRAPH]: (node, content)=><Typography sx={{maxWidth: '100%'}}>
                            {content}
                        </Typography>
                    }
                })}
            </Paper>
        </Layout>
    )
}

export const query = graphql`
  query lessonQuery($slug: String!) {
    contentfulLessons(slug: { eq: $slug }) {
      body {
      raw
    }
    title
    }
  allContentfulAsset {
    nodes {
      publicUrl
      contentful_id
      width
    }
  }
  }
`

export default Lesson
