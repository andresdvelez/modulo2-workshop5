import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Home() {
  const {user} = useContext(AuthContext)

  console.log(user.email);
  console.log("jksbjd");

  return <div>

    <h1>Andres Lindo </h1>

  </div>;
}

export default Home;
