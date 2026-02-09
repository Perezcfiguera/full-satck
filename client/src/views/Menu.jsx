import { useEffect, useState } from "react";
import { Card } from "../assets/components/card";

const Menu = () => {
  const [pizzas, SetPizzas] = useState([]);

  const getAllPizzas = async () => {
    try {
      const response = await fetch("http://localhost:3010/pizza");
      if (!response.ok) {
        alert("somthing went wrong");
      }
      const data = await response.json();
      SetPizzas(data.allPizza);
      console.log(pizzas)
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllPizzas();
  }, []);

  return (
    <div className="row">
      {pizzas.map((pizza, index) => {
         console.log(pizzas);
        
        return (
          <div className="col" key={index}>
            <Card item={pizza} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
