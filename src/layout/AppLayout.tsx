import React, { Fragment } from 'react'
import Header from '../components/Header/header.component';
import Footer from '../components/Footer/footer.component';

import Container from 'react-bootstrap/Container';
import Menu from '../components/Menu/menu.component';

const AppLayout: React.FC= () => {
    return (
        <Fragment>
            <Header />
                <Container fluid>
                    <Menu />
                </Container>
            <Footer />
        </Fragment>  
    )
}

export default AppLayout
