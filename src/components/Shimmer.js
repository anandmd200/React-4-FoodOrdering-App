const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="cards br" key={index}>
            <div className="wrapper">
              <div className="profilePic animate din"></div>
              <div className="comment br animate w80"></div>
              <div className="comment br animate"></div>
              <div className="comment br animate"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
