const Shimmer = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shadow-lg animate-pulse" key={index}>
            <div className="wrapper">
              <div className="h-40 w-52 rounded-lg"></div>
              <div className="h-4 bg-slate-200 m-2 p-2"></div>
              <div className="h-4 bg-slate-200 m-2 p-2"></div>
              <div className="h-4 bg-slate-200 m-2 p-2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
