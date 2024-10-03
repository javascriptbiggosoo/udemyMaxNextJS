import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>당신이 손수 만든 </span> 맛있는
          음식들
        </h1>
        <p>마음에드는 레시피를 찾고 요리해보세요. 쉽고 즐겁습니다!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
