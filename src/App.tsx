import MainWindow from "./components/MainWindow";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100 overflow-auto">
      <Navigation />

      <div className="flex-grow-1">
        <MainWindow />
      </div>
    </div>
  );
};
export default App;
