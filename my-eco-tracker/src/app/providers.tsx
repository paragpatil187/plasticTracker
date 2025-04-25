"use client";

import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/store/store";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </SessionProvider>
  );
}
