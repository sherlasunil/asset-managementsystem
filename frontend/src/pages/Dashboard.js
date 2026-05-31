function Dashboard() {
  return (
    <div className="container">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3 shadow text-center bg-primary text-white">
            <h6>Total Assets</h6>
            <h2>20</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center bg-success text-white">
            <h6>Assigned</h6>
            <h2>12</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center bg-warning text-dark">
            <h6>Available</h6>
            <h2>8</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;