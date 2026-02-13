'use client';
import { useState } from 'react';
import Sidebar from '@/components/sidebar';

export default function MiembrosPage() {
  const [selectedMiembro, setSelectedMiembro] = useState(null);

  // Datos simulados de clientes
  const [miembros] = useState([
    { 
      id: 1, 
      nombre: 'Carlos Arango', 
      email: 'carlos@email.com', 
      tel: '+573001234567', 
      estado: 'Activo', 
      plan: 'Premium',
      ultimaAsistencia: 'Hoy, 08:00 AM',
      historial: [
        { fecha: '2023-10-01', item: 'Mensualidad Oct', precio: '$150.000' },
        { fecha: '2023-09-28', item: 'Whey Protein Gold', precio: '$250.000' }
      ]
    },
    { 
      id: 2, 
      nombre: 'Mariana Vélez', 
      email: 'mariana@email.com', 
      tel: '+573119876543', 
      estado: 'Mora', 
      plan: 'Básico',
      ultimaAsistencia: 'Hace 5 días',
      historial: [
        { fecha: '2023-09-01', item: 'Mensualidad Sep', precio: '$100.000' }
      ]
    },
  ]);

  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tighter italic">Base de Miembros</h1>
            <p className="text-gym-blue text-[10px] tracking-[0.3em] font-bold">GESTIÓN DE COMUNIDAD ATHLETIQ</p>
          </div>
          <button className="bg-gym-blue text-black px-6 py-2 rounded-lg font-black uppercase text-xs hover:bg-cyan-400 transition-all">
            + Registrar Atleta
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LISTA DE MIEMBROS */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6">
              <input 
                type="text" 
                placeholder="Buscar por nombre, cédula o teléfono..." 
                className="w-full bg-transparent px-4 py-2 focus:outline-none text-sm"
              />
            </div>

            <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-gym-blue uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="p-5">Miembro</th>
                    <th className="p-5">Plan / Estado</th>
                    <th className="p-5">Teléfono (IA)</th>
                    <th className="p-5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {miembros.map((m) => (
                    <tr key={m.id} className="hover:bg-gym-blue/5 transition-colors group">
                      <td className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-gym-blue">
                            {m.nombre.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold">{m.nombre}</p>
                            <p className="text-[10px] text-gray-500">{m.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5">
                        <p className="font-bold text-xs uppercase">{m.plan}</p>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${m.estado === 'Activo' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                          {m.estado.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-5 font-mono text-xs text-gray-400">
                        {m.tel}
                      </td>
                      <td className="p-5 text-right">
                        <button 
                          onClick={() => setSelectedMiembro(m)}
                          className="text-gym-blue hover:underline text-xs font-bold uppercase"
                        >
                          Ver Detalles
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PANEL DE DETALLES (HISTORIAL Y ACCIONES) */}
          <div className="lg:col-span-1">
            {selectedMiembro ? (
              <div className="bg-[#0a0a0a] border border-gym-blue/30 rounded-3xl p-8 sticky top-10 shadow-[0_0_40px_rgba(0,212,255,0.05)]">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gym-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl border border-gym-blue/30">
                    👤
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">{selectedMiembro.nombre}</h3>
                  <p className="text-gym-blue text-xs font-bold uppercase tracking-widest">{selectedMiembro.plan}</p>
                </div>

                <div className="space-y-6">
                  {/* ACCIÓN DE IA */}
                  <button 
                    onClick={() => alert(`Llamando a ${selectedMiembro.tel} vía Athletiq IA...`)}
                    className="w-full bg-white/5 border border-gym-blue/40 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gym-blue/10 transition-all group"
                  >
                    <span className="text-lg group-hover:animate-bounce">🤖</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gym-blue">Solicitar Cobro IA</span>
                  </button>

                  {/* INFO CONTACTO */}
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <p className="text-[9px] text-gray-500 uppercase font-bold mb-3 tracking-widest">Datos de contacto</p>
                    <div className="text-xs space-y-2">
                      <p><span className="text-gray-600">Tel:</span> {selectedMiembro.tel}</p>
                      <p><span className="text-gray-600">Last Check-in:</span> {selectedMiembro.ultimaAsistencia}</p>
                    </div>
                  </div>

                  {/* HISTORIAL DE COMPRAS */}
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase font-bold mb-3 tracking-widest ml-2">Historial de Compras</p>
                    <div className="space-y-2">
                      {selectedMiembro.historial.map((h, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                          <span className="text-[10px] font-bold">{h.item}</span>
                          <span className="text-[10px] font-mono text-gym-blue">{h.precio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full border border-dashed border-white/10 rounded-3xl flex items-center justify-center text-gray-600 text-xs italic p-10 text-center">
                Selecciona un miembro para ver su historial y contactar con IA
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}