// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import { colors, mediaQueries } from '../project-styles/projectStyles'
  //-Imgs
  import bioAnuar from '../imgs/bioAnuar.jpg'
  import bioAnuarHover from '../imgs/bioAnuarHover.jpg'
// 

// STYLES
  const imgContainerWidth = "40%"
  const BioContainer = styled.div`
    width: calc(100vw - 180px);
    height: calc(100vh - 100px);
    margin-top: 100px;
    /* background: yellow; */
    display: flex;
    align-items: center;
    @media (max-width: ${mediaQueries.tablet}) {
      width: 100%;
    }

    .imgContainer{
      width: ${imgContainerWidth};
      height: 100%;
      /* background: red; */
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
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

          /* &:hover{
            background: url(${bioAnuarHover});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: bottom;
          } */
        }
        .credits{
          margin-top: 3px;
          font-size: 9px;
          color: ${colors.white};
        }
      }
    }

    .textContainer{
      width: calc(100% - ${imgContainerWidth});
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .textWrapper{
        width: 70%;
        height: 480px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

          .text{
            /* font-size: 20px; */
            color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
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
