import React from "react";
import { NavBar } from "../components/NavBar";
import { PropertyCard } from "../components/PropertyCard";
import "../css/style.css";

function IndexPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen p-6 antialiased text-gray-900 bg-gray-200">
        <div className="flex flex-wrap justify-center">
          <div className="w-full mt-4 ml-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <PropertyCard
              imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              imageAlt="Rear view of modern home with pool"
              beds={3}
              baths={2}
              title="Modern home in city center"
              priceInCents={190000}
              formattedPrice="$1,900.00"
              reviewCount={34}
              rating={4}
              isNew
            />
          </div>
          <div className="w-full mt-4 ml-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <PropertyCard
              imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
              imageAlt="Rear view of modern home with pool"
              beds={1}
              baths={1}
              title="Cozy downtown apartment"
              priceInCents={92000}
              formattedPrice="$920.00"
              reviewCount={13}
              rating={3}
            />
          </div>
          <div className="w-full mt-4 ml-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <PropertyCard
              imageUrl="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2173&q=80"
              imageAlt="Rear view of modern home with pool"
              beds={2}
              baths={1}
              title="Friendly small home"
              priceInCents={103000}
              formattedPrice="$1,030.00"
              reviewCount={52}
              rating={5}
              isNew
            />
          </div>
          <div className="w-full mt-4 ml-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <PropertyCard
              imageUrl="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
              imageAlt="Rear view of modern home with pool"
              beds={1}
              baths={1}
              title="Comfortable loft in the city center"
              priceInCents={190000}
              formattedPrice="$1,520.00"
              reviewCount={40}
              rating={4}
            />
          </div>
          <div className="w-full mt-4 ml-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <PropertyCard
              imageUrl="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              imageAlt="Rear view of modern home with pool"
              beds={2}
              baths={2}
              title="Authentic flat"
              priceInCents={190000}
              formattedPrice="$800.00"
              reviewCount={8}
              rating={1}
              isNew
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
