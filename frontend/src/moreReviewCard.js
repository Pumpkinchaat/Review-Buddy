import './moreReviewCard.css';

function MoreReviewCard({ prop }) {
    let num = prop.rating;
    let classofText;
    if (num > 3) {
        classofText = "greenText";
    }
    else {
        classofText = "redText";
    }
    classofText = "number " + classofText;
    return (
        <>
            <div className="moreReview">
                <div className="ratingReviewBox">
                    <div className="label2">Rating:</div>
                    <div className={classofText}>{num}/5</div>
                </div>
                <hr></hr>
                <div className="label2">Customer Review:</div>
                <p className="custReview">
                    {prop.review}
                </p>
                <div className='site'>{prop.site}</div>
            </div>
        </>
    );
}

export default MoreReviewCard;