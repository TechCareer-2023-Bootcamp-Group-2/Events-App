import React from 'react'
import EventCard from './EventCard'

const Events = ({filtered}) => {
  return (
    <div className='flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:w-full max-w-lg:px-6'>
        {filtered.map((item) => (
            <EventCard item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Events