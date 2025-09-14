import React from "react";
import "./HealthCard.css";

function HealthCard({ title, info, grade }) {
  return (
    <div className="health-card">
      <h3>{title}</h3>
      <p>{info}</p>
      <span className="grade">{grade}</span>
    </div>
  );
}

export default HealthCard;
