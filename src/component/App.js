import IndiPersonComp from "./IndiPersonComp";
import { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [apiData, setApiData] = useState([]);
  
  useEffect(async () => {
    try{
      const response = await fetch("https://reqres.in/api/users");
      const { data } = await response.json();
      setApiData(data);
    }catch(error){
      console.log("Some error occured");
    }
    // console.log(jsonData);
  }, [apiData]);

  // return (
  //   <div>
  //       {apiData.map((user)=>(
  //         <IndiPersonComp
  //         email={user.email}
  //         name={user.first_name}
  //         image={user.avatar}
  //       />
  //       ))}
  //   </div>
  // );

  return (
    <div className="App">
      <h1 class="heading">Welcome Users.....❤❤</h1>
      <div className="flex">
        {apiData.length &&
          apiData.map((user) => (
            <IndiPersonComp
                    id={user.id}
                    email={user.email}
                    name={user.first_name}
                    image={user.avatar}
                  />
          ))}
      </div>
    </div>
  );
  
};

export default App;
