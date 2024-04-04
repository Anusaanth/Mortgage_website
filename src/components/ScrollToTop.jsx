import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null; // No need to render anything
};
