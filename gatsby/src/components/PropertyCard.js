import React from "react";

export const PropertyCard = ({
  imageUrl,
  imageAlt,
  beds,
  baths,
  title,
  priceInCents,
  formattedPrice,
  reviewCount,
  rating
}) => {
  return (
    <div>
      <div className="relative overflow-hidden bg-red-500 rounded-lg shadow-md pb-5/6">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute top-0 object-cover w-full h-full"
        />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">
              New
            </span>
            <div className="ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">{`${beds} beds • ${baths} baths`}</div>
          </div>
          <h4 className="mt-1 text-lg font-semibold leading-tight truncate">
            {title}
          </h4>
          <div className="mt-1">
            {formattedPrice}{" "}
            <span className="text-sm text-gray-600">/ week</span>
          </div>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className={`w-4 h-4 fill-current ${
                  i < rating ? "text-teal-500" : "text-gray-400"
                }`}
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">{`${reviewCount} reviews`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
