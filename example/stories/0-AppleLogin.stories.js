import React from 'react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { AppleLogin } from 'react-apple-login-popup'

export default {
  title: 'Apple Sign In',
  decorators: [withKnobs]
}

export const OfficialStyle = () => {
  const width = number('Width', 210, {
    range: true,
    min: 140,
    max: 840
  })
  const height = number('Height', 45, {
    range: true,
    min: 30,
    max: 180
  })
  const border = boolean('Border', false)
  const borderRadius = number('Border Radius', 5, {
    range: true,
    min: 0,
    max: 90
  })

  const colors = {
    Black: 'black',
    White: 'white'
  }
  const color = select('Fruit', colors, 'black')

  const styles = {
    padding: '2rem'
  }

  return (
    <div style={styles}>
      <AppleLogin
        clientId='[clientId]'
        redirectURI={document.location.origin}
        onSuccess={console.log}
        onFailure={console.error}
        appearance={{ border, width, height, borderRadius, color }}
      />
    </div>
  )
}

OfficialStyle.story = {
  name: 'Official Style'
}
