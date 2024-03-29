// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //import { LazyLoadImage } from 'react-lazy-load-image-component'
  import 'react-lazy-load-image-component/src/effects/blur.css'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import BioExhibition from '../components/BioExhibitions'
  import BioYear from '../components/BioYear'
  //-Imgs
  import bioAnuar from '../imgs/bioAnuarMarroi.jpg'
  //-Styles
  import { colors, mediaQueries } from '../project-styles/projectStyles'
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
        position: fixed;
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        @media (max-width: ${mediaQueries.mobile}) {
          position: static;
          //margin-bottom: 4vh;
          margin-bottom: 16vh;
        }

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
          margin-top: 4vh;
          width: 100%;
          flex-direction: column;
      }


      .textWrapper{
        width: 70%;
        height: 480px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        @media (max-width: ${mediaQueries.mobile}) {
          height: 100%;
          width: 75%;
          padding: 0 4vw;
        }

          .text{
            color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
            width: 450px;
            @media (max-width: ${mediaQueries.mobile}) {
              width: auto;
              text-align: center;
              font-size: 14px;
              margin-bottom: 30px;
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
                  <div className="credits">© Jordi Esgleas Marroi</div>
                </div>
            </div>
            <div className="textContainer">
                <div className="textWrapper">
                  <div className="text">
                    Born in 1977 in Lloret de Mar, Spain
                    <br/>
                    Lives and works between Tangier, MA and Barcelona, ES
                  </div>


                  <BioExhibition title="Current Exhibition">
                    <BioYear year="15th July – 24th September 2023">
                      <a href="https://www.intheheartofanothercountry.com/en#:~:text=In%20the%20Heart%20of%20Another%20Country%20explores%20human%20experience%20through,to%20the%20Gulf%20of%20Oman" target="_blank" without rel="noopener noreferrer">
                        <li> In The Heart Of Another Country, Sharjah Art Foundation, Sharjah, UAE</li>
                      </a>
                    </BioYear>
                  </BioExhibition>

                  <BioExhibition title="Solo Exhibitions">
                    <BioYear year="2023">
                      <li>Mirror Ball, The Third Line, Dubai, UAE</li>
                    </BioYear>
                    <BioYear year="2021">
                      <li>Palimpsests, The Third Line, Dubai, UAE</li>
                    </BioYear>
                    <BioYear year="2019">
                      <li>Forever Is A Current Event, The Third Line, Dubai, UAE</li>
                    </BioYear>
                    <BioYear year="2018">
                      <li>Dust, Roses & Cockroaches, Galerie Shart, Casablanca, MA</li>
                    </BioYear>
                    <BioYear year="2016">
                      <li>El niño que le dolía el cuello de tanto mirar el cielo, Plom Gallery, Barcelona, ES</li>
                    </BioYear>
                    <BioYear year="2015">
                      <li>Désorienté, BCN The Mothership, Barcelona, ES</li>
                    </BioYear>
                    <BioYear year="2014">
                      <li>Désorienté, Yakin and Boaz Gallery, Casablanca, MA</li>
                    </BioYear>
                    <BioYear year="2012">
                      <li>Tourist Go Home, Galerie Kandisha, Paris, FR</li>
                    </BioYear>
                    <BioYear year="2011">
                      <li>Boys don’t cry, Artingis, Tanger, MA</li>
                      <li>Fast Food, Les Insolites, Tanger, MA</li>
                    </BioYear>
                  </BioExhibition>

                  <BioExhibition title="Group Exhibitions">
                    <BioYear year="2022">
                      <li>In The Heart Of Another Country, Deichtorhallen Hamburg, Hamburg, DE</li>
                      <li>Perpetual Inventory - Volume 1: An Exercise in Looking, The Third Line, Dubai, UAE</li>
                      <li>A serious game, Museum of African Contemporary Art Al Maaden, Marrakesh, MA</li>
                    </BioYear>
                    <BioYear year="2021">
                      <li>The Third Line at Cromwell Place, Gallery 5, Cromwell Place, London, UK</li>
                      <li>Ce qui s'oublie et ce qui reste, Musée national de l’histoire de l’immigration, Paris, FR</li>
                    </BioYear>
                    <BioYear year="2020">
                      <li>Personal Mythologies, Galerie Julien Cadet, Paris, FR</li>
                    </BioYear>
                    <BioYear year="2017">
                      <li>Héros, Anti-héros, Personnages Extraordinaires, Comptoir des Mines Galerie, Marrakech, MA</li>
                    </BioYear>
                    <BioYear year="2015">
                      <li>Les nouvelles créations artistiques, Bank Al-Maghrib, Rabat, MA</li>
                    </BioYear>
                    <BioYear year="2014">
                      <li>Group show, Galerie Shart, Casablanca, MA</li>
                    </BioYear>
                    <BioYear year="2012">
                      <li>A new hope, Mitte Artspace Barcelona, Barcelona, ES</li>
                      <li>Blast, curated by Mehdi Hadj Khalifa, Mastermind, GVCC, Casablanca, MA</li>
                    </BioYear>
                  </BioExhibition>

                  <BioExhibition title="ART FAIRS AND BIENNALES">
                    <BioYear year="2022">
                      <li>1-54 Contemporary African Art Fair, Paris, FR</li>
                    </BioYear>
                    <BioYear year="2020">
                      <li>Frieze London, The Third Line, London, UK</li>
                    </BioYear>
                    <BioYear year="2019">
                      <li>Art Cologne, Nosbaum Reding, Cologne, DE</li>
                      <li>Art Brussels, Nosbaum Reding, Brussels, BE</li>
                      <li>Art Geneve, Nosbaum Reding, Geneva, CH</li>
                    </BioYear>
                    <BioYear year="2012">
                      <li>Now, curated by Mehdi Hadj Khalifa, Arts in Marrakech Biennale, Marrakech, MA</li>
                    </BioYear>
                  </BioExhibition>
                  <BioExhibition title="COLLECTIONS">
                   <BioYear year="">
                      <li>MACAAL, Musée d'Art contemporain africain Al-Maaden, Marrakech, MA</li>
                    </BioYear>
                    <BioYear year="">
                      <li>Sharjah Art Foundation, Sharjah, UAE</li>
                    </BioYear>
                    <BioYear year="">
                      <li>Fondation H, Atananarivo, MDG</li>
                    </BioYear>
                  </BioExhibition>
                </div>


            </div>
          </BioContainer>

      </PageWrapper>
    )
  }
  export default Bio
// 
