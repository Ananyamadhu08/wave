import React from "react";
import { useParams } from "react-router-dom";

const pageGenerator = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

const PageRenderer = () => {
  const { page, id } = useParams();

  let pageName = "";

  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }

  return pageGenerator(pageName);
};

export default PageRenderer;
