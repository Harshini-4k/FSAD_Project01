import React, { useState } from "react";

function AddCertification({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    issueDate: "",
    expiryDate: "",
    status: ""
  });

  const [file, setFile] = useState(null);

  const submit = () => {
    if (!form.name || !form.organization) {
      alert("Please fill all required fields");
      return;
    }

    // Get existing certificates
    const certificates =
      JSON.parse(localStorage.getItem("certificates")) || [];

    // New certificate object
    const newCertificate = {
      name: form.name,
      org: form.organization, // important for MyCertificates.js
      issueDate: form.issueDate,
      expiryDate: form.expiryDate,
      status: form.status,
      fileName: file ? file.name : null
    };

    certificates.push(newCertificate);

    // Save to localStorage
    localStorage.setItem("certificates", JSON.stringify(certificates));

    alert("Certification Added Successfully");

    // Reset form
    setForm({
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      status: ""
    });

    setFile(null);

    if (refresh) refresh();
  };

  return (
    <div className="form-container">
      <h2>Add Certification</h2>

      <input
        placeholder="Certification Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Organization"
        value={form.organization}
        onChange={(e) => setForm({ ...form, organization: e.target.value })}
      />

      <input
        type="date"
        value={form.issueDate}
        onChange={(e) => setForm({ ...form, issueDate: e.target.value })}
      />

      <input
        type="date"
        value={form.expiryDate}
        onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Expired">Expired</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && <p>Uploaded: {file.name}</p>}

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default AddCertification;