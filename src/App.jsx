import AboutWidget from "./components/AboutWidget/AboutWidget";
import Card from "./components/Card/Card";
import GalleryWidget from "./components/GalleryWidget/GalleryWidget";

const App = () => {
	return (
		<div className="md:flex gap-12 py-12">
			<section className="w-[50%] hidden lg:flex"></section>
			<section className="space-y-4 lg:w-[50%] w-full">
				<Card Widget={AboutWidget} flag="about">
					<h2></h2>
				</Card>
				<Card Widget={GalleryWidget}></Card>
			</section>
		</div>
	);
};

export default App;
