import React from 'react'
import ComputerCard from './ComputerCard'

const ComputerCardList = (props) => {
  let allComputer = props.products
  let computerCardList = []
  for (let i = 0; i < allComputer.length; i += 3) {
    let computerCards = allComputer.slice(i, Math.min(i + 3, allComputer.length))
      .map(p => (
        <ComputerCard
          key={p._id}
          id={p._id}
          title={p.title}
          image={p.image}
          description={p.description}
          />))

    let cardDeck = <div key={i} className='card-deck space-top'>{computerCards}</div>
    computerCardList.push(cardDeck)
  }

  return (
    <div className='row'>
      {computerCardList}
    </div>
  )
}

export default ComputerCardList
