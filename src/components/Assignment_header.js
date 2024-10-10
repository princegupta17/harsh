import { useState } from "react";
import "../css/Assignment_header.css";
import displayIcon from "../assets/Display.svg";
import downIcon from "../assets/down.svg";

const Assignment_header = ({ setGrouping, setSorting }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState("status");
  const [selectedSorting, setSelectedSorting] = useState("title");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGroupingChange = (e) => {
    const value = e.target.value;
    setSelectedGrouping(value);
    setGrouping(value);
    setDropdownOpen(false);
  };

  const handleSortingChange = (e) => {
    const value = e.target.value;
    setSelectedSorting(value);
    setSorting(value);
    setDropdownOpen(false);
  };

  return (
    <header className="kanban-header">
      <nav className="navbar">
        <div className="navbar-controls">
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={toggleDropdown}
              aria-label="Toggle Display Options"
            >
              <img className="displayicon" src={displayIcon} alt="Display" />
              Display
              <img className="downicon" src={downIcon} alt="down arrow" />
            </button>

            {dropdownOpen && (
              <div className="dropdown-content">
                <div className="dropdown-group">
                  <p className="groupingText">Grouping</p>
                  <div className="dropdown-options">
                    <select
                      className="groupSelect"
                      value={selectedGrouping}
                      onChange={handleGroupingChange}
                    >
                      <option value="status">Status</option>
                      <option value="user">User</option>
                      <option value="priority">Priority</option>
                    </select>
                  </div>
                </div>
                <div className="dropdown-group">
                  <p className="ordertext">Order </p>
                  <div className="dropdown-options">
                    <select
                      className="orderSelect"
                      value={selectedSorting}
                      onChange={handleSortingChange}
                    >
                      <option value="title">Title</option>
                      <option value="priority">Priority</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Assignment_header;
