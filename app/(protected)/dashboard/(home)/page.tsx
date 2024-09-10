import { auth } from "@/auth";
import React from "react";

const HomePage = async () => {
  const session = await auth();
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-4xl font-light"> Home {JSON.stringify(session)}</h1>
    </section>
  );
};

export default HomePage;
