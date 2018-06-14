// @flow

import React from 'react'
import { type Element } from 'react'

require('./main.css')

type CloseButtonProps = {
  closeSearch: () => void,
}

const Icon = (): Element<'img'> =>
  React.createElement(
    'img',
    {
      src: 'static/close-icon.svg',
      className: 'close-button-icon',
    },
  )

const CloseButton = (props: CloseButtonProps): Element<'div'> =>
  React.createElement(
    'div',
    {},
    React.createElement(
      'a',
      {
        onClick: props.closeSearch,
        className: 'close-button link',
      },
      'close',
      React.createElement(
        Icon,
        {
          'aria-label': 'Close',
        },
      ),
    ),
  )

export default CloseButton

