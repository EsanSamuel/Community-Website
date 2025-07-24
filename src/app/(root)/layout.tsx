import { AppSidebar } from "@/components/Appsidebar";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserProvider } from "../context/UserContext";
import { getCurrentUser } from "@/server/session";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/");
  return (
    <SidebarProvider>
  
        <AppSidebar user={user!} />
        <main className="w-full">
          <div className="flex w-full items-center gap-2">
            {/*<SidebarTrigger /
            <Separator orientation="vertical" />
            <Navbar />*/}
          </div>
          <UserProvider>{children}</UserProvider>
        </main>
      
    </SidebarProvider>
  );
}
