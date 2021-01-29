import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <button onClick={() => history.push("/pizza")}>
        Order Now
      </button>
    </div>
  );
}

export default Home;