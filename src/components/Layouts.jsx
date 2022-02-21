import {Col, Row, Container} from 'react-bootstrap';
import '../Styles/Layouts.css';
import LeftSidebar from './LeftSidebar';
import Main from './Main';

export default function Layouts(){
    return(
        <div>
            <Container>
                <Row>
                    <Col className='leftSidebar' xs={12} md={4}>
                    <LeftSidebar/>
                    </Col>
                    <Col className='Main' xs={6} md={8}>
                        <Main/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}