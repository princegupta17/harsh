import "../css/Assignment_card.css";
import noPriorityIcon from "../assets/No-priority.svg";
import urgentIcon from "../assets/SVG - Urgent Priority colour.svg";
import highIcon from "../assets/Img - High Priority.svg";
import mediumIcon from "../assets/Img - Medium Priority.svg";
import lowIcon from "../assets/Img - Low Priority.svg";

import todoIcon from "../assets/To-do.svg";
import inProgressIcon from "../assets/in-progress.svg";
import doneIcon from "../assets/Done.svg";
import backlogIcon from "../assets/Backlog.svg";
import cancelIcon from "../assets/Cancelled.svg";

const priorityIcons = {
  0: noPriorityIcon,
  4: urgentIcon,
  3: highIcon,
  2: mediumIcon,
  1: lowIcon,
};

const statusIcons = {
  Todo: todoIcon,
  "In progress": inProgressIcon,

  Backlog: backlogIcon,
  Done: doneIcon,
  Cancel: cancelIcon,
};

const array = {
  "usr-1": "Anoop",
  "usr-2": "Yogesh",
  "usr-3": "Shankar",
  "usr-4": "Ramesh",
  "usr-5": "Suresh",
};

const Assignment_card = ({ ticket }) => {
  const statusIcon = statusIcons[ticket.status] || null;
  const priorityIcon = priorityIcons[ticket.priority] || null;
  const userID = ticket.userId;
  const userAvatar = require(`../assets/${array[userID]}.jpg`);
  return (
    <div className="kanban-card">
      <div className="kanban-card-header">
        <div className="idRow">
          <p className="ticketid">{ticket.id}</p>
          <div className="avatar-container">
            <img className="avatar" src={userAvatar} alt="" />
            <div className="online"></div>
          </div>
        </div>

        <div className="title-row">
          {statusIcon && (
            <div className="status-icon">
              <img src={statusIcon} alt={ticket.status} />
            </div>
          )}
          <div className="title">{ticket.title}</div>
        </div>
      </div>
      <div className="kanban-card-footer">
        <div className="tag-container">
          <img src={priorityIcon} alt="manual" className="manual-icon" />
          <p className="tag">{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Assignment_card;
