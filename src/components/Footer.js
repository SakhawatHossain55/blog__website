import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'rgb(210 210 207)'}} className=" py-4">
            <Container>
                <div className="text-center">
                    <p>Copyright © {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;