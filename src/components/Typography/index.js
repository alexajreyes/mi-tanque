import React from 'react'
import PropTypes from 'prop-types'
import { Title, Title2, Title3, Link, Body, Caption } from './styles'

export default function Typography({ value, color, variant, mt, mb, ml, mr }) {
  switch (variant.toLowerCase()) {
    case 'title':
      return (
        <Title mt={mt} ml={ml} mr={mr} mb={mb} color={color}>
          {value}
        </Title>
      )

    case 'title2':
      return (
        <Title2 mt={mt} mb={mb} ml={ml} mr={mr} color={color}>
          {value}
        </Title2>
      )

    case 'title3':
      return (
        <Title3 mt={mt} mb={mb} ml={ml} mr={mr} color={color}>
          {value}
        </Title3>
      )

    case 'link':
      return (
        <Link mt={mt} mb={mb} ml={ml} mr={mr} color={color}>
          {value}
        </Link>
      )

    case 'body':
      return (
        <Body mt={mt} mb={mb} ml={ml} mr={mr} color={color}>
          {value}
        </Body>
      )

    case 'caption':
      return (
        <Caption mt={mt} mb={mb} ml={ml} mr={mr} color={color}>
          {value}
        </Caption>
      )

    default:
      return (
        <Body mt={mt} mb={mb} ml={ml} mr={mr} color={color}>
          {value}
        </Body>
      )
  }
}

Typography.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
}
