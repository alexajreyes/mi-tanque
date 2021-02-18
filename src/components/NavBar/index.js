import React, { useState } from 'react'

import { MdHistory as HistoryIcon } from 'react-icons/md'
import { BiTachometer as MeterIcon } from 'react-icons/bi'
import { Nav, NavItem } from './styles'

const Tabs = {
    HISTORY: 1,
    METER: 2,
}

export default function NavBar() {
    const [tabActive, setTabActive] = useState(Tabs.METER)

    const handleClick = tab => {
        setTabActive(tab)
    }

    return (
        <Nav>
            <NavItem
                onClick={() => handleClick(Tabs.HISTORY)}
                active={tabActive === Tabs.HISTORY ? true : false}
            >
                <HistoryIcon size={32} />
                <span>Historial</span>
            </NavItem>
            <NavItem
                onClick={() => handleClick(Tabs.METER)}
                active={tabActive === Tabs.METER ? true : false}
            >
                <MeterIcon size={32} />
                <span>Medición</span>
            </NavItem>
        </Nav>
    )
}
