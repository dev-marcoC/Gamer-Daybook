import * as React from "react";
import { AboutMe } from "../Views/AboutMe";

export interface IAboutMeControllerProps {}

export function AboutMeController(props: IAboutMeControllerProps) {
  return <AboutMe />;
}