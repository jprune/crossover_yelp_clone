import React from 'react';
import { useState, useEffect, useContext } from 'react'
import RestaurantDetails from './RestaurantDetails.css'
import {useParams} from "react-router-dom";
import { YelpContext } from '../Context';
import { OurMap, Reviews } from "../components/index"

const DetailsPage = ({ tileContent }) => {
//   const {restaurantDetail} = useContext(YelpContext)

    let { id } = useParams();
    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        async function getData() {  
            try {
                const response = await fetch(`https://mini-yelp-clone-backend.herokuapp.com/restaurants/${id}`)
                const data = await response.json()
                setRestaurant(data)
                console.log(data)
            } catch (error) {
                console.log('Error: ', error.message)
            }
        }
        getData();
    },[])
console.log(restaurant)
  return(
<div>
    <div className="hero">
        <img src={restaurant.image} alt="" />
        <div className="heroDetails wrapper">
            <h1>{restaurant.name}</h1>
            <div>Rating: {restaurant.rating}</div>
            <div>category</div>
        </div>
    </div>
    <div className="wrapper">
        <div className="restaurantDetails">
            <section className="location">
                <div className="address">
                    <h2>Contact</h2>
                    <p>{restaurant.street} {restaurant.streetnumber}<br />{restaurant.city}</p>
                    <p>Phone: {restaurant.phonenumber}</p>
                </div>
                <div className="map">
                    <OurMap snack={restaurant}/>
                </div>
            </section>
            <section>
                <h2>Opening hours</h2>
                <table className="openingHours">
                    <tbody>
                        <tr>
                            <th>Monday</th>
                            <td>Closed</td>
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
            </section>
            <section className="tags">
                <h2>Related tags</h2>
                {restaurant?.tags?.map((item, key)=><span className="tag" key={key}>{item}</span>)}
            </section>
        </div>
    </div>
</div>
)
};

export default DetailsPage;
