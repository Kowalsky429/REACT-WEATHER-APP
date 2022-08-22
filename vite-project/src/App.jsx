import Details from './components/Details';
import Detailsbar from './components/Detailsbar';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import { StateContext } from './context/StateContext';

const App = () => (
	<div className="container max-w-[1300px] text-white">
		<StateContext>
			<Navbar />
			<Searchbar />
			<Details />
			<Detailsbar />
		</StateContext>
	</div>
);

export default App;
