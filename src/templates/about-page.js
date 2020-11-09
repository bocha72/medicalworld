import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ 
  image,
  titlebanner,
  subtitlebanner,
  title, 
  content, 
  contentComponent 
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient about-us-page">
      <div
        className="banner full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: `160px`,
        }}
      >
        <div className="banner-content">
          <h1
            className=""
            style={{
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {titlebanner}
          </h1>
          <h5
            className=""
            style={{
              padding: '0.25em',
            }}
          >
            {subtitlebanner}
          </h5>
        </div>
      </div>
      <div className="container">
        <div className="columns about-content">
          <div className="column is-6"></div>
          <div className="column is-6 about-text">
            <div className="section">
              <h1 className="">
                {title}
              </h1>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  titlebanner: PropTypes.string.isRequired,
  subtitlebanner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        titlebanner={post.frontmatter.titlebanner}
        subtitlebanner={post.frontmatter.subtitlebanner}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        titlebanner
        subtitlebanner
        title
      }
    }
  }
`
