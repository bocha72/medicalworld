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
        <div className="columns is-12">
          <div className="column is-4 is-offset-1">
            {/* Acá va un slider */}
          </div>
          <div className="column is-8 is-offset-1">
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
