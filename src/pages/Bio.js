// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import { colors, mediaQueries } from '../project-styles/projectStyles'
  //-Imgs
  import bioAnuar from '../imgs/bioAnuar.jpg'
// 

// STYLES
  const imgContainerWidth = "40%"
  const BioContainer = styled.div`
    width: calc(100vw - 180px);
    height: calc(100vh - 100px);
    margin-top: 100px;
    display: flex;
    align-items: center;
    @media (max-width: ${mediaQueries.tablet}) {
      width: 100%;
    }
    @media (max-width: ${mediaQueries.mobile}) {
      margin-top: 80px;
      height: calc(100vh - 80px);
      flex-direction: column;
    }

    .imgContainer{
      width: ${imgContainerWidth};
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media (max-width: ${mediaQueries.mobile}) {
        justify-content: center;
      }
      
      .imgWrapper{
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;

        .img{
          width: 380px;
          height: 480px;
          background: url(${bioAnuar});
          background-repeat: no-repeat;
          background-size: cover;

          @media (max-width: ${mediaQueries.mobile}) {
            margin-top: 3vh;
            width: 80vw;
            height: 55vh;
          }
        }
        .credits{
          margin-top: 3px;
          font-size: 9px;
          color: ${colors.white};
          opacity: 0.33;
          @media (max-width: ${mediaQueries.mobile}) {
            font-size: 7px;
          }
        }
      }
    }

    .textContainer{
      width: calc(100% - ${imgContainerWidth});
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: ${mediaQueries.mobile}) {
          width: 100%;
      }


      .textWrapper{
        width: 70%;
        height: 480px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        @media (max-width: ${mediaQueries.mobile}) {
          height: auto;
          width: 75%;
          padding: 0 4vw;
        }

          .text{
            /* font-size: 20px; */
            color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
            @media (max-width: ${mediaQueries.mobile}) {
              font-size: 14px;
            }
          }
      }
    }
  `
//


// MAIN COMPONENT
  const Bio = () => {

    return (
      <PageWrapper navTitleProp="Bio" >

          <BioContainer>
            <div className="imgContainer">
                <div className="imgWrapper">
                  <div className="img" />
                  <div className="credits">© Dani Pujanta</div>
                </div>
            </div>
            <div className="textContainer">
                <div className="textWrapper">
                  <div className="text">
                    Born in 1977 in Lloret de Mar, Spain
                    <br/>
                    Lives and works between Tangier, MA and Barcelona, ES
                  </div>
                </div>
            </div>
          </BioContainer>

      </PageWrapper>
    )
  }
  export default Bio
// 
