import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, mediaQueries } from '../project-styles/projectStyles'


const ButtonContainer = styled.div`
    width: 100%;
    height: 180px;
    background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
    margin-top: 130px;
    @media (max-width: ${mediaQueries.mobile}) {
        margin-top: 0px;
        height: 120px;
    }

    .link{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text{
        font-weight: bold;
        font-size: 34px;
        color: ${ props => props.theme.mode === 'dark' ? colors.black :  colors.white };
        text-align: center;
        @media (max-width: ${mediaQueries.mobile}) {
            font-size: 21px;
        }

        span{
            font-size: 20px;
            margin-right: 10px;
            @media (max-width: ${mediaQueries.mobile}) {
                font-size: 13px;
                margin-right: 0px;
                display: block;
            }
        }
    }
`


const NextPageButton = ({buttonTextProp, linkProp}) => {
  
  return (
        <ButtonContainer>
            <Link className="link" to={linkProp}>
                <div className="text"><span>next: </span>{buttonTextProp}</div>
            </Link>
        </ButtonContainer>
  )
}
export default NextPageButton





