import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        Absolutely fantastic experience! The food was not only delicious but also delivered piping hot right to my doorstep.
        The delivery was prompt, and the packaging ensured that everything arrived in perfect condition.
        I ordered the Butter Chicken and it exceeded my expectations.
        Will definitely be ordering from here again!
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Shruti</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        Great food, and the delivery was pretty good overall. The flavors were on point, and I appreciate the effort put into packaging.
        However, delivery took a bit longer than expected, which is the only reason I'm not giving it five stars.
        Still, the taste made up for the wait!
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Vaibhav</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        Very enjoyable dining experience! The restaurant offers a diverse menu with a range of enticing options.
        The presentation of the dishes was impressive, and the flavors did not disappoint.
        The service was attentive, and the staff was knowledgeable about the menu.
        While the food was delicious and well-prepared, there's still a bit of room for improvement to earn that fifth star.
        Overall, a solid choice for a satisfying meal.
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Sushama</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
