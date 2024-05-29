import "./sectionImg.css";
import img1 from "../../img/sectionImg1.jpeg";
import img2 from "../../img/sectionImg2.jpeg";
import img3 from "../../img/sectionImg3.jpeg";
import img4 from "../../img/sectionImg4.jpeg";

const SectionImg = () => {
    return (
        <section className="section__img">
            <div className="img__section1">
                <div>
                    <img src={img1} alt="#" />
                </div>
                <div className="img__section1_section1">
                    <img src={img2} alt="#" />
                    <img src={img3} alt="#" />
                </div>
            </div>
            <div className="img__section2">
                <img src={img4} alt="#" />
            </div>
        </section>
    );
};

export default SectionImg;
