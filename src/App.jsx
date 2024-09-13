import AboutWidget from "./components/AboutWidget/AboutWidget";
import Card from "./components/Card/Card";
import GalleryWidget from "./components/GalleryWidget/GalleryWidget";

const App = () => {
	return (
		<div className="md:flex gap-12 py-12 bg-gradient-to-b from-[#272b30] to-[#191B1F]">
			<section className=""></section>
			<section className="space-y-4 w-[50%]">
				<Card Widget={AboutWidget} flag='about'>
					<h2></h2>
				</Card>
				<Card Widget={GalleryWidget}></Card>
			</section>
		</div>
	);
};

export default App;
