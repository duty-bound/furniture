import React from 'react'
import styled from '@emotion/styled'

const breakpoint = '50rem'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid RGB(200, 200, 200);
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media only screen and (min-width: ${breakpoint}) {
    padding: 0 2rem;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;

  @media only screen and (min-width: ${breakpoint}) {
    padding: 0 1.5rem 0 0;
  }
`

const SelectedMenuItem = styled.p`
  display: none;
  fonst-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${breakpoint}) {
    display: inline-block;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.3rem;

  @media only screen and (min-width: ${breakpoint}) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`

export const Header = () =>
  <HeaderWrapper>
    <MenuWrapper>
      <ImageWrapper>
        <img src='src/icons/menu.png' alt='menu' />
      </ImageWrapper>
      <SelectedMenuItem>PROJECTS</SelectedMenuItem>
    </MenuWrapper>
    <TitleWrapper>
      <H1>MIKIYA KOBAYASHI</H1>
    </TitleWrapper>
    <MenuWrapper>
      <ImageWrapper>
        <img src='src/icons/search.png' alt='menu' />
      </ImageWrapper>
      <SelectedMenuItem>ALL</SelectedMenuItem>
    </MenuWrapper>
  </HeaderWrapper>
