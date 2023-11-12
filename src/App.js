import Dashboard from './Component/Dashboard';

function App() {
  console.log(process.env.REACT_APP_QUIZE_DATA);
  return (
      <main>
        <Dashboard/>
      </main>
  );
}

export default App;