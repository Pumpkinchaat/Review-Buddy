import './review.css';
import ReviewCard from './reviewCard';
import React, { useState } from 'react';
import axios from 'axios';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pdName = urlParams.get('pdName');

const url = `http://localhost:3030/api/v1/product/${pdName}`;




function Review() {

    const [review, setReview] = useState(null);
    function getData() {
        axios.get(url, {
            headers: {
                "Access-Control-Allow-Headers": "privatekey"
            }

        }).then(async (res) => {
            console.log(res.data);
            setReview(res.data.document.productReviews);
        });
    }

    if (!review || !review.isProcessed) {
        getData();
        return (
            <>
                <div className='reviewCon'>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kxsd2ytq.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='reviewCon'>
                <ReviewCard obj={review}></ReviewCard>
            </div>
        </>
    )


    // return (
    //     <>
    //         <div className="reviewCon">
    //             {/* <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kxsd2ytq.json" background="transparent" speed="1" loop autoplay></lottie-player> */}
    //             <ReviewCard />
    //         </div>
    //     </>
    // );
}

export default Review;