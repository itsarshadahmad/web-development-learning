import React, { useEffect, useState } from "react";

export default function FetchingFromInternet() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return <div>FetchingFromInternet</div>;
}
