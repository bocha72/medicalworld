import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Carousel from 'react-carousel-with-thumbnail'

export const ProductPostTemplate = ({
  productimages,
  content,
  contentComponent,
  description,
  title,
  helmet,
  brochure,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section product-detail-page">
      {helmet || ''}
      <div className="container content">
        <div className="columns is-12">
          <div className="column is-6 is-offset-1">
            {/* Acá va un slider */}
            <Carousel width="100%" height="400px" thumbHeight="80px" autoPlay={false}>
              <div>
                <PreviewCompatibleImage imageInfo={productimages.image1.image} />
              </div>
              <div>
                <PreviewCompatibleImage imageInfo={productimages.image2.image} />
              </div>
              <div>
                <PreviewCompatibleImage imageInfo={productimages.image3.image} />
              </div>
              <div>
                <PreviewCompatibleImage imageInfo={productimages.image1.image} />
              </div>
              <div>
                <PreviewCompatibleImage imageInfo={productimages.image2.image} />
              </div>
            </Carousel>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <ul className="brochure-list">
            <li className="brochure-item">
                <a href={brochure.brochure1.url}>
                  {brochure.brochure1.title}
                </a>
              </li>
              <li className="brochure-item">
                <a href={brochure.brochure2.url}>
                  {brochure.brochure2.title}
                </a>
              </li>
              <li className="brochure-item">
                <a href={brochure.brochure3.url}>
                  {brochure.brochure3.title}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column is-12 is-offset-1">
            <PostContent content={content} />
        </div>
      </div>
    </section>
  )
}
ProductPostTemplate.propTypes = {
  productimages: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object]),
    image2: PropTypes.oneOfType([PropTypes.object]),
    image3: PropTypes.oneOfType([PropTypes.object]),
    image4: PropTypes.oneOfType([PropTypes.object]),
    image5: PropTypes.oneOfType([PropTypes.object]),
  }),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  brochure: PropTypes.shape({
    brochure1: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    brochure2: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    brochure3: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  }),
}
const ProductPost = ({ data }) => {
  const { markdownRemark: post2 } = data
  return (
    <Layout>
      <ProductPostTemplate
        content={post2.html}
        contentComponent={HTMLContent}
        description={post2.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | MedicalWorld">
            <title>{`${post2.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post2.frontmatter.description}`}
            />
          </Helmet>
        }
        productimages={post2.frontmatter.productimages}
        title={post2.frontmatter.title}
        brochure={post2.frontmatter.brochure}
      />
    </Layout>
  )
}
ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}
export default ProductPost
export const pageQuery = graphql`
query ProductPostByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      productimages {
        image1 {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image2 {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image3 {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image4 {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image5 {
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      title
      description
      tags
      brochure {
        brochure1 {
          url
          title
        }
        brochure2 {
          url
          title
        }
        brochure3 {
          url
          title
        }
      }
    }
  }
}
`