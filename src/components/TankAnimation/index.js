import React from 'react'
import { Wrapper, Wave } from './styles'

export default function TankAnimation() {
    return (
        <Wrapper>
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
