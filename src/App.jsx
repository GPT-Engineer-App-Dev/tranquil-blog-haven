import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import DeletePost from "./pages/DeletePost.jsx"; // Import the DeletePost component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/delete-post/:id" element={<DeletePost />} /> {/* Add route for deleting a post */}
      </Routes>
    </Router>
  );
}

export default App;
