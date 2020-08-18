import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProductPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  brochure,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <ul className="brochure-list">
            <li className="brochure-item">
                <a className="btn" href={brochure.brochure1.url}>
                  {brochure.brochure1.title}
                </a>
              </li>
              <li className="brochure-item">
                <a className="btn" href={brochure.brochure2.url}>
                  {brochure.brochure2.title}
                </a>
              </li>
              <li className="brochure-item">
                <a className="btn" href={brochure.brochure3.url}>
                  {brochure.brochure3.title}
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-6 is-offset-1">
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ProductPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  brochure: PropTypes.shape({
    brochure1: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    brochure2: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    brichure3: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
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
        title
        description
        brochure {
          brochure1 {
            title
            url
          }
          brochure2 {
            title
            url
          }
          brochure3 {
            title
            url
          }
        }
      }
    }
  }
`
