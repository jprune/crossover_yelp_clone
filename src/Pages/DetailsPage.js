import React from 'react';
import { useState, useEffect } from 'react'
import RestaurantDetails from './RestaurantDetails.css'

const DetailsPage = () => {
  const [restaurant, setRestaurant] = useState([])
  
  useEffect(() => {
    async function getData() {  
      try {
        const response = await fetch('https://mini-yelp-clone-backend.herokuapp.com/restaurants')
        console.log(response)
        const data = await response.json()
        setRestaurant(data)
        console.log(data)
       
      } catch (error) {
        console.log('Error: ', error.message)
      }
    }
    getData();
  },[])



  return(
<div>
    <div className="hero">
        <img src="" alt="" />
        <div className="heroDetails wrapper">
            <h1>restaurantName</h1>
            <div>Rating stars</div>
            <div>category</div>
        </div>
    </div>
    <div className="wrapper">
        <div className="restaurantDetails">
            <div className="location">
                <div className="address">
                    <h2>Location</h2>
                    <p>street<br />city</p>
                </div>
                <div className="map"></div>
            </div>
            <div>
                <h2>Opening hours</h2>
                <table className="openingHours">
                    <tbody>
                        <tr>
                            <th>day</th>
                            <td>openHours</td>
                        </tr>
                        <tr>
                            <th>Tuesday</th>
                            <td>Closed</td>
                        </tr>
                        <tr>
                            <th>Wednesday</th>
                            <td>12:00 PM - 11:00 PM</td>
                        </tr>
                        <tr>
                            <th>Thursday</th>
                            <td>12:00 PM - 11:00 PM</td>
                        </tr>
                        <tr>
                            <th>Friday</th>
                            <td>12:00 PM - 11:00 PM</td>
                        </tr>
                        <tr>
                            <th>Saturday</th>
                            <td>12:00 PM - 11:00 PM</td>
                        </tr>
                        <tr>
                            <th>Sunday</th>
                            <td>12:00 PM - 11:00 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tags">
                <h2>Related tags</h2>
                <div>tag1</div>
            </div>
        </div>
    </div>
</div>
)
};

export default DetailsPage;
