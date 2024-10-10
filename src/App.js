import { useState, useEffect } from "react";
import "./Assignment_quick.css";
import Assignment_header from "./components/Assignment_header";
import Assignment_board from "./components/Assignment_board";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("grouping") || "status";
  });
  const [sorting, setSorting] = useState(() => {
    return localStorage.getItem("sorting") || "priority";
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sorting", sorting);
  }, [grouping, sorting]);

  return (
    <div className="main">
      {/* eslint-disable-next-line */}
      <Assignment_header
        grouping={grouping}
        sorting={sorting}
        setGrouping={setGrouping}
        setSorting={setSorting}
      />
      {/* eslint-disable-next-line */}
      <Assignment_board
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
};

export default App;
