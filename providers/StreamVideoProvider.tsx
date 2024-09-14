"use client";

import { tokenProvider } from "@/actions/stream";
import Loader from "@/components/Loader";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { initials } from "@/lib/utils";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const user = useCurrentUser();

  useEffect(() => {
    if (!user) return;
    if (!apiKey) throw new Error("Stream API key missing");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id! || "",
        name: user?.name || user?.id,
        image: user?.image || initials(user.name), //todo add default
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
