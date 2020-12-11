import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, fonts } from '../project-styles/projectStyles'



// STYLES
    const Container = styled.div`
        position: absolute;
        width: calc(100vw - 180px);
        left: 180px;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const FourOFourContentWrapper = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .text{
            color: ${colors.white};
            font-family: ${fonts.text};
            font-size: 20px;
            text-align: center;
            margin-bottom: 5px;
        }
        .link{
            color: ${colors.white};
            font-family: ${fonts.text};
            font-size: 20px;
            text-align: center;
            margin-bottom: 5px;
            font-weight: bold;
        }
    `
// 



// MAIN COMPONENT
    const FourOFour = () => {
    return (
        <Container>
            <FourOFourContentWrapper>
                <div className="text">404 Page Not Found</div>
                <Link to="/selected-works-2020" className="link">Back To Home</Link>
            </FourOFourContentWrapper>    
        </Container>
    )
    }
    export default FourOFour
// 
