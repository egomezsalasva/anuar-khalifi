import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../project-styles/projectStyles'


const ButtonContainer = styled.div`
    width: 100%;
    height: 180px;
    background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
    margin-top: 130px;

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

        span{
            font-size: 20px;
            margin-right: 10px;
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





