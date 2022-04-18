import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Foods that we are currently offering to you</h2>
      <p>
        Choose your favorite food from our extensive menu at affordable price.
      </p>
      <p>
        All of our dishes are prepared with high-quality ingredients, freshly
        prepared, and, of course, by skilled chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
