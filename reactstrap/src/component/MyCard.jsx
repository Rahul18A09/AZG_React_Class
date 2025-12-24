import React from "react";
import { Button, Card, CardBody, CardColumns, CardText, CardTitle } from "reactstrap";

function MyCard() {
  return (
    <Card style={{width: "18rem"}}>
      <CardBody className="text-center">
        <CardTitle>ReactStrap Card</CardTitle>
        <CardText>This is Simple card Using ReactStrap.</CardText>
        <Button color="success">Read more</Button>
      </CardBody>
    </Card>
  );
}

export default MyCard;
