import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-background text-foreground">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <div className="flex w-full items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Home</h1>
            <ThemeToggle />
        </div>
        <div className="mt-10 p-10 border border-color-border rounded-lg bg-carousel-bg">
            <p className="text-pagination-active-color">This is a sample box to test colors.</p>
            <p className="text-secondary mt-2">Secondary text color.</p>
        </div>
      </main>
    </div>
  );
}
