import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="heading-level-3">React Sketch.app — set up tutorial</h3>

          <a
            href="https://medium.com/sketch-app-sources/react-sketch-app-set-up-tutorial-2f42d7262fba"
            target="_blank"
          >
            <figure className="kg-card kg-image-card">
              <Img
                fluid={data.smallPic.childImageSharp.fluid}
                className="kg-image"
              />
              <figcaption>React Sketch Tutorial</figcaption>
            </figure>
          </a>

          <p>
            A quick tutorial on managing a design system and rendering React
            components to Sketch.
          </p>

          <h3 id="heading-level-3">10 Product Design podcasts in 2020</h3>

          <a
            href="https://medium.com/pavcoding/10-best-product-design-podcasts-2020-b488c9d10d46"
            target="_blank"
          >
            <figure className="kg-card kg-image-card">
              <Img
                fluid={data.smallPic2.childImageSharp.fluid}
                className="kg-image"
              />
              <figcaption>Podcast list</figcaption>
            </figure>
          </a>

          <p>A list of my favourite podcasts.</p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(relativePath: { eq: "sketch-tut.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smallPic2: file(relativePath: { eq: "cast.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sketch-tut.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(relativePath: { eq: "sketch-tut.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
