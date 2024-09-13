import { RouterProvider } from "react-router-dom";
import cardImg from "../../assets/cardImg.png";
import { routes } from "../../Routes/Routes";

const Card = ({ Widget, flag = "gallery" }) => {
	return (
		<>
			<div className="rounded-[18.89px] w-[720px] h-[316px] bg-[#363c43] flex space-x-3 p-4">
				<img src={cardImg} className="h-[50%]" alt="" />
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
