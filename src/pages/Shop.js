// IMPORTS
  //-Modules
  import React from 'react'
  import styled from 'styled-components'
   //-Imgs
   import wayfTshirt from '../imgs/wayf-tshirt.webp'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import { colors, fonts, mediaQueries } from '../project-styles/projectStyles'
// 

const ShopContainer = styled.div`
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
    @media (max-width: ${mediaQueries.tablet}) {
      width: 100%;
    }

    .title{
      font-size: 30px;
      font-weight: bold;
      font-family: ${fonts.text};
      margin-bottom: 40px;
      text-transform: capitalize;
      @media (max-width: ${mediaQueries.mobile}) {
        font-size: 19px;
      }
    }

    .text{
      width: 450px;
      font-family: ${fonts.text};
      margin-bottom: 40px;

      .quote{
        font-style: italic;
      }

      @media (max-width: ${mediaQueries.mobile}) {
        font-size: 14px;
      }
    }

    .imgContainer{
      .img{
        width: 380px;
        @media (max-width: ${mediaQueries.mobile}) {
          margin-top: 3vh;
          width: 80vw;
          height: 55vh;
        }
      }
    }

    .productDetails{
      width: 380px;
      margin-top: 20px;
    }

    .buyContainer{
      margin-top: 40px;
      width: 380px;

      .sizeContainer{
        width: 100%;
        display: flex;
        border: 1px solid ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        
          .sizeLabel{
            padding: 8px 12px;
            border-right: 1px solid ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
          }
    
          .sizeInput{
            width: 100%;
            padding: 8px 12px;
            margin-right: 8px;
            color: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
            background: transparent;
            outline: transparent;
            border: none;
            cursor: pointer;
          } 
      }

      .quantityContainer{
        width: 100%;
        display: flex;
        border: 1px solid ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        border-top: 0px;

        .quantityLabel{
          padding: 8px 12px;
          border-right: 1px solid ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        }

        .quantitiyAmount{
          width: 100%;
          padding: 8px 12px;
          border-right: 1px solid ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        }

        .quantitiyAdd{
          width: 48px;
          padding: 8px;
          border-right: 1px solid ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
          text-align: center;
          cursor: pointer;
        }

        .quantitiyRemove{
          padding: 8px;
          width: 48px;
          text-align: center;
          cursor: pointer;
        }


        
      }

      .remaining{
        margin-top: 12px;
        font-size: 12px;
        text-align: center;
        font-weight: bold;
      }

      .priceAmount{
        /* font-family: 'helvetica'; */
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        @media (max-width: ${mediaQueries.mobile}) {
          font-size: 13px;
        }
      }

      .shopButton{
        margin: 24px auto 0;
        width: 160px;
        padding: 12px;
        border-radius: 2px;
        background: ${ props => props.theme.mode === 'dark' ? colors.white :  colors.blue };
        color: ${ props => props.theme.mode === 'dark' ? colors.blue :  colors.white };
        text-align: center;
        font-weight: bold;
        cursor: pointer;
      }

    }
 
`



// MAIN COMPONENT
  const Shop = () => {

    return (
      <PageWrapper navTitleProp="Shop" >
        <ShopContainer>
          <div className="title">WAYF T-shirt</div>
          <div className="text">
            The Where Are You From t-shirt. <br/>
            <br/>
            <div className='quote'>
              "Where are you from?<br/>
              If you ask this question you are looking for an answer. Most often than not, you already know the answer that you want. If you already know the answer, what are you asking me for?"<br/>
            </div>
            <br/>
            - Anuar Khalifi.
          </div>

          <div className="imgContainer">
            <img src={wayfTshirt} alt='WAYF tshirt' className='img'/>
          </div>

          <div className="productDetails">
            Oversized t-shirt<br/>
            Loose fit<br/>
            100% Organic Open End Cotton<br/>
            240 GSM
          </div>

          <div className="buyContainer">

            <div className="sizeContainer">
              <label className="sizeLabel">Size</label>
              <select name="size" id="size" className="sizeInput">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="quantityContainer">
              <div className="quantityLabel">Quantity</div>
              <div className="quantitiyAmount">2</div>
              <div className="quantitiyAdd">+</div>
              <div className="quantitiyRemove">-</div>
            </div>

            <div className="remaining">2 left</div>

            <div className="priceAmount">50€</div>

            <div className="shopButton">PURCHASE</div>

          </div>


        </ShopContainer>
      </PageWrapper>
    )
  }
  export default Shop
// 
