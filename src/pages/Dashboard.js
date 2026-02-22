import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="header">
        <h1>Dashboard</h1>
        <p>Welcome to your Certification Management System</p>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h3>12</h3>
          <p>Total Certifications</p>
        </div>

        <div className="card">
          <h3>3</h3>
          <p>Expiring Soon</p>
        </div>

        <div className="card">
          <h3>5</h3>
          <p>Renewed Certifications</p>
        </div>

        <div className="card">
          <h3>2</h3>
          <p>Pending Upload</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;