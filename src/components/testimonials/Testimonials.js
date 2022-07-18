import React from "react";
import AVTR1 from "../../assets/brilworks-img.jpg";
import AVTR2 from "../../assets/iarlogo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
	const clientsData = [
		{
			id: "1",
			name: "Brilworks Software",
			img: AVTR1,
			review: "ReactJs Developer (Feb 2022 - May 2022)",
		},
		{
			id: "2",
			name: "Institute of Advanced Research - BTech (IT)",
			img: AVTR2,
			review: "Student (2018-2022)",
		},
	];

	return (
		<section id="testimonials">
			<h5>Background</h5>
			<h2 className="sectionTitle">Experience</h2>

			<Swiper
				className="container testimonials__container"
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={40}
				slidesPerView={1}
				navigation
				scrollbar={{ draggable: true }}
				pagination={{ clickable: true }}
			>
				{clientsData.map((item, i) => {
					return (
						<SwiperSlide className="testimonial" key={i}>
							<div className="client__avatar">
								<img src={item?.img} alt="" />
							</div>
							<h5 className="client__name">{item?.name}</h5>
							<small className="client__review">{item?.review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Testimonials;
