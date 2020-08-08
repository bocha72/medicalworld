import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  mainpitch,
  main
}) => (
  <div className="home">
    <div
      className="banner full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: '#fff',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center'
          }}
        >
          {title}
        </h1>
        <h2
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: '#fff',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center'
          }}
        >
          {subtitle}
        </h2>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content subtitle-content">
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns home-categories">
                  <div className="column is-4 has-text-centered">
                  <PreviewCompatibleImage imageInfo={main.image1} />
                    <h4>{main.categoryname1}</h4>
                  </div>
                  <div className="column is-4 has-text-centered">
                  <PreviewCompatibleImage imageInfo={main.image2} />
                    <h4>{main.categoryname2}</h4>
                  </div>
                  <div className="column is-4 has-text-centered">
                  <PreviewCompatibleImage imageInfo={main.image3} />
                    <h4>{main.categoryname3}</h4>
                  </div>
                </div>
                <div className="columns category-button">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="home-blog column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered blog-button">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mainpitch: PropTypes.object,
  main: PropTypes.shape({
    categoryname1: PropTypes.string,
    categoryname2: PropTypes.string,
    categoryname3: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        mainpitch={frontmatter.mainpitch}
        main={frontmatter.main}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        mainpitch {
          description
        }
        main {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 135, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          categoryname1
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 135, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          categoryname2
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 135, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          categoryname3
        }
      }
    }
  }
`
