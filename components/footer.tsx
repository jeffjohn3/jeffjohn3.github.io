import React from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
var _ = require("lodash");

export default function Footer() {
  const path = useRouter().pathname.split("/");
  const currentPage = path[1];
  const pages = {
    "/": "Home",
    "/projects": "Projects",
    "/funFacts": "Fun Facts",
  };
  return (
    <div style={{ textAlign: "center" }}>
      {_.range(3).map((_) => (
        <br />
      ))}
      {Object.entries(pages)
        .filter(([pagePath, _]) => {
          return pagePath !== `/${currentPage}`;
        })
        .map(([pagePath, page]) => (
          <div style={{ padding: "1%" }}>
            <Button href={pagePath}>{page}</Button>
          </div>
        ))}
      {_.range(9).map((_) => (
        <br />
      ))}
    </div>
  );
}
