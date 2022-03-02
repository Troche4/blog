import { graphql } from "gatsby";
import React from "react"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
  return <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <img alt="Burt Lake" src={data.image.publicURL} />
    </div>
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    
    image: file(base: { eq: "burt_lake.jpg" }) {
      publicURL
    }
  }
`