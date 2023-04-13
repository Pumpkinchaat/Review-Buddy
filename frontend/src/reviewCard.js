function ReviewCard(props) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pdName = urlParams.get('pdName');
    const rating = Math.round(props.obj.averageRating * 10) / 10;
    const words = props.obj.keywords.slice(0, 25);
    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
    };
    const size = [600, 100];

    let classRating;
    let classText;
    if (rating > 2) {
        classRating = "green";
        classText = "greenFont";
    }
    else {
        classRating = "red";
        classText = "redFont";
    }
    let classofBox = "ratingBox " + classRating;
    let classofText = "ratingNumber " + classText;
    return (
        <>
            <h3>{pdName}</h3>
            <div className="mainCanvas">
                <h4>Average Rating</h4>
                <div className={classofBox}>
                    <div className={classofText}>{rating}/5</div>
                </div>
                <div className="data">
                    <div className="label">Consensus</div>
                    <div className="text">{props.obj.sentiment}</div>
                </div>
                <div className="data">
                    <div className="label">Main keywords</div>
                    <div className="text">{words.map(el => <span className='marginRight'>{el.text}</span>)}</div>
                </div>
                <div className="data">
                    <div className="label">Reviews Found</div>
                    <div className="text">{props.obj.reviewsRatings.length}</div>
                </div>
                <form action="/more">
                    <input className="hide" name="pdName" value={pdName}></input>
                    <button type="submit" className="btn">Read significant reviews</button>
                </form>
            </div>
        </>
    );
}

export default ReviewCard;