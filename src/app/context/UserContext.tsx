"use client";

import { api } from "@/trpc/react";
import type { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { useEffect, useMemo } from "react";

export const UserContext = React.createContext<User | any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  const { data: user } = api.user.getUser.useQuery(
    {
      email: session?.user?.email ?? "",
    },
    {
      enabled: !!session?.user?.email,
    },
  );

  useEffect(() => {
    console.log(user);
  }, []);

  const getFirstName = useMemo(() => {
    const username = user?.username ?? "";
    if (username.includes(" ")) {
      const [firstname] = username.split(" ");
      return firstname!;
    } else {
      return username;
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, getFirstName }}>
      {children}
    </UserContext.Provider>
  );
};
