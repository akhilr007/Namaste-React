const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 15 }).map((_, index) => {
        return (
          <div key={index} className="shimmer-card">
            <div className="shimmer"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
