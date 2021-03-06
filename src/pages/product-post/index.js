import React from 'react'
import BrandSlider from '../../components/BrandSlider'
import Layout from '../../components/Layout'
import ProductRoll from '../../components/ProductRoll'

export default class ProductIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="product-list">
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/blog-index.jpg')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                backgroundColor: '#f40',
                color: 'white',
                padding: '1rem',
              }}
            >
              Productos
            </h1>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
                <ProductRoll />
              </div>
            </div>
            <div className="columns brandslider-container">
              <div className="column is-12 has-text-centered brandslider">
                <BrandSlider />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
