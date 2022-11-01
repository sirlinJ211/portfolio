import React from "react";
import FooterWork from "../component/footer_work/footer_work";
import Header from "../component/header/header";
import WorkDetail from "../component/work_detail/work_detail";

const WorkRoute = () => {
  return (
    <>
      <Header />
      <WorkDetail />
      <FooterWork />
    </>
  );
};

export default WorkRoute;
