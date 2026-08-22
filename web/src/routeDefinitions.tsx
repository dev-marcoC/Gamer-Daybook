import type { RouteObject } from "react-router-dom";
import { HomePage } from "@/pages/HomePage/HomePage";
import { NewGamePage } from "@/pages/NewGamePage/NewGamePage";
import { AboutMePage } from "@/pages/AboutMePage/AboutMePage";
import { ContactPage } from "@/pages/ContactPage/ContactPage";
import { OptionsPage } from "@/pages/OptionsPage/OptionsPage";
import { QuickViewPage } from "@/pages/QuickViewPage/QuickViewPage";
import { PassionsPage } from "@/pages/PassionsPage/PassionsPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/nuova-partita", element: <NewGamePage /> },
  { path: "/chi-sono", element: <AboutMePage /> },
  { path: "/contatti", element: <ContactPage /> },
  { path: "/opzioni", element: <OptionsPage /> },
  { path: "/cv", element: <QuickViewPage /> },
  { path: "/passioni", element: <PassionsPage /> },
  { path: "*", element: <NotFoundPage /> },
];
