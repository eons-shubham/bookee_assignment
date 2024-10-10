import React, { useContext } from "react";
import ShiftContext from "../context/ShiftContext";

const MyShifts = () => {
  const { shifts, cancelShift } = useContext(ShiftContext);

  const bookedShifts = shifts.filter((shift) => shift.booked);

  return (
    <div>
      <h2>My Shifts</h2>
      {bookedShifts.length > 0 ? (
        bookedShifts.map((shift) => (
          <div key={shift.id}>
            <p>Area: {shift.area}</p>
            <p>Date: {new Date(shift.startTime).toLocaleDateString()}</p>
            <button onClick={() => cancelShift(shift.id)}>Cancel Shift</button>
          </div>
        ))
      ) : (
        <p>No booked shifts</p>
      )}
    </div>
  );
};

export default MyShifts;
