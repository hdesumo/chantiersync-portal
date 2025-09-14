"use client";

import { useState } from "react";
import DashboardTable from "@/components/DashboardTable";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";

export default function DashboardContent() {
  const [filtre, setFiltre] = useState("Tous les projets");

  const progressData = [
    { mois: "Jan", progression: 10 },
    { mois: "Fév", progression: 25 },
    { mois: "Mar", progression: 45 },
    { mois: "Avr", progression: 60 },
    { mois: "Mai", progression: 75 },
    { mois: "Juin", progression: 90 },
  ];

  const kpiData = [
    { chantier: "Projet A", avancement: 80 },
    { chantier: "Projet B", avancement: 55 },
    { chantier: "Projet C", avancement: 35 },
  ];

  const reports = [
    {
      id: 1,
      titre: "Rapport hebdo – Projet A",
      date: "10/09/2025",
      status: "Validé",
      image: "/agent_chantier.jpeg",
    },
    {
      id: 2,
      titre: "Rapport béton – Projet B",
      date: "08/09/2025",
      status: "En attente",
      image: "/agent_1chantier.jpg",
    },
    {
      id: 3,
      titre: "Réunion chantier – Projet C",
      date: "05/09/2025",
      status: "Validé",
      image: "/chantier_team.jpeg",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-14 px-6">
      <div className="max-w-7xl mx-auto space-y-10">

        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Aperçu du tableau de bord
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Voici un aperçu des indicateurs, graphiques et rapports que vous
            retrouverez sur votre espace ChantierSync.
          </p>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow">
            <p className="text-gray-500">Chantiers actifs</p>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow">
            <p className="text-gray-500">Rapports (30 j)</p>
            <p className="text-3xl font-bold">42</p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow">
            <p className="text-gray-500">Taux de complétion</p>
            <p className="text-3xl font-bold text-green-500">78%</p>
          </div>
        </div>

        {/* Tableau avec filtre */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Suivi des projets</h2>
            <select
              value={filtre}
              onChange={(e) => setFiltre(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm"
            >
              <option>Tous les projets</option>
              <option>Projets actifs</option>
              <option>Projets terminés</option>
              <option>Projets en retard</option>
            </select>
          </div>
          <DashboardTable />
        </div>

        {/* Graphique en barres */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Avancement par projet</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={kpiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="chantier" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avancement" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Courbe d'évolution */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Progression globale</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="progression"
                stroke="#10B981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Rapports récents */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Rapports récents</h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {reports.map((r) => (
              <li key={r.id} className="flex items-center gap-4 py-3">
                <img
                  src={r.image}
                  alt={r.titre}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-semibold">{r.titre}</p>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    r.status === "Validé"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
