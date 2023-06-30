import React from "react";
import ReactDOM from "react-dom/client";

import { ProfilePage } from "./pages/profile";

import { GlobalStyle } from "./style.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ProfilePage />
  </React.StrictMode>
);
