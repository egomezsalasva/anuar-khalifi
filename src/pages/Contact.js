// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Components
  import PageWrapper from '../components/PageWrapper'
import { colors, fonts, mediaQueries } from '../project-styles/projectStyles'
// 

const ContactContainer = styled.div`
    width: calc(100vw - 180px);
    height: calc(100vh - 100px);
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: ${mediaQueries.tablet}) {
      width: 100%;
    }

    .email{
      font-family: ${fonts.text};
      color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
      font-size: 20px;
      transform: translateY(-30px);
      margin-bottom: 10px;
    }
    .instagram{
      font-family: ${fonts.text};
      color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
      font-size: 20px;
      transform: translateY(-30px);
    }
 
`

// MAIN COMPONENT
  const Contact = () => {

    return (
      <PageWrapper navTitleProp="Contact" >
        <ContactContainer>
          <div className="email">anuarkhalifi@gmail.com</div>
          <a className="instagram" href="https://www.instagram.com/anuarkhalifi/" target="_blank" rel="noopener noreferrer">@anuarkhalifi</a>
        </ContactContainer>
      </PageWrapper>
    )
  }
  export default Contact
// 
