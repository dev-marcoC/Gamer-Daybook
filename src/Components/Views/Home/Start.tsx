import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ButtonStartStyle } from "../../Portables/Styles/ButtonStyle";
import { TypographyMenu } from "../../Portables/Styles/TypographyStyle";

export interface IStartProps {
  setMenu: (bool: boolean, openMenu: (bool: boolean) => void) => void;
  setSubMenu: (bool: boolean) => void;
}

export default function Start(props: IStartProps) {
  const { setMenu, setSubMenu } = props;
  return (
    <React.Fragment>
      <Typography
        variant="h1"
        sx={TypographyMenu}
        textAlign={"center"}
        color="#dcd5dd"
      >
        My gamer daybook
      </Typography>
      <Button
        sx={ButtonStartStyle}
        disableRipple
        color="inherit"
        onClick={() => setMenu(true, setSubMenu)}
      >
        Press Start
      </Button>
    </React.Fragment>
  );
}