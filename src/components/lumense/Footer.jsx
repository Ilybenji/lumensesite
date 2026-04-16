
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-void border-t border-vapor/10 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src="https://i.ibb.co/cSyYSksW/lumense2.png"
          alt="Lumense"
          className="h-14 w-auto opacity-40"
        />
        <p className="font-body font-light text-vapor/40 text-xs tracking-wide">
          © {new Date().getFullYear()} Lumense. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}