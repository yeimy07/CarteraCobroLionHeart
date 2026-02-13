'use client';
import { useState } from 'react';
import Sidebar from '@/components/sidebar';

// ESTE SOLO ES EL DISEÑO DE COMO SE VERIA LA IA IMPLEMENTADA, HASTA EL MOMENTO HE MIRADO LAS OPCIONES 
// DE USAR VAPI O BLAND API, ESTA A DISCUSIÓN, ESTA SOLO ES LA MAQUETACIÓN
export default function CobranzaIAPage() {
  const [isCalling, setIsCalling] = useState(false);

  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">Centro de Control IA</h1>
            <p className="text-gym-blue text-[10px] tracking-[0.4em] font-bold opacity-80">CONFIGURACIÓN DE AGENTE DE VOZ</p>
          </div>
          <div className="bg-gym-blue/10 border border-gym-blue/30 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gym-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gym-blue"></span>
            </span>
            <span className="text-[10px] font-black text-gym-blue uppercase">Vapi System Online</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PANEL IZQUIERDO: CONFIGURACIÓN */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 italic">Programación de Jornada</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-[9px] text-gray-500 uppercase font-bold block mb-2">Hora de Inicio</label>
                  <input type="time" defaultValue="09:00" className="w-full bg-black border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-gym-blue outline-none" />
                </div>
                <div>
                  <label className="text-[9px] text-gray-500 uppercase font-bold block mb-2">Días de Operación</label>
                  <div className="flex gap-2">
                    {['L','M','M','J','V'].map(d => (
                      <div key={d} className="w-8 h-8 rounded-lg bg-gym-blue/10 border border-gym-blue/20 flex items-center justify-center text-[10px] font-bold text-gym-blue">{d}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 italic">Script del Agente (Prompt)</h4>
              <textarea 
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-[10px] text-gray-400 h-40 focus:border-gym-blue outline-none leading-relaxed"
                defaultValue={"Eres Sofía de Athletiq Gym. Tu objetivo es recordar amablemente el pago vencido. Si el cliente pide hablar con alguien, transfiere al +57300..."}
              />
            </div>
          </div>

          {/* PANEL DERECHO: MONITOR EN VIVO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                <h4 className="text-xs font-bold uppercase tracking-widest">Llamadas en Curso (Real-time)</h4>
                <div className="px-3 py-1 bg-gym-blue text-black text-[9px] font-black rounded-full">3 ACTIVAS</div>
              </div>
              
              <div className="p-6 space-y-4">
                {[
                  { user: "Ricardo Mesa", status: "Hablando...", time: "1:45", intent: "Promesa de pago" },
                  { user: "Elena Gómez", status: "Transfiriendo...", time: "0:20", intent: "Pidió hablar con humano" },
                  { user: "Andrés Soto", status: "Buzón de voz", time: "0:05", intent: "No contestó" }
                ].map((call, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${call.status === "Hablando..." ? "bg-green-500 animate-pulse" : "bg-gym-blue"}`}></div>
                      <div>
                        <p className="text-xs font-bold uppercase">{call.user}</p>
                        <p className="text-[9px] text-gray-500 tracking-widest uppercase">{call.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono text-gym-blue">{call.time}</p>
                      <p className={`text-[9px] font-black uppercase ${call.intent === "Pidió hablar con humano" ? "text-orange-400" : "text-gray-400"}`}>
                        {call.intent}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*  UN PLUS: ANALÍTICA RÁPIDA */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <p className="text-[9px] text-gray-500 uppercase font-bold mb-2">Tasa de Respuesta</p>
                <h3 className="text-3xl font-black italic">68%</h3>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <p className="text-[9px] text-gray-500 uppercase font-bold mb-2">Conversión de Cobro</p>
                <h3 className="text-3xl font-black italic text-gym-blue">$1.2M</h3>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}