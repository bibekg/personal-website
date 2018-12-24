import { rgba } from 'polished'

export const colors = {
  blue: 'rgb(70,80,223)',
  green: '#28a639',
  white: '#fefeff',
  black: '#50514f',
  grey: '#7e807d',
  lightGrey: '#d4dad1',
  almostWhite: 'rgba(200,200,200,0.5)',
  body: '#50514F',
}

export const fonts = {
  serif: 'Lora',
  'sans-serif': 'Open Sans',
}

export const shadows = {
  default: '0px 2px 8px 2px rgba(0, 0, 0, 0.25)',
  light: '0px 2px 8px 2px rgba(0, 0, 0, 0.15)',
  blue: `0px 2px 8px 2px ${rgba(colors.blue, 0.45)}`,
  lightBlue: `0px 2px 8px 2px ${rgba(colors.blue, 0.15)}`,
}

export const breakpoints = {
  default: 550,
}
