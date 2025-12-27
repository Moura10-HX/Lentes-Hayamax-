"use client"; // Importante para interatividade

import Link from "next/link";
import { User } from "lucide-react"; // Usando ícone padrão, ou remova se não tiver lucide-react

export default function LoginButton() {
  return (
    <Link href="/login" className="no-underline">
      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5">
        <User size={18} />
        <span>Área do Lojista</span>
      </button>
    </Link>
  );
}