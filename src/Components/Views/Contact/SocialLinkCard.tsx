import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SocialButton } from "../../Portables/Styles/ButtonStyle";
import {
  CardStyle,
  CardMediaStyle,
  CardActionStyle,
} from "../../Portables/Styles/CardStyles";
import Slide from "@mui/material/Slide";
import useAppTranslation from "../../../Hooks/useAppTranslation";
export interface ISocialLinkCardProps {}

export function SocialLinkCard(props: ISocialLinkCardProps) {
  const translationState = useAppTranslation();
  return (
    <Card sx={CardStyle} elevation={0}>
      <CardMedia component="img" sx={CardMediaStyle} image="/icon.png" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {translationState.translation["Social Contact"]}
        </Typography>
      </CardContent>
      <CardActions sx={CardActionStyle}>
        <Stack direction={"row"} spacing={1}>
          <Slide direction="left" timeout={2000} in={true}>
            <SocialButton
              aria-label="github"
              disableRipple
              myColor="#ffda00"
              size="medium"
              onClick={() => window.open("https://github.com/Hiidees")}
            >
              <GitHubIcon />
            </SocialButton>
          </Slide>
          <Slide direction="up" timeout={2000} in={true}>
            <SocialButton
              disableRipple
              aria-label="instagram"
              myColor="#d70078"
              size="medium"
              onClick={() =>
                window.open(
                  "https://instagram.com/hide.marco?igshid=YmMyMTA2M2Y="
                )
              }
            >
              <InstagramIcon />
            </SocialButton>
          </Slide>
          <Slide direction="down" timeout={2000} in={true}>
            <SocialButton
              aria-label="facebook"
              disableRipple
              myColor="#004dd7"
              size="medium"
              onClick={() =>
                window.open("https://www.facebook.com/marco.carollo.56")
              }
            >
              <FacebookIcon />
            </SocialButton>
          </Slide>

          <Slide direction="up" timeout={2000} in={true}>
            <SocialButton
              aria-label="gmail"
              disableRipple
              myColor="rgba(251,52,52,0.84)"
              size="medium"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&source=mailto&to=[marco.carollo@live.it]"
                )
              }
            >
              <EmailIcon />
            </SocialButton>
          </Slide>
          <Slide direction="right" timeout={2000} in={true}>
            <SocialButton
              aria-label="linkedin"
              disableRipple
              myColor="#008cf0d6"
              size="medium"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/marco-carollo-867470219"
                )
              }
            >
              <LinkedInIcon />
            </SocialButton>
          </Slide>
        </Stack>
      </CardActions>
    </Card>
  );
}