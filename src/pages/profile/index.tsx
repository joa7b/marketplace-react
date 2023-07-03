import { useState, useEffect } from "react";

import { Navbar } from "../../ui/organisms/Navbar/index.tsx";
import { CategoriesContainer } from "../../ui/organisms/CategoriesContainer/index.tsx";

import { Header, ContentProfileContainer, Content } from "./styles.ts";

export const ProfilePage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(true);

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    if (!isNavbarOpen) {
      const timer = setTimeout(() => {
        setShowCategories(true);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setShowCategories(false);
    }
  }, [isNavbarOpen]);

  return (
    <main>
      <Header>
        <img src="" alt="" />
      </Header>
      <ContentProfileContainer>
        <Navbar handleClose={handleNavbar} isNavbarOpen={isNavbarOpen} />
        <Content>{showCategories && <CategoriesContainer />}</Content>
      </ContentProfileContainer>
    </main>
  );
};
