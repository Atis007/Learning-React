import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []); // give props to useHttp, url, config, initialData
  // if the empty object passed directly as config, it will causes infinite loop
  // because the object is recreated on every render, so useHttp will think the config changed
  // so need to define it outside the component, so using the same object in memory

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if(error){
    return <Error title="Failed to fetch meails" message={error} />
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
