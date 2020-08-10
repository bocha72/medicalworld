import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subtitle={data.subtitle}
        mainpitch={data.mainpitch || {}}
        main={{
          image1: {
            image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
            alt: entry.getIn(['data', 'main', 'image1', 'alt']),
            title: entry.getIn(['data', 'main', 'title']),
          },
          image2: {
            image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
            alt: entry.getIn(['data', 'main', 'image2', 'alt']),
            title: entry.getIn(['data', 'main', 'title']),
          },
          image3: {
            image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
            alt: entry.getIn(['data', 'main', 'image3', 'alt']),
            title: entry.getIn(['data', 'main', 'title']),
          },
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
