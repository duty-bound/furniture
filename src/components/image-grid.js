import React from 'react'
import styled from '@emotion/styled'

const images = ['armchairs.jpg', 'back-chair.jpg', 'bamboo-chair.jpg', 'bed.jpg', 'benches.jpg', 'chair.jpg', 'console.jpg', 'crate.jpg', 'cushion-armchair.jpg', 'dining-chairs.jpg', 'donut.jpg', 'earphone-mirror2.jpg', 'earphone-mirror.jpg', 'images', 'kitchen.jpg', 'mesh-containers.jpg', 'portable-mini-table.jpg', 'scooter.jpg', 'sea-saw.jpg', 'sofa.jpg', 'speaker-shelf.jpg', 'suspended-cone.jpg', 'table.jpg', 'tables.jpg', 'trays.jpg']

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media only screen and (min-width: 620px) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ImageGrid = () =>
  <Grid>
    {images.map(image => <Img key={image} src={`src/images/${image}`} />)}
  </Grid>
