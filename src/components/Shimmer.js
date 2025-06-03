const Shimmer = () => {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  console.log("Shimmer rendered");

  return (
    <div className="res-container">
      {numbers.map((number) => (
        <div
          className="shimmer-card"
          style={{ backgroundColor: "#f0f0f0" }}
          key={number}
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
