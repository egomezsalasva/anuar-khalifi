// IMPORTS
  //-Modules
  import React, { useContext } from 'react'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import Piece from '../components/Piece'
  import CollectionPreloader from '../components/CollectionPreloader'
  import NextPageButton from '../components/NextPageButton'
  //-Contexts
  import { PiecesContext } from '../contexts/piecesContext'
// 


// MAIN COMPONENT
  const SelectedWorks = () => {

    const {piecesData} = useContext(PiecesContext)

    return (
      <PageWrapper navTitleProp="٣" >

        <CollectionPreloader numProp="٣" titleProp="Selected Works" yearProp="2020" arabYearProp="١٤٤٢" />

        {piecesData.selectedWorks.map( pieceItem => {
          return(
            <Piece
              key={pieceItem.name}
              imageProp={pieceItem.img}
              nameProp={pieceItem.name}
              measurementsProp={pieceItem.measurements}
              techniquesProp={pieceItem.techniques}
              pieceItemProp = {pieceItem}
            /> 
          )
        })}

        <NextPageButton buttonTextProp="٢ Forever Is A Current Event" linkProp="/forever-is-a-current-event" />

      </PageWrapper>
    )
  }
  export default SelectedWorks
// 
