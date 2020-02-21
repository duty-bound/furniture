import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  font-size: 0.7rem;
  background-color: RGB(200, 200, 200);
`

export const Footer = () =>
  <FooterWrapper>
    <p>© MIKIYA KOBAYASHI INC. All Rights Reserved.</p>
  </FooterWrapper>
