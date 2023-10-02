import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <div className="i-radix-icons-rocket h-8 w-8" />
      <div>remix-run</div>
    </div>
  );
}
