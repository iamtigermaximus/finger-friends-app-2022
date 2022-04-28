import React from 'react'
import colours from '../../../../colours'

const BgCircle = () => {
  const colour = colours.bgColours.navyBlue

  return <circle cx='400' cy='400' r='300' fill={colour} />
}

export default BgCircle
