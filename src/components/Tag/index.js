// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import kebabCase from 'lodash.kebabcase'
import {Link} from 'gatsby'
import {getRandomFromArrayBySeed} from '../../util/prng'

const colorWhite = '#ffffff'
const colorSets = {
  gray: {dark: '#555252', medium: '#999696', light: '#f3f0f0'},
  red: {dark: '#6d110d', medium: '#df4341', light: '#ffecee'},
  orange: {dark: '#693614', medium: '#fd974d', light: '#ffede6'},
  yellow: {dark: '#725318', medium: '#edc537', light: '#fff1ce'},
  green: {dark: '#005f0b', medium: '#52d356', light: '#dfffdc'},
  aqua: {dark: '#00563a', medium: '#29ca9a', light: '#e0fbee'},
  cyan: {dark: '#004d69', medium: '#00c1de', light: '#e1f7ff'},
  bondi: {dark: '#003f73', medium: '#25adea', light: '#e4f6ff'},
  blue: {dark: '#00327c', medium: '#1f85eb', light: '#e7f6ff'},
  purple: {dark: '#431a6e', medium: '#8d62e4', light: '#f4f2ff'},
  magenta: {dark: '#561054', medium: '#ba4cbf', light: '#feeaff'},
  pink: {dark: '#660c3d', medium: '#f9569c', light: '#ffecf4'},
  blueGray: {dark: '#35355d', medium: '#8383ab', light: '#f2f2ff'},
  lime: {dark: '#617218', medium: '#a5d134', light: '#f3ffce'},
  brown: {dark: '#7a3515', medium: '#dc9777', light: '#ffede5'}
}

const tagColorSets = Object.fromEntries(Object.entries(colorSets).map(([name, color]) => {
  return [name, {
    name,
    dark: {backgroundColor: color.medium, color: colorWhite},
    light: {backgroundColor: color.light, color: color.dark}
  }]
}))

const tagColorList = Object.values(tagColorSets)

const LinkElement = styled(Link)`

  &.hash .term:before {
    content: '#';
  }
  &.block {
    font-weight: bold;
    display: inline-block;
    border-radius: var(--jikuu-block-rounding);
    padding: 0.1em 0.3em;
    border: 1px solid rgba(5, 2, 2, 0.08);
    border-bottom-color: rgba(5, 2, 2, 0.22);
  }
  &.block:hover {
    opacity: 0.8;
    text-decoration: none;
    border: 1px solid rgba(5, 2, 2, 0.2);
    border-bottom-color: rgba(5, 2, 2, 0.3);
  }
`

const Tag = ({term, link, colorName = 'red', count = 0, isLight = false, isBlock = false, hasCount = false, hasHash = true}) => {
  const tagClasses = {
    'hash': hasHash,
    'count': count > 0,
    'block': isBlock,
    'inline': !isBlock
  }

  // Pick a random color set using the term as seed. This goes unused if it's not a block tag.
  const colorSet = getRandomFromArrayBySeed(tagColorList, `${term}`.trim())

  // Generate our tag link unless explicitly stated.
  const tagLink = link ? link : `/tag/${kebabCase(term)}`

  return (
    <>
      <LinkElement to={tagLink} style={isBlock ? colorSet[isLight ? 'light' : 'dark'] : {}} className={classNames(tagClasses)} data-term={term}>
        <span className="term">{term}</span>
      </LinkElement>
      {' '}
    </>
  )
}

export default Tag
