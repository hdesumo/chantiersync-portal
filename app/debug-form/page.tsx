"use client";

import { useState } from "react";

export default function DebugFormPage() {
  const [ok, setOk] = useState(false);
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOk(true);
          console.log("SUBMIT OK");
        }}
        className="space-y-3 max-w-sm"
      >
        <input className="border p-2 w-full" placeholder="Test" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {ok && <p className="mt-4 text-green-600">Form submit fonctionne ✅</p>}
    </section>
  );
}
