import React, { useEffect }  from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PageLayout from "../components/layout";
import MainPage from "../pages/main-page";
import CatalogPage from "../pages/catalog-page";
import { GlobalStyle } from "./styles";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <PageLayout>
              <MainPage />
            </PageLayout>
          }/>
          <Route path="/catalog/:category" element={
            <PageLayout>
              <CatalogPage />
            </PageLayout>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
