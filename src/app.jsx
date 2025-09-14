import React from "react";
import HealthCard from "./components/HealthCard";
import "./app.css";

function App() {
  return (
    <div className="app">

   
      
      <div className="left-panel"></div>

      
      <div className="right-panel">
        <h2 className="title">
          Résultant en une vie plus saine, équilibrée et durable
        </h2>

        <div className="cards-container">
          <HealthCard title="Nutrition" info="0 problèmes détectés" grade="A" />
          <HealthCard title="Activité" info="30 min / jour" grade="A" />
          <HealthCard title="Sommeil" info="8 heures recommandées" grade="B" />
          <HealthCard title="Stress" info="Niveau bas" grade="A" />
          <HealthCard title="Hydratation" info="2L par jour" grade="A" />
          <HealthCard title="Check-up" info="Prochain : 6 mois" grade="A" />
        </div>
      </div>
    </div>
  );
}

export default App;
