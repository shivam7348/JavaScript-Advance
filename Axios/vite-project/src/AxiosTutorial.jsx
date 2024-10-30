import { useEffect, useState } from "react";
import axios from "axios";

function AxiosTutorial() {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Axios</h1>
      {userData.map((data, index) => (
        <div key={index}>
          {data.name.firstname} {data.name.lastname}
        </div>
      ))}
    </div>
  );
}

export default AxiosTutorial;
