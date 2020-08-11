import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
  image,
  title,
  main
}) => (
  <div className="content product-page">
    <div
      className="full-width-image-container margin-top-0 product-page-banner"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <div className="columns product-categories">
      <div className="column is-4 has-text-centered">
        <PreviewCompatibleImage imageInfo={main.image1} />
        <h4>{main.image1.title}</h4>
        <ul className="product-links">
          <li className="item">
            <Link className="btn" to="#">
              Producto 1
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 2
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 3
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 4
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 5
            </Link>
          </li>
        </ul>
      </div>
      <div className="column is-4 has-text-centered">
        <PreviewCompatibleImage imageInfo={main.image2} />
        <h4>{main.image2.title}</h4>
        <ul className="product-links">
          <li className="item">
            <Link className="btn" to="#">
              Producto 1
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 2
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 3
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 4
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 5
            </Link>
          </li>
        </ul>
      </div>
      <div className="column is-4 has-text-centered">
        <PreviewCompatibleImage imageInfo={main.image3} />
        <h4>{main.image3.title}</h4>
        <ul className="product-links">
          <li className="item">
            <Link className="btn" to="#">
              Producto 1
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 2
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 3
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 4
            </Link>
          </li>
          <li className="item">
            <Link className="btn" to="#">
              Producto 5
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  main: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.string]),
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
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
