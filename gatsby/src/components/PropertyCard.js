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
    <div className="overflow-hidden bg-white border rounded-lg">
      <img src={imageUrl} alt={imageAlt} />
      <div className="p-6">
        <div className="text-xs font-semibold tracking-wide text-gray-600 uppercase">{`${beds} beds • ${baths} baths`}</div>
        <h4 className="text-lg font-semibold leading-tight truncate">
          {title}
        </h4>
        <div className="mt-1">
          {formattedPrice} <span className="text-sm text-gray-600">/ week</span>
        </div>
        <div className="mt-4">
          <span className="font-semibold text-teal-600">{`${rating}/5 stars `}</span>
          <span className="text-sm text-gray-600">{`(based on ${reviewCount} reviews)`}</span>
        </div>
      </div>
    </div>
  );
};
