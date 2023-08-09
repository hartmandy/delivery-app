import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to The Piebrary!</h2>
      <p>
        Where every slice leads to a new adventure. Choose your favorite pie,
        and we'll pair it with a mystery book for a delightful stay-in date with
        yourself.
      </p>
    </section>
  );
};

export default MealsSummary;
