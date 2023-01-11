import { Container, Input, Button } from "./styles/Index";

function App() {
	return (
		<>
			<Container>
				<h1 className="title">TO-DO LIST</h1>
				<div>
					<Input />
					<Button>Add</Button>
				</div>
			</Container>
		</>
	);
}

export default App;
