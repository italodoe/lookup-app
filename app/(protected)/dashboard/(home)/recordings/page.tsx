import MeetingCallCards from "@/components/MeetingCallCards";

function Recordings() {
  return (
    <div className="flex size-full flex-col gap-10 text-slate-50">
      <h1 className="text-4xl font-light">Recording Meetings</h1>
      <MeetingCallCards type="recordings" />
    </div>
  );
}

export default Recordings;
