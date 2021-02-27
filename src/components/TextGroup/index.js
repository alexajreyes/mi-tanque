import Typography from 'components/Typography'
import React from 'react'

export default function TextGroup({ label, value, caption = null }) {
  return (
    <div>
      <Typography value={`${label}`} variant="body" mb="4px" />
      <Typography value={`${value}`} variant="title2" />
      {caption && <Typography value={`${caption}`} variant="caption2" />}
    </div>
  )
}
