// IMPORTS
  //-Modules
  import React, { useContext } from 'react'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import Piece from '../components/Piece'
  import CollectionPreloader from '../components/CollectionPreloader'
  // import NextPageButton from '../components/NextPageButton'
  //-Contexts
  import { PiecesContext } from '../contexts/piecesContext'
// 


// MAIN COMPONENT
  const DustRosesAndCockroaches = () => {

    const {piecesData} = useContext(PiecesContext)

    return (
      <PageWrapper navTitleProp="١">

        <CollectionPreloader numProp="١" titleProp="Dust Roses And Cockroaches" yearProp="2018" arabYearProp="١٤٤٠" />

        {piecesData.dustRosesAndCockroaches.map( pieceItem => {
          return(
            <Piece
              key={pieceItem.name}
              imageProp={pieceItem.img}
              imageMobileProp={pieceItem.imgMobile}
              nameProp={pieceItem.name}
              measurementsProp={pieceItem.measurements}
              techniquesProp={pieceItem.techniques}
            /> 
          )
        })}

        {/* <NextPageButton buttonTextProp="Contact" linkProp="/contact" /> */}

      </PageWrapper>
    )
  }
  export default DustRosesAndCockroaches
// 
