import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid";
import { Suspense } from "react";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

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
          <Link href="/meals/share">당신의 조리법을 나눠봐요</Link>
        </p>
      </header>
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
