'use client';
import Sidebar from '@/components/sidebar';

export default function DashboardPage() {
  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto">
        {/* HEADER CON STATUS DE IA */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter italic">Panel de Control</h1>
            <p className="text-gym-blue text-xs tracking-[0.4em] font-bold opacity-80 mt-1">OPERACIONES EN VIVO</p>
          </div>
          <div className="flex items-center gap-3 bg-gym-blue/5 border border-gym-blue/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-gym-blue rounded-full animate-pulse shadow-[0_0_10px_#00d4ff]"></div>
            <span className="text-[10px] font-bold tracking-widest text-gym-blue">IA AGENT: ACTIVO</span>
          </div>
        </header>

        {/* 1. TARJETAS PRINCIPALES (Métricas solicitadas) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          {/* VENTAS DEL DÍA */}
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-gym-blue opacity-10 text-6xl group-hover:scale-110 transition-transform">💰</div>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Ventas de Hoy</p>
            <h3 className="text-3xl font-black">$1,850,000</h3>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-gym-blue h-full w-[70%]"></div>
              </div>
              <span className="text-[10px] text-gym-blue font-bold">70%</span>
            </div>
          </div>

          {/* CARTERA POR COBRAR */}
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-red-500 opacity-10 text-6xl group-hover:scale-110 transition-transform">📉</div>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Cartera por Cobrar</p>
            <h3 className="text-3xl font-black text-red-500">$840,000</h3>
            <p className="text-[9px] text-red-500/50 font-bold mt-4 uppercase tracking-tighter">12 Facturas vencidas</p>
          </div>

          {/* LLAMADAS IA */}
          <div className="bg-gradient-to-br from-gym-blue/10 to-transparent border border-gym-blue/20 p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-gym-blue opacity-20 text-6xl group-hover:scale-110 transition-transform">🤖</div>
            <p className="text-gym-blue text-[10px] uppercase font-bold tracking-widest mb-2">Llamadas IA Hoy</p>
            <h3 className="text-3xl font-black">48</h3>
            <p className="text-[9px] text-gym-blue/50 font-bold mt-4 uppercase tracking-tighter">85% Efectividad de cobro</p>
          </div>

          {/* PLUS: MIEMBROS EN SALA */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-center">
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">Aforo en Tiempo Real</p>
            <div className="flex items-end gap-2">
              <h3 className="text-4xl font-black">32</h3>
              <span className="text-gray-600 font-bold mb-1">/ 50</span>
            </div>
            <div className="flex gap-1 mt-3">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`h-2 flex-1 rounded-sm ${i < 6 ? 'bg-gym-blue' : 'bg-white/10'}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. SECCIÓN DE GRÁFICAS RÁPIDAS (MAQUETADAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* GRÁFICA DE VENTAS (Simulada con Barras) */}
          <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Flujo de Ventas (Últimas 6 horas)</h4>
              <span className="text-gym-blue text-[10px] font-bold">PROMEDIO: $300k/hr</span>
            </div>
            <div className="flex items-end justify-between h-40 gap-4">
              {[40, 70, 45, 90, 65, 80].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div 
                    style={{ height: `${height}%` }} 
                    className="w-full bg-gym-blue/20 group-hover:bg-gym-blue transition-all rounded-t-lg relative"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] text-gym-blue font-bold transition-opacity">
                      ${height}k
                    </div>
                  </div>
                  <span className="text-[9px] text-gray-600 font-bold">{i + 8}:00</span>
                </div>
              ))}
            </div>
          </div>

          {/* ÚLTIMAS GESTIONES DE LA IA */}
          <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Actividad Reciente de Cobranza IA</h4>
            <div className="space-y-4">
              {[
                { name: 'Juan Villegas', status: 'Promesa de Pago', time: 'hace 5 min' },
                { name: 'Maria Lopez', status: 'Llamada Finalizada', time: 'hace 12 min' },
                { name: 'Carlos Ruiz', status: 'Re-agendado', time: 'hace 25 min' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-gym-blue/30 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gym-blue flex items-center justify-center text-black font-black text-xs italic">IA</div>
                    <div>
                      <p className="text-xs font-bold uppercase">{item.name}</p>
                      <p className="text-[9px] text-gym-blue font-bold tracking-widest">{item.status}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-600 font-bold italic">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}