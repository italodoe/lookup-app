"use server";

import { auth } from "@/auth";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { env } from "@/lib/env";

import { StreamClient } from "@stream-io/node-sdk";

const apiKey = env("NEXT_PUBLIC_STREAM_API_KEY");
const apiSecret = env("STREAM_SECRET_KEY");

export const tokenProvider = async () => {
  const session = await auth();
  if (!session || !session.user) throw new Error("User is not logged");
  const user = session.user;

  const client = new StreamClient(apiKey, apiSecret);

  // exp is optional (by default the token is valid for an hour)
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const issued = Math.floor(Date.now() / 1000) - 60;

  const user_id = user.id;

  const validity = 60 * 60;

  if (user_id) {
    const token = client.generateUserToken({
      user_id,
      validity_in_seconds: validity,
      exp,
      issued,
    });
    return token;
  }
  throw new Error("User is not logged");
};
