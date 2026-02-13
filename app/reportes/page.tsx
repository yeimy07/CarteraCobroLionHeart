'use client';
import Sidebar from '@/components/sidebar';

export default function ReportesPage() {
  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">Business Intelligence</h1>
            <p className="text-gym-blue text-[10px] tracking-[0.4em] font-bold opacity-80">REPORTES Y AUDITORÍA ESTRATÉGICA</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-white/10 transition-all flex items-center gap-2">
              <span>📄</span> Exportar PDF
            </button>
            <button className="bg-green-600/20 border border-green-600/40 text-green-500 px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-green-600/30 transition-all flex items-center gap-2">
              <span>📊</span> Descargar Excel
            </button>
          </div>
        </header>

        {/* 1. KPIs DE EFECTIVIDAD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.2em] mb-4">Efectividad de Cobro IA</p>
            <div className="flex items-end gap-4">
              <h3 className="text-5xl font-black text-gym-blue">82%</h3>
              <div className="mb-1 text-[10px] text-green-500 font-bold">↑ 12% vs mes anterior</div>
            </div>
            <p className="text-[10px] text-gray-600 mt-4 leading-relaxed">
              De cada 10 llamadas, 8 clientes realizan el pago o promesa de pago en menos de 24h.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.2em] mb-4">Producto Top Rotación</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gym-blue/10 rounded-xl flex items-center justify-center text-2xl">🥤</div>
              <div>
                <h3 className="text-xl font-black uppercase">Whey Protein Gold</h3>
                <p className="text-gym-blue text-xs font-bold">45 Unidades / mes</p>
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="bg-gym-blue h-full w-[85%]"></div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.2em] mb-4">Créditos Autorizados</p>
            <div className="flex items-end gap-4">
              <h3 className="text-4xl font-black">$2,450,000</h3>
            </div>
            <p className="text-[10px] text-red-500/70 mt-4 font-bold uppercase tracking-tighter">
              ⚠️ Riesgo de cartera: 15% (Bajo)
            </p>
          </div>
        </div>

        {/* 2. TABLA DE AUDITORÍA (QUIÉN MODIFICÓ QUÉ), ESTA ES IMPORTANTE, USARÍA EL LOG DE LA BD QUE SE CREE EN UN FUTURO */}
        <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden shadow-2xl mb-10">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Log de Auditoría de Inventario y Crédito</h4>
            <span className="text-[9px] bg-gym-blue/10 text-gym-blue px-2 py-1 rounded">MODO: ESTRICTO</span>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.02] text-gray-500 uppercase text-[9px]">
              <tr>
                <th className="p-4">Fecha/Hora</th>
                <th className="p-4">Usuario</th>
                <th className="p-4">Acción Realizada</th>
                <th className="p-4">Detalle / Valor</th>
                <th className="p-4">IP/Origen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              <tr>
                <td className="p-4 font-mono opacity-50">12/10 14:30</td>
                <td className="p-4 font-bold">Admin_Juan</td>
                <td className="p-4"><span className="bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded text-[9px]">AJUSTE_STOCK</span></td>
                <td className="p-4">Creatina Platinum (-2 unidades)</td>
                <td className="p-4 text-[10px] text-gray-600">192.168.1.45</td>
              </tr>
              <tr>
                <td className="p-4 font-mono opacity-50">12/10 11:20</td>
                <td className="p-4 font-bold">Manager_Ana</td>
                <td className="p-4"><span className="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded text-[9px]">AUTORIZA_CRED</span></td>
                <td className="p-4">Límite ampliado a $500k (Carlos A.)</td>
                <td className="p-4 text-[10px] text-gray-600">187.23.11.02</td>
              </tr>
              <tr>
                <td className="p-4 font-mono opacity-50">11/10 18:05</td>
                <td className="p-4 font-bold">SISTEMA_IA</td>
                <td className="p-4"><span className="bg-gym-blue/10 text-gym-blue px-2 py-0.5 rounded text-[9px]">CIERRE_PAGO</span></td>
                <td className="p-4">Pago verificado tras llamada IA</td>
                <td className="p-4 text-[10px] text-gray-600">CLOUD_SERVER</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*  MAPA DE CALOR DE COBRANZA IA, PARA ANALIZAR EN QUE HORARIO ES MAS EFECTIVO LLAMAR */}
        <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Mapa de Éxito de Contacto (IA)</h4>
          <div className="flex gap-2 h-20 items-end">
            {[20, 35, 60, 95, 80, 45, 30, 90, 100, 60, 40, 20].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full rounded-t-sm transition-all duration-500 hover:brightness-125" 
                  style={{ 
                    height: `${val}%`, 
                    backgroundColor: val > 80 ? '#00d4ff' : val > 50 ? '#00d4ff66' : '#1a1a1a' 
                  }}
                ></div>
                <span className="text-[8px] text-gray-600 font-bold">{i + 8}h</span>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-gray-500 mt-6 text-center italic">
            El horario de mayor conversión de la IA es entre las **11:00 AM** y las **04:00 PM**.
          </p>
        </div>
      </main>
    </div>
  );
}