import MeetingCallCards from "@/components/MeetingCallCards";

function Previous() {
  return (
    <div className="flex size-full flex-col gap-10 text-slate-50">
      <h1 className="text-4xl font-light">Previous Meetings</h1>
      <MeetingCallCards type="ended" />
    </div>
  );
}

export default Previous;
