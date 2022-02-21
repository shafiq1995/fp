import { useState } from 'react';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, Container} from 'react-bootstrap';

function Navigationbar(){
    const [profilename] = useState("Shafiq");
    const [homelink] = useState("http://localhost:3000/");

    const handleUrlChange = (e)=>{
        console.log({homelink});
    }
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
            <Navbar.Brand href={homelink} onClick={handleUrlChange}>{profilename}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Personal Information</Nav.Link>
                    <Nav.Link href="#action2">Resume</Nav.Link>
                    <NavDropdown title="Projects" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Project I</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Project II</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Project III</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Project IV</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Other orojects are coming soon
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigationbar;