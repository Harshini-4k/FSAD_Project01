import React, { useEffect, useState } from "react";

function MyCertificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("certificates")) || [];
    setCertificates(data);
  }, []);

  return (
    <div>
      <h2>My Certificates</h2>

      {certificates.length === 0 ? (
        <p>No certificates added yet.</p>
      ) : (
        certificates.map((cert, index) => (
          <div className="card" key={index}>
            <h3>{cert.name}</h3>
            <p>Organization: {cert.organization}</p>
            <p>Issued Date: {cert.issueDate}</p>
            <p>Expiry Date: {cert.expiryDate}</p>
            <p>Status: {cert.status}</p>

            {cert.file && (
              <p>
                File: <a href={cert.file} target="_blank" rel="noreferrer">View Certificate</a>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default MyCertificates;