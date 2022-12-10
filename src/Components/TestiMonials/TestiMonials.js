import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../images/logo.webp';
import './TestiMonial.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Product Manager',
            description: 'GCPM, 6 Months Program',
            address: 'CitiBank',
            img: 'https://www.insaid.co/wp-content/uploads/2022/02/1620043890884.jpeg'
        },
        {
            name: 'Vice President',
            description: 'PGPDSAI, 12 Months Program',
            address: 'Yes Bank',
            img: 'https://www.insaid.co/wp-content/uploads/2022/02/1605681422723.png'
        },
        {
            name: 'Senior Data Engineer',
            description: 'PGPDSAI, 12 Months Program',
            address: 'PHILIPS',
            img: 'https://www.insaid.co/wp-content/uploads/2022/02/1639116594878.png'
        },
        {
            name: 'Data Science Consultant',
            description: 'GCDAI, 10 Months Program',
            address: 'TCS',
            img: 'https://www.insaid.co/wp-content/uploads/2022/02/1610958403967.png'
        },
        {
            name: 'Product Manager',
            description: 'CPM, 3 months Program ',
            address: 'CONDE NAST',
            img: 'https://www.insaid.co/wp-content/uploads/2022/02/1638122638432-1.jpeg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 5,
        margin: 0,
        autoplay: true,
        // dots: true,
        autoplayTimeout: 5500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map( (testiMonialDetail) => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />
                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
         </section>
    );
};

export default TestiMonials;