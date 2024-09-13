import { RouterProvider } from "react-router-dom";
import cardImg from "../../assets/cardImg.png";
import { routes } from "../../Routes/Routes";

const Card = ({ Widget, flag = "gallery" }) => {
	return (
		<>
			<div className="rounded-[18.89px] w-full md:w-[720px] md:h-[316px] h-[450px] bg-[#363c43] flex space-x-3 p-4 mx-auto">
				<img src={cardImg} className="h-[50%] hidden md:block" alt="" />
				{flag === "about" ? (
					<RouterProvider router={routes}>
						<Widget></Widget>
					</RouterProvider>
				) : (
					<Widget></Widget>
				)}
			</div>
			<div className="divider w-4/5 mx-auto"></div>
		</>
	);
};

export default Card;
