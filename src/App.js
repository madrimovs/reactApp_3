import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
	return (
		<div data-spy="scroll" data-offset="150" data-target="/mainNav">
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
