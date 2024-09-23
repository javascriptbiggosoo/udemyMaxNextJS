import React from "react";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          당신이 손수 만든 맛있는{" "}
          <span className={classes.highlight}>음식들</span>
        </h1>
        <p>마음에드는 레시피를 찾고 요리해보세요. 쉽고 즐겁습니다!</p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
