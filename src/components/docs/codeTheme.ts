import type { PrismTheme } from "prism-react-renderer";

export const codeTheme: PrismTheme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#0f172a", // deep slate background
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#637777",
        // color: "#f4c2c2",
        fontStyle: "italic",
      },
    },
    {
      types: ["string"],
      style: {
        // color: "#ecc48d",
        color: "#F4C2C2",
      },
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "#f78c6c",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#c792ea",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#82aaff",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#89ddff",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#ffcb8b",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#7fdbca",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#addb67",
      },
    },
  ],
};
