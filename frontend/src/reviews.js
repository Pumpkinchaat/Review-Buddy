import MoreReviewCard from './moreReviewCard';

function Reviews({ obj }) {
    let num = obj.length;
    let Comp = [];
    for (let i = 0; i < num; i++) {
        console.log(obj[i]);
        Comp.push(<MoreReviewCard prop={obj[i]}></MoreReviewCard>)
    }
    return (
        <>
            {Comp}
        </>
    );
}

export default Reviews;