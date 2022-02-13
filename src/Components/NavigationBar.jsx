
import React from "react"
import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap";
import './Styles/navbar.css'
export default function NavigationBar() {


    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Medium</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/login'>Login</Link>
          <Link to='/register'>S'inscrire</Link>
          <Link to='/create/seance'>Ajouter un exercice</Link>
          <Link to='/seances'>Mes seances</Link>


          <Link to='/disconnect'>Deco</Link>
        </Nav>
        </Container>
      </Navbar>
    )


}