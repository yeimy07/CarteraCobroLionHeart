'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// CODIGO PARA LA OPCIÓN DE PANEL DE CONTROL, PARA EL MENÚ
export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Inventario', path: '/inventario', icon: '📦' },
    { name: 'Miembros', path: '/miembros', icon: '👥' },
    { name: 'Monederos', path: '/monederos', icon: '💳' },
    { name: 'Cobranza IA', path: '/cobranzaIA', icon: '🤖' },
    { name: 'Reportes', path: '/reportes', icon: '📈' },
  ];

  return (
    <aside className="w-72 bg-black/90 backdrop-blur-xl border-r border-white/10 min-h-screen p-8 flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
      {/* LOGO SECCIÓN */}
      <div className="flex flex-col mb-12 group cursor-pointer">
        <h2 className="text-gym-blue font-black italic text-3xl tracking-tighter transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">
          LION HEART
        </h2>
        <div className="h-[2px] w-12 bg-gym-blue mt-1 transition-all duration-500 group-hover:w-full"></div>
        <span className="text-[9px] text-gym-blue/40 tracking-[0.5em] font-bold mt-2 uppercase">
          Elite CRM & Systems
        </span>
      </div>

      {/* NAVEGACIÓN */}
      <nav className="flex flex-col gap-3 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive 
                ? 'bg-gym-blue/10 text-gym-blue border border-gym-blue/20' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {/* Indicador lateral activo */}
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-gym-blue rounded-r-full shadow-[0_0_15px_rgba(0,212,255,1)]"></div>
              )}
              
              <span className={`text-lg transition-transform duration-300 group-hover:scale-110 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                {item.icon}
              </span>

              <span className="font-bold uppercase text-[11px] tracking-[0.2em]">
                {item.name}
              </span>

              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-r from-gym-blue/0 via-gym-blue/5 to-gym-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
          );
        })}
      </nav>

      {/* PIE DE SIDEBAR / CERRAR SESIÓN */}
      <div className="mt-auto pt-8 border-t border-white/5">
        <Link 
          href="/" 
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all duration-300 group"
        >
          <span className="text-lg group-hover:rotate-12 transition-transform">🚪</span>
          <span className="font-bold uppercase text-[10px] tracking-widest">
            Finalizar Sesión
          </span>
        </Link>
      </div>
    </aside>
  );
}