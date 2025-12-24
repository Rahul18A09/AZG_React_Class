import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

function SideBar() {
  return (
    <div>
      <ListGroup flush>
        <ListGroupItem tag="a" href="#">DashBoard</ListGroupItem>
        <ListGroupItem tag="a" href="#">Users</ListGroupItem>
        <ListGroupItem tag="a" href="#">Settings</ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default SideBar
