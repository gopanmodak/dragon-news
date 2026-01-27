import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard/NewsCard'

const CategoryNews = () => {
  const  NewsData  =useLoaderData() || []
  console.log(NewsData)
 
  return (
    <div>
  <h2 className='font-semibold'>Dragon News Home</h2>
       

       <div>
        {NewsData.data.map((NewsData,index)=> <NewsCard key={index} NewsData={NewsData}/>)}
       </div>
    </div>
  )
}

export default CategoryNews