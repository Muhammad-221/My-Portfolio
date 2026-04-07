import ErrorPage from "./pages/Error";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter basename="/My-Portfolio">
      <Routes>
        <Route index element={<Landing/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;