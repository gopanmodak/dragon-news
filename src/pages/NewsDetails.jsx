import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

import RightNavbar from '../components/LayoutComponents/RightNavbar';

const NewsDetails = () => {
  const news = useLoaderData();
  const singleNews = news.data[0];

  return (
    <div className="w-7xl mx-auto">
      <Navbar />

      <div className="grid grid-cols-12 gap-5 mt-5">

        {/* Main content */}

        <div className="card bg-base-100 shadow-sm col-span-12 md:col-span-9 ">
          <figure>
            <img src={singleNews.image_url} alt={singleNews.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{singleNews.title}</h2>
            <p>{singleNews.details}</p>
            
            <div className=" mt-2 ">
              <Link to="/category/01" className="btn btn-primary">All News in this Catagory</Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        
        <div className="flex flex-col col-span-12 md:col-span-3 gap-5">
          <RightNavbar />
        
        </div>

      </div>
    </div>
  );
};

export default NewsDetails;
