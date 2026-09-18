import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Catalog />;
}
