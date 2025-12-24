import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

function Content() {
  return (
   <Card>
    <CardBody>
        <CardTitle tag="h5">Welcome</CardTitle>
        <CardText>This is a simple layout created using ReactStrap components.</CardText>
    </CardBody>
   </Card>
  )
}

export default Content;
