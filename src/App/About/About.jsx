import React from "react";

const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside role="complementary">
      <img
        src={image}
        alt="blog logo"
        style={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <p>{about}</p>
    </aside>
  );
};

export default About;
