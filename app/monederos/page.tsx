'use client';
import { useState } from 'react';
import Sidebar from '@/components/sidebar';

export default function MonederosPage() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  // Simulación de "Cuentas de Clientes"
  const [cuentas] = useState([
    { 
      id: 1, 
      nombre: 'Carlos Arango', 
      saldo: -350000, 
      limiteCredito: 500000,
      tel: '+573001234567',
      historial: [
        { fecha: '2023-10-10', tipo: 'Compra Crédito', concepto: 'Whey Protein Gold', monto: -250000 },
        { fecha: '2023-10-05', tipo: 'Compra Crédito', concepto: 'Creatina Platinum', monto: -100000 },
        { fecha: '2023-09-30', tipo: 'Abono', concepto: 'Pago Efectivo', monto: 150000 },
      ]
    },
    { 
      id: 2, 
      nombre: 'Mariana Vélez', 
      saldo: 120000, 
      limiteCredito: 300000,
      tel: '+573119876543',
      historial: [
        { fecha: '2023-10-12', tipo: 'Recarga', concepto: 'Transferencia', monto: 120000 },
      ]
    },
  ]);

  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold uppercase tracking-tighter italic">Billetera Virtual & Créditos</h1>
          <p className="text-gym-blue text-[10px] tracking-[0.4em] font-bold opacity-80">CENTRO DE GESTIÓN FINANCIERA</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LISTADO DE SALDOS */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex gap-4 mb-6">
              <input 
                type="text" 
                placeholder="Buscar por cliente..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-gym-blue focus:outline-none"
              />
              <button className="bg-gym-blue text-black px-4 py-2 rounded-xl font-bold text-xs uppercase hover:bg-cyan-400 transition-all">
                Recargar Saldo
              </button>
            </div>

            <div className="space-y-3">
              {cuentas.map((c) => (
                <div 
                  key={c.id} 
                  onClick={() => setSelectedWallet(c)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all hover:scale-[1.01] ${
                    selectedWallet?.id === c.id ? 'border-gym-blue bg-gym-blue/10' : 'border-white/5 bg-[#0a0a0a]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">{c.nombre}</h3>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">Límite: ${c.limiteCredito.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-black ${c.saldo < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        ${c.saldo.toLocaleString()}
                      </p>
                      <span className="text-[9px] font-bold opacity-50 uppercase tracking-tighter">Saldo Actual</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DETALLES Y ACCIÓN IA */}
          <div className="lg:col-span-5">
            {selectedWallet ? (
              <div className="space-y-6">
                {/* TARJETA DIGITAL */}
                <div className="relative h-56 w-full rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-20 text-6xl italic font-black">ATHLETIQ</div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <p className="text-gym-blue text-[10px] font-bold tracking-[0.3em] uppercase">Wallet ID</p>
                      <p className="font-mono text-lg tracking-widest mt-1">**** **** **** {selectedWallet.id}099</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold">Titular</p>
                      <p className="text-xl font-bold uppercase tracking-tight">{selectedWallet.nombre}</p>
                    </div>
                  </div>
                </div>

                {/* ACCIÓN DE IA PARA COBRANZA */}
                {selectedWallet.saldo < 0 && (
                  <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-3xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center text-xl animate-pulse">🤖</div>
                      <div>
                        <h4 className="text-sm font-black text-red-500 uppercase">Cobranza IA Requerida</h4>
                        <p className="text-[10px] text-red-500/70">Deuda vencida detectada</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => alert(`Iniciando protocolo de cobranza IA para ${selectedWallet.nombre}...`)}
                      className="w-full bg-red-500 text-white font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                    >
                      Disparar Llamada de Cobro
                    </button>
                  </div>
                )}

                {/* HISTORIAL */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 ml-2">Movimientos Recientes</h4>
                  <div className="space-y-3">
                    {selectedWallet.historial.map((h, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                        <div>
                          <p className="text-[10px] font-bold uppercase">{h.concepto}</p>
                          <p className="text-[9px] text-gray-500">{h.fecha} • {h.tipo}</p>
                        </div>
                        <span className={`text-[11px] font-mono font-bold ${h.monto < 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {h.monto < 0 ? '' : '+'}${Math.abs(h.monto).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full border border-dashed border-white/10 rounded-3xl flex items-center justify-center text-gray-600 text-[10px] uppercase tracking-widest p-10 text-center">
                Selecciona un cliente para gestionar su monedero
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}