import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

const App = () => {
	const [userInput, setUserInput] = useState({
		initialInvestment: 100000,
		annualInvestment: 10000,
		expectedReturn: 11,
		duration: 15,
	});

	const handleValueChange = (inputIdentifier, newValue) => {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			};
		});
	};

	const inputIsValid = userInput.duration >= 1;
	return (
		<>
			<Header />
			<UserInput onChangeInput={handleValueChange} userInput={userInput} />
			{!inputIsValid && <p className='center'>Please enter a valid duration</p>}
			{inputIsValid && <Results input={userInput} />}
		</>
	);
};

export default App;
