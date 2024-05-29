import "./fashion-section.css";
import Card from "../card/Card";

const FashionSection = ({ title, subtitle, data }) => {
    return (
        <section className="womens__fashion_section">
            <h2 className="womens__fashion_section__title">{title}</h2>
            <p className="womens__fashion_section__subtitle">{subtitle}</p>
            <div className="card__container">
                {data.map((el) => (
                    <Card
                        cardTitle={el.title}
                        cardDescription={el.description}
                        img={el.image}
                        oldPrice={el.price}
                        newPrice={el.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default FashionSection;
