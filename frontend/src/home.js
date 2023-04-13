import Hero from "./images/hero.png";
import Search from "./images/search.png";
import './home.css';

function Home() {
    return (
        <>
            <div className="mainBody">
                <div className="content">
                    <form action="/review">
                        <h1>WELCOME TO <span className="blue">REVIEW</span> <span className="orange">BUDDY</span></h1>
                        <h2 className="sub">Compare reviews from different sites!</h2>
                        <div className="formDiv">
                            <input className="textBox" name="pdName" type="text" placeholder="Enter name of your product and press ENTER"></input><img className="searchIcon" src={Search} alt="search"></img>
                        </div>
                    </form>
                </div>
                <div className="heroImage">
                    <div className="imgHero"><img src={Hero} alt="hero"></img></div></div>
            </div>
        </>
    );
}
export default Home;