import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMeController } from "./Components/Controllers/AboutMeController";
import { ContactController } from "./Components/Controllers/ContactController";
import { EasterEggController } from "./Components/Controllers/EasterEggController";
import { HomeController } from "./Components/Controllers/HomeController";
import { LanguageController } from "./Components/Controllers/LanguageController";
import { NewGameController } from "./Components/Controllers/NewGameController";
import { OptionController } from "./Components/Controllers/OptionController";
import useAppTranslation from "./Hooks/useAppTranslation";
import useCookies from "./Hooks/useCookies";

export default function RouteProvider() {
  const appTranslation = useAppTranslation();

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              appTranslation.translationOnCookies ? (
                <HomeController />
              ) : (
                <LanguageController />
              )
            }
          />
          {useCookies.getCookie("language") && (
            <React.Fragment>
              <Route path="/newgame" element={<NewGameController />} />
              <Route path="/aboutme" element={<AboutMeController />} />
              <Route path="/languages" element={<LanguageController />} />
              <Route path="/option" element={<OptionController />} />
              <Route path="/contact" element={<ContactController />} />
            </React.Fragment>
          )}

          <Route path="*" element={<EasterEggController />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
