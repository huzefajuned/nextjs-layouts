import React from "react";

const page = ({ props}) => {
    console.log('props',props)
  return <div> preview a single product! {props}</div>;
};

export default page;
