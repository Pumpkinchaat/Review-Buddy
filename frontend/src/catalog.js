import './catalog.css'
import goBack from './images/goBack.png';
import Reviews from './reviews';
import React, { useState } from 'react';
import axios from 'axios';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pdName = urlParams.get('pdName');

const url = `http://localhost:3030/api/v1/product/${pdName}`;

function Catalog() {

    const [reviews, setReviews] = useState(null);
    function getData() {
        axios.get(url, {
            headers: {
                "Access-Control-Allow-Headers": "privatekey"
            }

        }).then(async (res) => {
            console.log(res.data);
            setReviews(res.data.document.productReviews);
        });
    }


    if (!reviews || !reviews.isProcessed) {
        getData();
        return (
            <>
                <div className='reviewCon'>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kxsd2ytq.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </>
        );
    }



    let prop = reviews.significantReviews;
    return (
        <>
            <div className="reviewCon">
                <h3>{pdName}</h3>
                <div className="catCon">
                    <div className="goBackCon">
                        <img src={goBack} alt="back" className="goBackImg"></img>
                        <a href="/" className="goBack">Search another product</a>
                    </div>
                    <Reviews obj={prop}></Reviews>
                </div>
            </div>
        </>
    )
}
export default Catalog;