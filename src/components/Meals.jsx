import { useState, useEffect } from "react";
import MealItem from "./mealItem";

export default function Meals() {
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

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
