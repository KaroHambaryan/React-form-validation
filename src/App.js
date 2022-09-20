import { useRef } from 'react';
import './App.css';

const App = () => {

	const name = useRef();
	const age = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(name.current.value);
		console.log(age.current.value);
	}

  return (
    <div>
			<h1>Working with Forms!!</h1>
			<form onSubmit={handleSubmit}>
				<input
					ref={name}
					type="text"
					name='firstName'
					placeholder='userName'
					/>
				<input
					ref={age}
					type="text"
					name='age'
					placeholder='age'
				/>
				<button>Send</button>
			</form>
    </div>
  );
}

export default App;
