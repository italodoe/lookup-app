"use client";
import ProfileNavBar from "@/app/(protected)/_components/ProfileNavBar";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import ProfileSettings from "@/app/(protected)/_components/ProfileSettings";

const Profile =  () => {

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-4xl font-light">Profile </h1>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
        <ProfileNavBar />

        <ProfileSettings />
      </div>
    </section>
  );
};

export default Profile;
