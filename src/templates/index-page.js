import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BrandSlider from '../components/BrandSlider'

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
      <div className="banner-content"
        style={{

        }}
      >
        <h5
          className=""
          style={{
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h5>
        <h3
          className=""
          style={{
            padding: '0.25em',
          }}
        >
          {subtitle}
        </h3>
        <Link className="btn" to="/products"> Ver productos</Link>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="contents">
                <div className="mainpitch">
                  <div className="tile">
                    <h1 className="m-title">{mainpitch.title}</h1>
                    <h4 className="m-subtitle">{mainpitch.description}</h4>
                  </div>
                </div>
                <div className="columns home-categories">
                  <div className="column is-4 has-text-centered">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                    <h4>{main.image1.title}</h4>
                  </div>
                  <div className="column is-4 has-text-centered">
                    <PreviewCompatibleImage imageInfo={main.image2} />
                    <h4>{main.image2.title}</h4>
                  </div>
                  <div className="column is-4 has-text-centered">
                    <PreviewCompatibleImage imageInfo={main.image3} />
                    <h4>{main.image3.title}</h4>
                  </div>
                </div>
                <div className="columns category-button">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      Ver productos
                    </Link>
                  </div>
                </div>
                <div className="home-blog column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Ultimas noticias
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12 has-text-centered">
          <BrandSlider />
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
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
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
          title
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
            title
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 135, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 135, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`
