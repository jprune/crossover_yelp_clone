import React, { useState } from 'react'
import{Rating} from 'react-simple-star-rating'

export default function Reviews({ rating }) {
 
  const handleRating = (rate) => {
    setRating(rate)

  }
  return (
    <div className='flex w-full justify-center flex-wrap'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
      />
      {rating}
    </div>
  )
}