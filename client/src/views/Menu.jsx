import { useEffect, useState } from "react";
import { Card } from "../assets/components/card";

const Menu = () => {

    const [pizzas, SetPizzas] = useState([]);

    const getAllPizzas = async () => {

        try {
            const response = await fetch("http://localhost:3010/menu");
            if (!response.ok){
                alert("somthing went wrong");
            }
            const data = await response.json();
            SetPizzas(data.pizzas)

        }catch (error){
            alert(error);
        }
        
    }

}

export default Menu;