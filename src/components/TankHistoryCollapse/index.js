import Tank from 'components/Tank'
import Typography from 'components/Typography'
import React, { useState } from 'react'
import { Wrapper, Header, List } from './styles'
import CardHistory from 'components/CardHistory'

import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io'
import { IoIosArrowUp as ArrowUpIcon } from 'react-icons/io'

function TankHistoryCollapse({
  capacity = '100',
  diameter = '25',
  length = '48',
}) {
  const [collapseIsactive, setCollapseIsactive] = useState(false)

  const toggleCollapse = () =>
    setCollapseIsactive(prevCollapse => !prevCollapse)

  return (
    <Wrapper>
      <Header>
        <Tank capacity={capacity} diameter={diameter} length={length} />
        <div>
          <Typography variant="title3" value={`Tanque ${capacity} gls`} />
          <Typography variant="caption" value={`Total: 8 mediciones`} />
        </div>
        {collapseIsactive ? (
          <ArrowUpIcon size={24} onClick={toggleCollapse} />
        ) : (
          <ArrowDownIcon size={24} onClick={toggleCollapse} />
        )}
      </Header>
      {collapseIsactive && (
        <List>
          <CardHistory />
        </List>
      )}
    </Wrapper>
  )
}

export default React.memo(TankHistoryCollapse)
