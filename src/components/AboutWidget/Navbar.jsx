import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="bg-[#171717] rounded-[24px] p-[6px]">
			<ul className="bg-[#171717] rounded-[24px] p-[6px] w-full md:h-[50px] text-slate-200 flex flex-col md:flex-row md:justify-evenly justify-center md:items-center items-start space-x-[10px]">
				<NavLink
					to="/"
					className=" rounded-2xl text-center px-6 py-3 md:w-1/3 w-full"
				>
					<li>About Me</li>
				</NavLink>
				<NavLink
					to="/experiences"
					className=" rounded-2xl text-center px-6 py-3 md:w-1/3 w-full"
				>
					<li>Experiences</li>
				</NavLink>
				<NavLink
					to="/recommended"
					className=" rounded-2xl text-center px-6 py-3 md:w-1/3 w-full"
				>
					<li>Recommended</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navbar;
