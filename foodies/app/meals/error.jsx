"use client"; // 필수

import React from "react";

export default function error({ error }) {
  return (
    <main className="error">
      <h1>에러 발생!</h1>
      <p>데이터를 받지 못했어요. 나중에 다시 시도해주세요.</p>
    </main>
  );
}
