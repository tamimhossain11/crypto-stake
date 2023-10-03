import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageInvite from "pages/HomePageInvite";
import NotFound from "pages/NotFound";
const ResultsPage = React.lazy(() => import("pages/ResultsPage"));
const AboutPageThree = React.lazy(() => import("pages/AboutPageThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageInvite />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutpagethree" element={<AboutPageThree />} />
          <Route path="/resultspage" element={<ResultsPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
