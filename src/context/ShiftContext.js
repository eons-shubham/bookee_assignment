import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ShiftContext = createContext();

export const ShiftProvider = ({ children }) => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    fetchShifts();
  }, []);

  const fetchShifts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/shifts");
      setShifts(response.data);
    } catch (error) {
      console.error("Error fetching shifts", error);
    }
  };

  const bookShift = async (id) => {
    try {
      await axios.post(`http://localhost:8080/shifts/${id}/book`);
      fetchShifts();
    } catch (error) {
      console.error("Error booking shift", error);
    }
  };

  const cancelShift = async (id) => {
    try {
      await axios.post(`http://localhost:8080/shifts/${id}/cancel`);
      fetchShifts();
    } catch (error) {
      console.error("Error canceling shift", error);
    }
  };

  return (
    <ShiftContext.Provider value={{ shifts, bookShift, cancelShift }}>
      {children}
    </ShiftContext.Provider>
  );
};

export default ShiftContext;
