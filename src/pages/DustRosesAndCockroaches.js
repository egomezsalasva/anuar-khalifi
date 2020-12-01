// IMPORTS
  //-Modules
  import React, { useContext, useEffect } from 'react'
  import gsap from 'gsap'
  //-Components
  import PageWrapper from '../components/PageWrapper'
  import Piece from '../components/Piece'
  import CollectionPreloader from '../components/CollectionPreloader'
  //-Contexts
  import { PiecesContext } from '../contexts/piecesContext'
// 


// MAIN COMPONENT
  const DustRosesAndCockroaches = () => {

    const {piecesData} = useContext(PiecesContext)

    const infoTl = gsap.timeline({paused: true})
    
    useEffect(() => {
      infoTl.to(".infoAnim", {duration: 0.5, yPercent: -100, stagger: 0.125, ease: "Power1.easeInOut"})
    })

    return (
      <PageWrapper navTitleProp="٢">

        <CollectionPreloader numProp="٢" titleProp="Dust Roses And Cockroaches" yearProp="2019" arabYearProp="١٤٤١" />

        {piecesData.dustRosesAndCockroaches.map( pieceItem => {
          return(
            <Piece
              key={pieceItem.name}
              imageProp={pieceItem.img}
              nameProp={pieceItem.name}
              measurementsProp={pieceItem.measurements}
              techniquesProp={pieceItem.techniques}
              onMouseEnterProp={() => infoTl.play()}
              onMouseLeaveProp={() => infoTl.reverse()}
            /> 
          )
        })}

      </PageWrapper>
    )
  }
  export default DustRosesAndCockroaches
// 
