import React, { useEffect, useState } from 'react';
import './LeadList.css';
import { FaTrash, FaCheck, FaPen } from 'react-icons/fa';

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [formData, setFormData] = useState({ name:'', email:'', source:'', status:'new' });

  const fetchLeads = async () => {
    const res = await fetch('http://localhost:5000/api/leads');
    setLeads(await res.json());
  };

  useEffect(() => { fetchLeads(); }, []);

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/leads',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)
    });
    setFormData({ name:'', email:'', source:'', status:'new' });
    fetchLeads();
  };

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/leads/${id}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({status})
    });
    fetchLeads();
  };

  const deleteLead = async id => {
    await fetch(`http://localhost:5000/api/leads/${id}`, { method:'DELETE' });
    fetchLeads();
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Mini CRM Dashboard</h1>
      </header>

      <section className="cards">
        <div className="card">
          <h3>Total Leads</h3>
          <p>{leads.length}</p>
        </div>

        <div className="card">
          <h3>Converted</h3>
          <p>{leads.filter(l=>l.STATUS==='converted').length}</p>
        </div>
      </section>

      <section className="content">
        {/* Form */}
        <form className="lead-form" onSubmit={handleSubmit}>
          <h2>Add New Lead</h2>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="source" placeholder="Source" value={formData.source} onChange={handleChange} required />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
          <button type="submit" className="btn">Add Lead</button>
        </form>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>ID</th><th>Name</th><th>Email</th><th>Source</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.ID}>
                  <td>{lead.ID}</td>
                  <td>{lead.NAME}</td>
                  <td>{lead.EMAIL}</td>
                  <td>{lead.SOURCE}</td>
                  <td>{lead.STATUS}</td>
                  <td className="actions">
                    <button onClick={()=>updateStatus(lead.ID,'contacted')}><FaCheck /></button>
                    <button onClick={()=>updateStatus(lead.ID,'converted')}><FaPen /></button>
                    <button onClick={()=>deleteLead(lead.ID)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}