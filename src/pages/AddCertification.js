import React, { useState } from "react";
import axios from "axios";

function AddCertification({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    issueDate: "",
    expiryDate: "",
    status: ""
  });

  const [file, setFile] = useState(null);

  const submit = async () => {
    const data = new FormData();

    Object.keys(form).forEach(key => {
      data.append(key, form[key]);
    });

    data.append("certificate", file);

    await axios.post("http://localhost:5000/add-certification", data);

    alert("Certification Added");
    refresh();
  };

  return (
    <div>
      <h2>Add Certification</h2>

      <input placeholder="Certification Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>

      <input placeholder="Organization"
        onChange={(e)=>setForm({...form,organization:e.target.value})}/>

      <input type="date"
        onChange={(e)=>setForm({...form,issueDate:e.target.value})}/>

      <input type="date"
        onChange={(e)=>setForm({...form,expiryDate:e.target.value})}/>

      <select onChange={(e)=>setForm({...form,status:e.target.value})}>
        <option>Status</option>
        <option>Active</option>
        <option>Expired</option>
      </select>

      <input type="file"
        onChange={(e)=>setFile(e.target.files[0])}/>

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default AddCertification;