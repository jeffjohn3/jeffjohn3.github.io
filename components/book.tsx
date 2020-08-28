import { Paper, useMediaQuery } from "@material-ui/core";
import { DetailedHTMLProps, AnchorHTMLAttributes, useState } from "react";

interface Props {
  Title: string;
  Author: string;
  Description: string;
  Link: string;
  Image: string;
}

export default function Project(props: Props) {
  const md = useMediaQuery("(min-width: 768px)");

  {
    if (props.Title) {
      return (
        <Paper
          elevation={3}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "1.5vh",
            display: "flex",
          }}
        >
          <a href={props.Link} style={{ textDecoration: "none", width: "40%" }}>
            <img
              src={props.Image}
              style={{
                width: "100%",
                borderRadius: "8px 0 0 8px",
              }}
            />
          </a>
          <div
            style={{
              padding: "2% 4% 0 0",
              fontSize: ".85em",
              width: "55%",
              position: "absolute",
              height: "90%",
              overflow: "hidden",
              marginLeft: "40%",
              textOverflow: "ellipsis",
            }}
          >
            <h2 style={{ fontSize: "1.3em" }}>{props.Title}</h2>
            <h3 style={{ fontSize: "1em" }}>{props.Author}</h3>
            {props.Description}
          </div>
        </Paper>
      );
    }
  }
  return null;
}
