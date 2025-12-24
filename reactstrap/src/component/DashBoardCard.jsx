import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function DashBoardCard() {
  const cardsData = [
    { title: "Users", value: "1,250", color: "primary" },
    { title: "Orders", value: "320", color: "success" },
    { title: "Revenue", value: "₹75,000", color: "warning" },
    { title: "Feedback", value: "85%", color: "danger" },
  ];

  return (
    <Container>
      <Row>
        {cardsData.map((card, index) => (
          <Col md="3" sm="6" xs="12" key={index} className="mb-3">
            <Card body inverse color={card.color}>
              <CardBody>
                <CardTitle tag="h5">{card.title}</CardTitle>
                <CardText className="fs-3 fw-bold">{card.value}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DashBoardCard;
