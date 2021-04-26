import '../styles/Main.css';
import React from 'react';
import Sanitize from '../assets/image/sanitize.webp';
import SocialDist from '../assets/image/social_distancing.png';
import Mask from '../assets/image/mask.webp';
import AllThree from '../assets/image/allthree.png';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import Covid1 from '../assets/img1.png'
import Covid2 from '../assets/img2.png'
import Covid3 from '../assets/img3.png'
function Main(){
    const history = useHistory();
    return(
        // <div className="Main">
        //         <div className="Heading">
        //             Welcome
        //         </div>
        //         <img src={Sanitize} className="imgs" align="left"></img>
        //         <img src={SocialDist} className="imgs" align="center"></img>
        //         <img src={Mask} className="imgs" align="right"></img>
        //         <br/>
        //         <span className="animation">
        //             <span className="spantext">Make sure to sanitize, maintain social distance and wear mask, for your own safety</span>
        //             <br/>
        //             <Button variant="outlined" className="btn1" endIcon={<ArrowRightAltIcon />} style={{margin:"1em"}} onClick = 
        //             {() =>
        //             history.push({
        //                 pathname:'/Home',
        //             })}>Get Started</Button>
        //         </span>
        // </div>
        <div style={{width:"100%", marginLeft:"auto", marginRight:"auto"}}>
            <br/>
            <Carousel fade style={{backgroundColor:"#3b3c3d"}}>
                <Carousel.Item>
                    <center><img
                    src={Covid1}
                    //style={{ width:"25%", height:"25%"}}
                    alt="First slide"
                    /></center>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center><img
                    src={Covid2}
                   // style={{ width:"25%", height:"25%"}}
                    alt="First slide"
                    /></center>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center><img
                    src={Covid3}
                   // style={{ width:"25%", height:"25%"}}
                    alt="First slide"
                    /></center>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={SocialDist}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-50"
                    src={Mask}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
        
    );
}
export default Main;