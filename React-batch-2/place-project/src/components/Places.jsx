import React from 'react'
import Place from './Place'
import { useDispatch, useSelector } from 'react-redux'
import { markAsVisited, unmarkAsVisited } from '../redux/placesSlice';


function Places() {
  const places = useSelector((state) => state.places.places );
  const dispatch = useDispatch();

  const toggleVisitedStatus = (id, visited) => {
    console.log(id, visited)
    if(visited){
      dispatch(unmarkAsVisited(id))
    }else{
      dispatch(markAsVisited(id))
    }
  }
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        places.map((placeItem, index) => {
          return (
            <React.Fragment key={index}>
              <Place placeItem={placeItem} toggleVisitedStatus={toggleVisitedStatus}></Place>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Places