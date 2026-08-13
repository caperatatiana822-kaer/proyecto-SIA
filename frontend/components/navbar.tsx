"use client";

import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold">
          SIA
        </div>

        <div>
          <h1 className="text-sm font-semibold text-gray-900">
            Sistema de Información de Asistencias
          </h1>
          <p className="text-xs text-gray-500">
            Control de aprendices y asistencias
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 border-l pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
            <User className="h-5 w-5 text-gray-600" />
          </div>

        </div>
      </div>
    </header>
  );
}