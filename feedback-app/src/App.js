import Header from "./Components/Header";
import { useState } from "react";
import FeedbackData from "./FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
