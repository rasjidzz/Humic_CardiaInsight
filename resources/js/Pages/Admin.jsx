import React, { useState } from 'react';
import '@/../css/docstyle.css'; // Adjust the path based on your directory structure

const patients = [
    { id: 1, name: 'John Doe', age: 30, PKVStatus: 'Yes' },
    { id: 2, name: 'Jane Doe', age: 25, PKVStatus: 'No' },
    { id: 3, name: 'Mary Johnson', age: 40, PKVStatus: 'Yes' },
    { id: 4, name: 'Michael Smith', age: 50, PKVStatus: 'No' },
    { id: 5, name: 'Patricia Brown', age: 35, PKVStatus: 'Yes' },
    { id: 6, name: 'James Wilson', age: 45, PKVStatus: 'No' },
    // Add more patient objects here with PKVStatus
];

const App = () => {
    const [assignedDoctors, setAssignedDoctors] = useState({});
    const [currentPatient, setCurrentPatient] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState('');

    const handleSelectChange = (patientId, event) => {
        const selectedDoctor = event.target.value;
        if (selectedDoctor) {
            const confirmation = window.confirm(`Are you sure you want to assign ${selectedDoctor}? This cannot be undone.`);
            if (confirmation) {
                setAssignedDoctors(prevState => ({
                    ...prevState,
                    [patientId]: selectedDoctor
                }));
            } else {
                event.target.value = '';
            }
        }
    };

    const handleLogout = () => {
        const confirmation = window.confirm('Are you sure you want to logout?');
        if (confirmation) {
            // Handle actual logout logic here
            console.log('Logged out');
        }
    };

    return (
        <div>
            <div className="header">
                <h1>CARDIA INSIGHT</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="container">
                {patients.map(patient => (
                    <div key={patient.id} className="patient-card">
                        <h3>{patient.name}</h3>
                        <p>Age: {patient.age}</p>
                        <p>PKV Status: {patient.PKVStatus}</p>
                        {assignedDoctors[patient.id] ? (
                            <p>{assignedDoctors[patient.id]}</p>
                        ) : (
                            <select
                                className="doctor-select"
                                onChange={event => handleSelectChange(patient.id, event)}
                            >
                                <option value="" disabled selected>Select Doctor</option>
                                <option value="Dr. Smith">Dr. Smith</option>
                                <option value="Dr. Adams">Dr. Adams</option>
                                <option value="Dr. Johnson">Dr. Johnson</option>
                            </select>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;