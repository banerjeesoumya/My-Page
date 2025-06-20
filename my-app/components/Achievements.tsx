import React from "react";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Achievements</h2>
      <ul className="flex flex-col gap-4">
        <li className="bg-black/70 border border-neutral-700 rounded-xl px-4 py-3 text-white text-base font-medium shadow-sm">
          <span className="font-semibold text-green-400">GDG Solution Challenge 2025:</span> Our team was selected among the <span className="font-bold">Top 105 teams</span> globally.
        </li>
        <li className="bg-black/70 border border-neutral-700 rounded-xl px-4 py-3 text-white text-base font-medium shadow-sm">
          <span className="font-semibold text-blue-400">Hacktoberfest 2024:</span> Successfully completed the Hacktoberfest 2024 challenge and earned all badges.
        </li>
      </ul>
    </section>
  );
};

export default Achievements; 