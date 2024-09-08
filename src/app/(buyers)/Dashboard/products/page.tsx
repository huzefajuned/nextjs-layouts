"use client";
import React from "react";

// Fake product data
const products = [
  {
    id: 2,
    name: "Smartphone",
    price: "$799",
    image:
      "https://imgs.search.brave.com/N95IVndZudm5YZKZ25HoyL3vhlYDHxwxGtuSVRS0fj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NzkxMDM0MS9waG90/by9pbWFnZS1vZi1v/cGVyYXRpbmctYS1z/bWFydHBob25lLWlu/ZG9vcnMtNTIzOC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/T1lQOFpIcUZEcUV3/NS0yR1ByaVhVX0dK/c00xS291cmRVTWQ2/djVUeVBjQT0",
    description: "Latest smartphone with top-notch features and sleek design.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49",
    image:
      "https://imgs.search.brave.com/G-5ttCHYXPdWXGGMw1yJnU7-_KfcZObyzUlhKxQAwr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/OTA4MTIxMy9waG90/by9vcHRpY2FsLXdp/cmVsZXNzLW1vdXNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1HRDMzMVlSa01T/andReWhQZ2FEcFRk/VnlLX29zcUV0X2hQ/MDNSdUFuRFNNPQ",
    description: "Ergonomic gaming mouse with customizable buttons.",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$199",
    image:
      "https://imgs.search.brave.com/RJLrEuxjTfPZsEGTy-5MC4EnuHkKqOuDk2EyKOAwk9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93YXRjaC13aXRo/LXRpbWUtMTItMDUt/aXRfMTI0OTAzNC0y/Nzg4My5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    description: "Feature-packed smartwatch with fitness tracking.",
  },
];

const page = () => {
  return (
    <div className="bg-gray-800 text-white h-full p-10 overflow-scroll">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-purple-950 p-6 rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <span className="text-xl font-bold">{product.price}</span>
            <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
              Add to Cart
            </button>
            <button
              //  onClick={()=> router.push({
              //   pathnae
              //  })}
              className="m-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
