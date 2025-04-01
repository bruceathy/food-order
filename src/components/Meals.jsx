import { use } from "react";
import { useState, useEffect } from "react";

export default function fetchMeals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch("http://localhost:3000/meals");

      if (!res.ok) {
        throw new Error("Failed to fetch meals");
      }

      const meals = await res.json();
      setLoadedMeals(meals);
    }
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <p>{meal.price}</p>
        </li>
      ))}
    </ul>
  );
}
