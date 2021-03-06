import React from 'react'
import styled from 'styled-components'
import { colors } from '@auth0/cosmos/tokens'

const Title = styled.div`
  position: absolute;
  font-family: 'Roboto Mono';
  font-size: 12px;
  color: rgb(168, 168, 168);
  top: 1.5em;
  left: 2em;
`

const Example = styled.div`
  background-color: white;
  padding: 4.5rem 3rem 3rem 3rem;
  position: relative;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 1rem;
  border-radius: 3px;

  &.align-center {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
  }

  background: ${props => (props.background === 'dark' ? colors.base.default : colors.base.white)};
`

export default props => (
  <Example className={props.align === 'center' ? 'align-center' : null} {...props}>
    <Title>{props.title}</Title>
    {props.children}
  </Example>
)

export { Example }
