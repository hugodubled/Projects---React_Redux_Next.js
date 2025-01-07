import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.jsx";
import Error from "./Error.jsx";


const requestConfig = {};

export default function MealsWithUseHttp() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(loadedMeals)

  if (isLoading){
    return <p className="center">Fetching meals... </p>
  }

  if (error) {return <Error title="failed to fetch meals"  message={error}></Error>}


  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
