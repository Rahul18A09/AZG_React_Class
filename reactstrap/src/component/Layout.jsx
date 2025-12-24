import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Layout() {
  return (
 <Container>
    <Row className='mt-4'>
       <Col lg="3" md="6" className='bg-warning p-3 text-center '>1</Col>
       <Col lg="3" md="6" className='bg-secondary text-white p-3 text-center'>2</Col>
       <Col lg="3" md="6" className='bg-info text-white p-3 text-center'>3</Col>
       <Col lg="3" md="6" className='bg-primary text-white p-3 text-center'>4</Col>
    </Row>
 </Container>
  )
}

export default Layout
