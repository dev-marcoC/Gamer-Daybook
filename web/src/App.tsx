import { RouterProvider } from "react-router-dom";
import { GameStateProvider } from "@/state/GameStateProvider";
import { router } from "@/router";

export function App() {
  return (
    <GameStateProvider>
      <RouterProvider router={router} />
    </GameStateProvider>
  );
}
