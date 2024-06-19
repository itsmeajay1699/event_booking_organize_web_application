import { cookies, headers } from "next/headers";
import { getServerSession as originalGetServerSession } from "next-auth";
import authOptions from "@/lib/auth_option";

export const getServerSession = async () => {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  };
  const res = { getHeader() {}, setCookie() {}, setHeader() {} };
  const authOptions1 = authOptions;

  // @ts-ignore - The type used in next-auth for the req object doesn't match, but it still works
  const session = await originalGetServerSession(req, res, authOptions1);
  return session;
};
