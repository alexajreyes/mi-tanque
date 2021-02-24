import Typography from 'components/Typography'
import React from 'react'

export default function TextGroup({ label, value }) {
    return (
        <div>
            <Typography value={`${label}`} variant="body" mb="4px" />
            <Typography value={`${value}`} variant="title2" />
        </div>
    )
}
