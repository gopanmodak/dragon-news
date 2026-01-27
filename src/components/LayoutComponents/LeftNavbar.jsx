import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const LeftNavbar = () => {
const [categorie , setCategorie ]= useState([])

useEffect(()=>{
   fetch('https://openapi.programming-hero.com/api/news/categories')
   .then(result=>result.json())
   .then(data=>setCategorie(data.data.news_category))
},[])
  return (
    <div>
  
      <h2 className='font-semibold '>All Categories</h2>
          <div className='flex flex-col gap-2 mt-5'>
            {
                categorie.map((categorie ,category_id)=>
                <NavLink to={`/category/${categorie.category_id}`} className='btn btn-lg p-2' key={category_id}>{categorie.category_name}</NavLink>
                )
            }
          </div>

    </div>
  )
}

export default LeftNavbar