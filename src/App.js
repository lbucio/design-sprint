import './App.css';
import Card from './components/card/card';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <h1>Lucid Suite</h1>
        <h2>Checkout what our products can do together</h2>

        <div className="card-container">
          <Card>
            Hello
          </Card>
          <Card>
            Hello
          </Card>
        </div>
      </div>

    </div>
  );
}

export default App;
