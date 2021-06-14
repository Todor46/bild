import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import Portfolio from "../components/Portfolio/Portfolio";
import WorkNav from "../components/WorkNav/WorkNav";

const Work = () => {
  const [layout, setLayout] = useState("grid");
  useEffect(() => {
    document.title = "Display - Work";
  }, []);

  return (
    <>
      <PageTitle title="Check out what I can do" />
      <WorkNav layout={layout} setLayout={setLayout} />
      <Portfolio layout={layout} />
    </>
  );
};

export default Work;
