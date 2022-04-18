import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shada Vat",
    description: "Finest rice in the town",
    price: 25,
  },
  {
    id: "m2",
    name: "Alu Vorta",
    description: "Posh people's mash potato",
    price: 20,
  },
  {
    id: "m3",
    name: "Shutki Vorta",
    description: "Loitta Shutki with spice",
    price: 45,
  },
  {
    id: "m4",
    name: "Begun Vaji",
    description: "Made with fresh eggplant",
    price: 25,
  },
  {
    id: "m5",
    name: "Murgir Mangsho",
    description: "Exeptional and delicious meat",
    price: 50,
  },
  {
    id: "m6",
    name: "Tok Dal",
    description: "Made with sour mango",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
