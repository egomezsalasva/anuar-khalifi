// IMPORTS
  //-Modules
  import React from 'react'
  import { useState, useEffect } from 'react'
  import styled from 'styled-components'
  import { loadStripe } from '@stripe/stripe-js'
   //-Imgs
   import wayfTshirt from '../imgs/wayf-tshirt.webp'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import { colors, fonts, mediaQueries } from '../project-styles/projectStyles'
// 

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_PK)


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
        margin-top: 20px;
        font-size: 20px;
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
        width: 80vw;
        font-size: 14px;
      }
    }

    .imgContainer{
      .img{
        width: 380px;
        @media (max-width: ${mediaQueries.mobile}) {
          margin-top: 3vh;
          width: 80vw;
          /* height: 55vh; */
        }
      }
    }

    .productDetails{
      width: 380px;
      margin-top: 20px;
      @media (max-width: ${mediaQueries.mobile}) {
        width: 80vw;
        font-size: 14px;
      }
    }

    .buyContainer{
      margin-top: 40px;
      width: 380px;
      @media (max-width: ${mediaQueries.mobile}) {
        width: 80vw;
      }

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
          @media (max-width: ${mediaQueries.mobile}) {
            width: 60px;
          }
        }
        

        .quantitiyRemove{
          padding: 8px;
          width: 48px;
          text-align: center;
          cursor: pointer;
          @media (max-width: ${mediaQueries.mobile}) {
            width: 60px;
          }
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

    const [product, setProduct] = useState({
      id: 1,
      name: "WAYF t-shirt",
      unit: "S",
      price: 50,
      stripePrice: 'price_1KxoftLGiq1Q4XadrBfFFEYC',
      quantity: 1,
    })
    const [ items, setItems ] = useState([])

    useEffect(() => {
      setItems([{
        price: product.stripePrice,
        quantity: product.quantity
      }])

    }, [product])

    const checkUnit = (e) => {
      if (e.target.value === "S"){
        setProduct({...product, id: 1, price: 50, unit: "S", stripePrice:'price_1KxoftLGiq1Q4XadrBfFFEYC'})
      }
      if (e.target.value === "M"){
        setProduct({...product, id: 2, price: 50, unit: "M",  stripePrice:'price_1KxofpLGiq1Q4XadF4lMUTCt'})
      }
      if (e.target.value === "L"){
        setProduct({...product, id: 3, price: 50, unit: "L",  stripePrice:'price_1KxofgLGiq1Q4Xad86Qi7ZCI'})
      }
      if (e.target.value === "XL"){
        setProduct({...product, id: 4,  price: 50, unit: "XL", stripePrice:'price_1KxofaLGiq1Q4XadLco1ZF8G'})
      } 
    }


  let [ maxCounter, setMaxCounter ] = useState(10 - 1)
  const addProduct = () => {
      if(maxCounter > 0){
        setProduct({...product, quantity: product.quantity + 1})
        setMaxCounter(maxCounter - 1)
      } 
  }

  const removeProduct = () => {
      if(product.quantity > 1){
        setProduct({...product, quantity: product.quantity - 1})
        setMaxCounter(maxCounter + 1)
      }
  }

  const [stripeLoading, setStripeLoading] = useState(false)
  const payStripe = async () => {

		setStripeLoading(true)

		const stripe = await stripePromise
	
		const { error } = await stripe.redirectToCheckout({
			lineItems: items,
			mode: "payment",
      shippingAddressCollection: {
				allowedCountries: ['AD', 'AT', 'BE', 'BG', 'HR', 'CZ', 'FI', 'FR', 'DE', 'GI', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MD', 'MC', 'MA', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'GB' ]
			},
			cancelUrl: `${window.location.origin}/shop`,
			successUrl: `${window.location.origin}/`
		})

		if (error) {
			setStripeLoading(false)
		}
	}

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
              <select name="size" id="size" className="sizeInput" onChange={ e => checkUnit(e) }>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="quantityContainer">
              <div className="quantityLabel">Quantity</div>
              <div className="quantitiyAmount">{product.quantity}</div>
              <div className="quantitiyAdd" onClick={addProduct}>+</div>
              <div className="quantitiyRemove" onClick={removeProduct}>-</div>
            </div>

            { maxCounter === 0 &&
              <div className="remaining">Maximum purchase of 10 items</div>
            }

            <div className="priceAmount">{product.price * product.quantity}€</div>

            <div className="shopButton" onClick={payStripe}>{!stripeLoading ? "PURCHASE" : "LOADING..."}</div>

          </div>


        </ShopContainer>
      </PageWrapper>
    )
  }
  export default Shop
// 
