import React from 'react'
import { Wrapper, Wave, FuelLevel } from './styles'

import { FaGasPump as FuelIcon } from 'react-icons/fa'
import Typography from 'components/Typography'

export default function TankAnimation() {
    return (
        <Wrapper>
            <FuelLevel>
                <FuelIcon size={32} />
                <Typography variant="title2" value="50%" />
            </FuelLevel>
            <Wave
                fuellevel={`${50}%`}
                fill="#00A8CC"
                paused={false}
                options={{
                    height: 2,
                    amplitude: 10,
                    speed: 0.15,
                    points: 3,
                }}
            ></Wave>
        </Wrapper>
    )
}
