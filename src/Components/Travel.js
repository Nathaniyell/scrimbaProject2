import React from 'react'
import Data from './Data'
import Card from './Card'

const NewCards = Data.map((card)=>{
   return(
    <Card 
    key={card.id}
    image={card.imageUrl}
    title={card.title}
    place={card.location}
    details={card.description}
    date={`${card.startDate} - ${card.endDate}`}
    link={card.googleMapsUrl}
/>

   )
})

const Travel = () => {
  return (
    <div>
        {NewCards}
    </div>
  )
}

export default Travel