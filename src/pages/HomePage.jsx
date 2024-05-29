import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/hero/Hero";
import SectionImg from "../components/section-img/SectionImg";
import FashionSection from "../components/fashion-section/FashionSection";

const HomePage = () => {
    const [mensClothing, setMensClothing] = useState([]);
    const [womenClothing, setWomensClothing] = useState([]);
    const [mensClothingErr, setMensClothingErr] = useState(false);
    const [womensClothingErr, setWomensClothingErr] = useState(false);

    const getClothing = async () => {
        try {
            const respMensClothing = await axios(
                "https://fakestoreapi.com/products/category/men's%20clothing"
            );
            setMensClothing(respMensClothing.data);
        } catch (error) {
            setMensClothingErr((prevState) => !prevState);
        }
        try {
            const respWomenClothing = await axios(
                "https://fakestoreapi.com/products/category/women's%20clothing/?limit=4"
            );
            setWomensClothing(respWomenClothing.data);
        } catch (error) {
            setWomensClothingErr((prevState) => !prevState);
        }
    };

    useEffect(() => {
        getClothing();
    }, []);

    return (
        <div>
            <Hero />
            <SectionImg />
            {womensClothingErr ? (
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Товары не найдены
                </p>
            ) : (
                <FashionSection
                    title={"WOMEN’S FASHION"}
                    subtitle={"Shop our new arrivals from established brands"}
                    data={womenClothing}
                />
            )}
            {mensClothingErr ? (
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Товары не найдены
                </p>
            ) : (
                <FashionSection
                    title={"MEN'S SECTION"}
                    subtitle={"Shop our new arrivals from established brands"}
                    data={mensClothing}
                />
            )}
        </div>
    );
};

export default HomePage;
