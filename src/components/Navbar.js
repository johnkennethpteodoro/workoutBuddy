import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<div className="w-full text-center text-2xl font-extrabold uppercase text-white py-7 font-white bg-zinc-800 border-zinc-700 border-b">
				<Link>
					<h1>Workout Buddy</h1>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
