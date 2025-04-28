import ErrorBoundary from "./pages/components/errorBoundary/errorBoundary";
import MainPage from "./pages/mainPage";
import "./App.css";

function App() {
  return (<ErrorBoundary>
  <MainPage />;
  </ErrorBoundary>)
}

export default App;
