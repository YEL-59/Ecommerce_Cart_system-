import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt'

const Home = () => {
    const tshirts=useLoaderData()
  return (
    <div>Home: {tshirts.length}
    <div className='flex gap'>
        <div>
        {
        tshirts.map(tshirt=><Tshirt 
        key={tshirt.id}
        tshirt={tshirt}
        ></Tshirt>)
        }

        </div>
        <div className='cart '>
dfdf
        </div>
    </div>
    
    
    
    
    </div>
  )
}

export default Home