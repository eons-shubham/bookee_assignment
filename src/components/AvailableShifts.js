import React, { useState, useContext } from "react";
import ShiftContext from "../context/ShiftContext";

const AvailableShifts = () => {
  const { shifts, bookShift, cancelShift } = useContext(ShiftContext);
  const [filterCity, setFilterCity] = useState("");

  const filteredShifts = shifts.filter(
    (shift) => shift.area.includes(filterCity) && !shift.booked
  );

  return (
    <div>
      <h2>Available Shifts</h2>
      <select
        value={filterCity}
        onChange={(e) => setFilterCity(e.target.value)}
      >
        <option value="">All</option>
        <option value="Helsinki">Helsinki</option>
        <option value="Tampere">Tampere</option>
        <option value="Turku">Turku</option>
      </select>

      {filteredShifts.length > 0 ? (
        filteredShifts.map((shift) => (
          <div key={shift.id}>
            <p>Area: {shift.area}</p>
            <p>Date: {new Date(shift.startTime).toLocaleDateString()}</p>
            <button onClick={() => bookShift(shift.id)}>Book Shift</button>
          </div>
        ))
      ) : (
        <p>No available shifts</p>
      )}
    </div>
  );
};

export default AvailableShifts;
