import "./hero.css";

const Hero = () => {
    return (
        <section className="hero__background">
            <div className="hero__container">
                <p className="new__trend_text">NEW TREND</p>
                <h1 className="title">COLLUSION</h1>
                <p className="short__description">
                    An exclusive selection of this season's trends.
                </p>
                <div className="btn__container">
                    <button>discover</button>
                    <button>shop now</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
