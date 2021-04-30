import React from 'react'
import styled from 'styled-components'


const StyleContainer = styled.div`
    .year{
        line-height: 26px;
    }

    ul{
        margin-bottom: 20px;
        li{
            transform: translateX(23px);
            line-height: 20px;
            list-style-type: '—   ';
        }
    }
`


const BioYear = ({ year, children}) => {
  
  return (
    <>
        <StyleContainer>
            <div className="year">{year}</div>
            <ul>
                {children}
            </ul>
        </StyleContainer>
    </>
  )
}
export default BioYear





