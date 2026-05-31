import { useState } from "react";

function Tickets() {
  const [issue, setIssue] = useState("");

  const handleSubmit = () => {
    alert("Ticket Created: " + issue);
    setIssue("");
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <input
        placeholder="Enter issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Tickets;