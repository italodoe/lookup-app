import MeetingCallCards from "@/components/MeetingCallCards";
import React from "react";

function Upcoming() {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meetings</h1>
      <MeetingCallCards type="upcoming" />
    </section>
  );
}

export default Upcoming;
