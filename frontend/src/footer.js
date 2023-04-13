import "./footer.css";
import footPic from './images/foot.png';

function Footer() {
    return (
        <>
            <div className="foot">
                <div className='img'><img src={footPic} alt="footerPic" /></div>
            </div>
        </>
    )
}


export default Footer;