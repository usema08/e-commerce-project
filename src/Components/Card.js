
import { BsFillBagHeartFill } from 'react-icons/bs';
import React from 'react'

function Card({img, title, star, reviews, prevPrice, newPrice}) {
  return (
    <div>
        <section className='card'>
            <img 
            src={img}
            alt='shoes'
            className='card-img'></img>
            <div className='card-details'>
                <h3 className='card-title'>{title}</h3>
                <section className='card-reviews'>
                    {star}{star}{star}{star}
                    <span className='total-reviews'>{reviews}</span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <del>{prevPrice}</del>  {newPrice}
                    </div>
                    <div className='bag'>
                    <BsFillBagHeartFill className='bag-icon' />
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}

export default Card;