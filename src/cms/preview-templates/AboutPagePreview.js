import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
    <AboutPageTemplate
      image={getAsset(data.image)}
      titlebanner={data.titlebanner}
      subtitlebanner={data.subtitlebanner}
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
