import React from 'react';
import { Container } from 'react-bootstrap';
import SinglePost from '../../components/singlePost/SinglePost'
import './Single.css'

const Single = () => {
    return (
        <Container className="single">
            <SinglePost />
        </Container>
    )
}

export default Single;