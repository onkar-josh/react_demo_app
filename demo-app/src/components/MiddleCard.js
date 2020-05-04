import React from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';

import LoginComponent from './LoginComponent';
import Slides from './Slides';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container, Card } from "react-bootstrap";
const MiddleCard = () => {
    return(
        <marquee width="100%" margin= "0 auto" direction="up" height="630px">Peerly is peer-recognision and rewarding system! Every employee gets and gives 'high-5' (henceforth called hi5) Give a hi5 to someone who you want to appreciate for something they did. Every week you get 2 hi5 that you can give to others - use it or lose it.</marquee>
    )
};
export default MiddleCard;