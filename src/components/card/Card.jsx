import "./card.css";

const Card = ({ img, cardTitle, cardDescription, oldPrice, newPrice }) => {
    return (
        <div className="card">
            <div className="img__container">
                <img src={img} alt="" className="img__card" />
            </div>
            <div>
                <h4 className="card__title">{cardTitle}</h4>
                <h2 className="card__description">{cardDescription}</h2>
                <div className="price">
                    <p className="old__price">{oldPrice}</p>
                    <p className="new__price">{newPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
