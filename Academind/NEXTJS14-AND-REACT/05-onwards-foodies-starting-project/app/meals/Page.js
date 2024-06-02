import classes from "./page.module.css";

export default function mealPage() {
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
      <main></main>
    </>
  );
}
