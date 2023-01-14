import React from "react";

const Prediction = (props) => {
  const { prediction } = props;

  let color;

  if (prediction?.class === "Macaws") {
    color = "bg-macaws";
  } else if (prediction?.class === "Lovebirds") {
    color = "bg-lovebird";
  } else if (prediction?.class === "Cockatoo") {
    color = "bg-cuckatoo text-dark";
  } else if (prediction?.class === "Quails") {
    color = "bg-quails";
  }

  const btnSytle = "btn gap-2 " + color

  console.log(prediction);
  return (
    <div className="card max-w-screen bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Classification Result</h2>
        <button className={btnSytle}>
        <h3 className="text-xl font-semibold">
            Predicted Bird : {prediction?.class}
          </h3>
          <div className="badge">{prediction?.score*100}%</div>
        </button>
        
        
      </div>
    </div>
  );
};

export default Prediction;
