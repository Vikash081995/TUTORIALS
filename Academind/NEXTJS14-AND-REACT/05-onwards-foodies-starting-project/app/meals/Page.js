import { Suspense } from "react";
import MealsGrid from "../components/meals/meals-grid";
import classes from "./page.module.css";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious mea, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your fav reipe and cook it yourself. It is easy and fun!</p>
      </header>
      <p className={classes.cta}>
        <Link href="/meals/share">share your fav recipe</Link>
      </p>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
