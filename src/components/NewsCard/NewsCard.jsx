import React from "react";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const NewsCard = ({ NewsData }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
    published_date,
  } = NewsData;

  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-lg overflow-hidden my-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://i.ibb.co/7CQVJNm/default-user.png"}
            alt={author?.name}
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <p className="font-semibold">{author?.name || "Unknown Author"}</p>
            <p className="text-sm text-gray-500">
              {published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-green-500" />
        </div>
      </div>

      {/* Image */}
      <figure>
        <img src={image_url} alt={title} className="w-full h-60 object-cover" />
      </figure>

      {/* Body */}
      <div className="p-4">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-gray-600 my-2">
          {details.length > 150 ? details.slice(0, 150) + "..." : details}
          <span className="text-blue-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t text-gray-700">
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.floor(rating?.number || 0) }).map(
            (_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ),
          )}
          <span className="ml-2 font-semibold">{rating?.number || 0}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
