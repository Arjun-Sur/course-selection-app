"use client"

import { CourseSelector } from "./components/CourseSelector";
import InitialForm from "./components/InitialForm";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Course Selection App</h1>
        <InitialForm />
        <CourseSelector />
      </main>
    </>
  );
}
