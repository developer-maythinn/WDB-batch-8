import React from 'react'
import Place from './Place'
import { useSelector } from 'react-redux'


function Places() {
  const places = useSelector((state) => state.places )

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        places.map((placeItem, index) => {
          return (
            <React.Fragment key={index}>
              <Place placeItem={placeItem}></Place>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Places