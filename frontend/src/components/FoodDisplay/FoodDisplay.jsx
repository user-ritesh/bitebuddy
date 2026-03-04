import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list && food_list.map((item) => {
          if (category === "All" || category === item.category) {
            // Checking both Spring Boot 'id' and Node '_id' for compatibility
            let itemId = item.id || item._id; 
            
            return <FoodItem 
                      key={itemId} 
                      id={itemId}
                      image={item.image} 
                      name={item.name} 
                      desc={item.description} 
                      price={item.price} 
                   />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay;