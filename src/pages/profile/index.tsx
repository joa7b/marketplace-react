import { useState } from "react";

import { Navbar } from "../../ui/organisms/Navbar/index.tsx";

import { Header } from "./styles.ts";

export const ProfilePage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <main>
      <Header>
        <img src="" alt="" />
      </Header>
      <section>
        {<Navbar handleClose={handleNavbar} isNavbarOpen={isNavbarOpen} />}
      </section>
    </main>
  );
};
