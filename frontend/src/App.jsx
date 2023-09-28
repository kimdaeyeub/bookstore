import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
      </Routes>
    </>
  );
}

export default App;
