import { Paper, useMediaQuery } from "@material-ui/core";

interface Props {
  Image: string;
  Title: string;
  Link: string;
}

export default function Project(props: Props) {
  const md = useMediaQuery("(min-width: 768px)");

  {
    if (props.Image && props.Title) {
      return (
        <a href={props.Link} style={{ textDecoration: "none" }}>
          <Paper
            elevation={3}
            style={{
              width: "100%",
              borderRadius: "8px",
              marginTop: "1.5vh",
            }}
          >
            <img
              src={props.Image}
              style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
            />
            <h2 style={{ fontSize: "1.3em", padding: "2% 4%" }}>
              {props.Title}
            </h2>
          </Paper>
        </a>
      );
    }
  }
  return null;
}
