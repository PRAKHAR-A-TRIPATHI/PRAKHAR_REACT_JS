import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompForm from './CompForm';
import Home from './Home';

function MainComp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />} />
          <Route
            path="AddUsers/:id"
            element={<CompForm />} />
          <Route
            path="AddUsers"
            element={<CompForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainComp