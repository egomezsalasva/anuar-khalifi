// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
  //-Assets
  import { colors } from '../project-styles/projectStyles'
  import installationView01Img from '../imgs/InstallationView01.png'
  import installationView02Img from '../imgs/InstallationView02.png'
  import installationView03Img from '../imgs/InstallationView03.png'
  import installationView04Img from '../imgs/InstallationView04.png'
// 


// STYLES

    const Title = styled.div`
        margin-top: 200px;
        font-size: 30px;
        color: ${colors.white};
        text-align: center;
        font-weight: bold;
    `

    // const pieceHeight = "77.5vh" //620px
    const pieceHeight = "75vh" //600px

    const PieceContainer = styled.div`
        position: relative;
        width: 100%;
        height: calc(100vh - 100px);
        /* min-height: 700px; */
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const PieceImg = styled.img`
        position: relative;
        height: ${pieceHeight};
        max-width: 90%;
        object-fit: contain;
    `
//


// MAIN COMPONENT
  const InstallationSectionForeverIsACurrentEvent = () => {



    
    return (
            
        <>    
            <Title>Installation Views</Title>

            <PieceContainer>
                <PieceImg src={installationView02Img} alt="Installation View 02" />
            </PieceContainer>

            <PieceContainer>
                <PieceImg src={installationView01Img} alt="Installation View 01" />
            </PieceContainer>

            <PieceContainer>
                <PieceImg src={installationView03Img} alt="Installation View 03" />
            </PieceContainer>

            <PieceContainer>
                <PieceImg src={installationView04Img} alt="Installation View 04" />
            </PieceContainer>

        </>
    )
  }
  export default InstallationSectionForeverIsACurrentEvent
// 
