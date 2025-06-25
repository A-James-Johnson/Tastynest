import React from "react"; // Ensure you create corresponding CSS for styling

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15) // Adjust the number based on how many placeholders you want
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-description"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
