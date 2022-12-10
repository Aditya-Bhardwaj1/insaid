import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  console.log(testiMonialDetail);
  // const [name1, description1, address1, img1] = testiMonialDetail;
  // const name =testiMonialDetail.name;
  // const description =testiMonialDetail.description;
  // const address =testiMonialDetail.address;
  // const img =testiMonialDetail.img;

  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div className="item">
      <div className="shadow-effect">
        <img
          className="img-circle"
          alt="test"
          src={testiMonialDetail.img}
        //   width={"400px"}
        //   height={"400px"}
        />
        <p>{testiMonialDetail.description}</p>
      </div>
      <div className="testimonial-name">
        <h5>{testiMonialDetail.name}</h5>
        <small>{testiMonialDetail.address}</small>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;