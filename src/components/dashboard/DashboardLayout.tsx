import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  isLoading?: boolean;
  navigation: {
    title: string;
    items: { title: string; href: string }[];
  }[];
}

export function DashboardLayout({
  children,
  isLoading = false,
  navigation,
}: DashboardLayoutProps) {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar sections={navigation} className="hidden lg:block" />
        <main className="flex-1 p-6 lg:px-8">
          {isLoading ? (
            <div className="flex h-[50vh] items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}