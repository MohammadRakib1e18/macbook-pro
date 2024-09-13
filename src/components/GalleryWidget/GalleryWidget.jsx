import { useState } from "react";
import eduImg from "../../assets/edu.jpg";
import nextIcon from "../../assets/next.png";
import prevIcon from "../../assets/prev.png";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./GalleryWidget.css";
import { Store } from "react-notifications-component";

const GalleryWidget = () => {
	const [images, setImages] = useState([eduImg, eduImg, eduImg]);
	const swiperRef = useRef(null);

	const addImageHandler = (event) => {
		console.log("clicked");
		const file = event.target.files[0];
		if (file && file.type.startsWith("image/")) {
			const newImageURL = URL.createObjectURL(file);
			setImages([...images, newImageURL]);
			Store.addNotification({
				title: "Congratulations!",
				message: "Image added successfully",
				type: "success",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
					duration: 3000,
					onScreen: true,
				},
			});
		} else {
			Store.addNotification({
				title: "Oops!",
				message: "Only image is acceptable",
				type: "warning",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
					duration: 3000,
					onScreen: true,
				},
			});
		}
	};
	const slideController = (toggle) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			if (toggle === "prev") {
				swiperRef.current.swiper.slidePrev();
			} else swiperRef.current.swiper.slideNext();
		}
	};

	return (
		<div className="w-11/12">
			<nav className="flex justify-between items-center relative -top-7">
				<div className=" bg-[#171717] text-white rounded-[20px] w-[140px] h-[58px] flex justify-center items-center shadow-inner">
					Gallery
				</div>
				<div className="flex items-center space-x-2 relative ml-8">
					<div className="btn-container rounded-full h-[32px] mb-2 relative -right-10">
						<input
							type="file"
							hidden
							id="upload"
							accept="image/*"
							onChange={addImageHandler}
						/>
						<label
							className="bg-[#41474d] text-white rounded-full py-2 px-4 shadow-md add-btn"
							htmlFor="upload"
						>
							+ADD IMAGE
						</label>
					</div>
					<button onClick={() => slideController("prev")}>
						<img
							className="relative -right-14"
							src={prevIcon}
							alt=""
						/>
					</button>
					<button onClick={() => slideController("next")}>
						<img
							className="relative -right-4"
							src={nextIcon}
							alt=""
						/>
					</button>
				</div>
			</nav>
			<div className="">
				<Swiper
					ref={swiperRef}
					modules={[Virtual, Navigation]}
					slidesPerView={3.2}
					centeredSlides={false}
					spaceBetween={20}
					navigation={true}
					virtual
					className=""
				>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							<div className=" h-[180px] w-[190px]">
								<img
									className="rounded-[24px] h-full w-full object-cover"
									src={img}
									alt=""
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default GalleryWidget;
