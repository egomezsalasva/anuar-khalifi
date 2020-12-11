// IMPORTS
  //-Modules
  import React, { useContext } from 'react'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import CollectionPreloader from '../components/CollectionPreloader'
  import Piece from '../components/Piece'
  import TriptychPiece from '../components/TriptychPiece'
  import InstallationSectionForeverIsACurrentEvent from '../components/InstallationSectionForeverIsACurrentEvent'
  import NextPageButton from '../components/NextPageButton'
  //-Contexts
  import { PiecesContext } from '../contexts/piecesContext'
// 


// MAIN COMPONENT
  const ForeverIsACurrentEvent = () => {

    const {piecesData} = useContext(PiecesContext)

    return (
      <PageWrapper navTitleProp="٢" >

        <CollectionPreloader numProp="٢" titleProp="Forever Is A Current Event" yearProp="2019" arabYearProp="١٤٤١" />

        {piecesData.foreverIsACurrentEventPt1.map( pieceItem => {
          return(
            <Piece
              key={pieceItem.name}
              imageProp={pieceItem.img}
              nameProp={pieceItem.name}
              measurementsProp={pieceItem.measurements}
              techniquesProp={pieceItem.techniques}
            /> 
          )
        })}

        <TriptychPiece />

        {piecesData.foreverIsACurrentEventPt2.map( pieceItem => {
          return(
            <Piece
              key={pieceItem.name}
              imageProp={pieceItem.img}
              nameProp={pieceItem.name}
              measurementsProp={pieceItem.measurements}
              techniquesProp={pieceItem.techniques}
            /> 
          )
        })}

        <InstallationSectionForeverIsACurrentEvent />

        <NextPageButton buttonTextProp="١ Dust Roses And Cockroaches" linkProp="/dust-roses-and-cockroaches" />

      </PageWrapper>
    )
  }
  export default ForeverIsACurrentEvent
// 
