import { useState } from 'react';
import './App.css';

const App = () => {
	const[user, setUser] = useState({name:"",age:""})

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
	}

  return (
    <div>
			<h1>Working with Forms!!</h1>
			<form onSubmit={handleSubmit}>
				<input
					value={user.name}
					type="text"
					name='firstName'
					placeholder='userName'
					onChange={(e) =>  setUser({ ...user, name: e.target.value })}
					/>
				<input
					value={user.age}
					type="text"
					name='age'
					placeholder='age'
					onChange={(e) =>  setUser({ ...user, age: e.target.value })}
				/>
				<button>Send</button>
			</form>
    </div>
  );
}

export default App;
