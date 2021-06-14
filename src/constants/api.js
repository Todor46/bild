import isDev from "../helpers/DevDetect";

export const API = isDev
  ? "http://localhost:8080"
  : "https://bild-sever.herokuapp.com";
