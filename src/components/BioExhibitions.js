import React from 'react'
import styled from 'styled-components'
import { colors, mediaQueries } from '../project-styles/projectStyles'


const ExhibitionWrapper = styled.div`
    color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
    margin-top: 20px;
    width: 450px;
    &:last-of-type{
        padding-bottom: 100px;
    }
    @media (max-width: ${mediaQueries.mobile}) {
        width: auto;
        &:last-of-type{
            padding-bottom: 4vw;
        }
    }

    .title{
        text-transform: uppercase;
        text-decoration: underline;
        line-height: 26px;
        margin-bottom: 10px;
    }
`


const BioExhibition = ({title, children}) => {
  
  return (
    <>
        <ExhibitionWrapper>
            <div className="title">{title}</div>
            {children}
        </ExhibitionWrapper>
    </>
  )
}
export default BioExhibition





