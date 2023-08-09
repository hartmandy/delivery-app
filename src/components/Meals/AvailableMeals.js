import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mystery Berry Twist",
    description:
      "Dive into intrigue with our tangy mixed berry pie, paired with a spine-tingling mystery novel that will keep you guessing.",
    price: 29.99,
  },
  {
    id: "m2",
    name: "Romantic Apple Crumble",
    description:
      "Indulge in love's sweetness with a classic apple crumble pie, coupled with a heartwarming romance novel for a night of passion and tenderness.",
    price: 26.99,
  },
  {
    id: "m3",
    name: "Fantasy Lemon Meringue",
    description:
      "Embark on a magical journey with our zesty lemon meringue pie, served with a fantastical adventure novel that transports you to otherworldly realms.",
    price: 32.99,
  },
  {
    id: "m4",
    name: "Sci-Fi Chocolate Eclipse",
    description:
      "Explore the cosmos with our rich chocolate eclipse pie, paired with an exhilarating science fiction novel that will send your imagination into orbit.",
    price: 28.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
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
