import React from "react";
// import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import DashBoardCard from "./DashBoardCard";

function Content(props) {
  return (
    //    <Card>
    //     <CardBody>
    //         <CardTitle tag="h5">Welcome</CardTitle>
    //         <CardText>This is a simple layout created using ReactStrap components.</CardText>
    //     </CardBody>
    //    </Card>

    <div>
      <h2 className="mb-4">DashBoard</h2>
      <DashBoardCard name="Amazone"/>
    </div>
  );
}

export default Content;
