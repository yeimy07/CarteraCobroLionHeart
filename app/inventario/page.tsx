'use client';
import { useState } from 'react';
import Sidebar from '@/components/sidebar';

export default function InventarioPage() {
  // Estado para controlar el Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Datos simulados (Estado que actúa como "Base de Datos" temporal)
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Whey Protein Gold', stock: 15, precio: 250000, desc: 'Proteína de alta calidad' },
    { id: 2, nombre: 'Creatina Platinum', stock: 3, precio: 120000, desc: 'Creatina monohidratada' },
  ]);

  // Estado para el formulario
  const [formData, setFormData] = useState({ id: null, nombre: '', stock: 0, precio: 0, desc: '' });

  const abrirModal = (producto = null) => {
    if (producto) {
      setEditMode(true);
      setFormData(producto);
    } else {
      setEditMode(false);
      setFormData({ id: null, nombre: '', stock: 0, precio: 0, desc: '' });
    }
    setIsModalOpen(true);
  };

  const guardarProducto = () => {
    if (editMode) {
      setProductos(productos.map(p => p.id === formData.id ? formData : p));
    } else {
      setProductos([...productos, { ...formData, id: Date.now() }]);
    }
    
    // Simulación de notificación al proveedor
    if (formData.stock <= 5) {
      alert(`🚨 Alerta de Stock Crítico: Se ha enviado una notificación automática al proveedor para el producto: ${formData.nombre}`);
    }
    
    setIsModalOpen(false);
  };

  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <Sidebar />
      
      <main className="flex-1 p-10 relative">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold uppercase tracking-tighter italic">Gestión de Inventario</h1>
          <button 
            onClick={() => abrirModal()}
            className="bg-gym-blue text-black px-6 py-2 rounded-lg font-black uppercase text-xs hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]"
          >
            + Nuevo Producto
          </button>
        </header>

        {/* BUSCADOR Y FILTROS */}
        <div className="bg-white/5 p-4 rounded-xl mb-8 flex gap-4 border border-white/10">
          <input 
            type="text" 
            placeholder="Buscar producto (Proteína, Creatina...)" 
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-gym-blue text-sm"
          />
          <select className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-gray-400 text-sm">
            <option>Categoría: Suplementos</option>
            <option>Categoría: Ropa</option>
          </select>
        </div>

        {/* TABLA DE PRODUCTOS */}
        <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-gym-blue uppercase text-[10px] tracking-[0.2em]">
              <tr>
                <th className="p-5">Imagen</th>
                <th className="p-5">Producto</th>
                <th className="p-5 text-center">Stock</th>
                <th className="p-5">Precio</th>
                <th className="p-5 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {productos.map((prod) => (
                <tr key={prod.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5"><div className="w-12 h-12 bg-white/10 rounded-lg border border-white/5 flex items-center justify-center text-[10px] text-gray-500 italic">IMG</div></td>
                  <td className="p-5">
                    <div className="font-bold text-white text-base">{prod.nombre}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">{prod.desc}</div>
                  </td>
                  <td className="p-5 text-center">
                    <span className={`font-black text-sm px-3 py-1 rounded-full ${prod.stock <= 5 ? 'bg-red-500/20 text-red-500 animate-pulse' : 'text-gym-blue'}`}>
                      {prod.stock} UNIDADES
                    </span>
                  </td>
                  <td className="p-5 font-mono text-gray-300">${prod.precio.toLocaleString()}</td>
                  <td className="p-5 text-center">
                    <button 
                      onClick={() => abrirModal(prod)}
                      className="text-[10px] bg-white/10 px-4 py-2 rounded-md hover:bg-gym-blue hover:text-black transition-all font-bold uppercase"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- MODAL DE PRODUCTO (NUEVO / EDITAR) --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
            
            <div className="relative bg-[#0f0f0f] border border-gym-blue/30 w-full max-w-md rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-black italic text-gym-blue uppercase tracking-tighter mb-6">
                {editMode ? 'Editar Producto' : 'Registrar Nuevo Producto'}
              </h2>
              
              <div className="space-y-5">
                {/* SUBIR FOTO SIMULADO */}
                <div className="w-full h-32 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-white/5 cursor-pointer hover:border-gym-blue/40 transition-colors">
                  <span className="text-2xl">📸</span>
                  <span className="text-[9px] uppercase font-bold text-gray-500 mt-2">Click para subir imagen</span>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-500 ml-2">Nombre del Producto</label>
                  <input 
                    type="text" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gym-blue focus:outline-none mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 ml-2">Stock Actual</label>
                    <input 
                      type="number" 
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gym-blue focus:outline-none mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 ml-2">Precio ($)</label>
                    <input 
                      type="number" 
                      value={formData.precio}
                      onChange={(e) => setFormData({...formData, precio: parseInt(e.target.value)})}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gym-blue focus:outline-none mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-500 ml-2">Descripción Corta</label>
                  <textarea 
                    value={formData.desc}
                    onChange={(e) => setFormData({...formData, desc: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gym-blue focus:outline-none mt-1 h-20"
                  ></textarea>
                </div>

                <button 
                  onClick={guardarProducto}
                  className="w-full bg-gym-blue text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-xs shadow-lg hover:bg-cyan-400 active:scale-95 transition-all mt-4"
                >
                  {editMode ? 'Actualizar y Guardar' : 'Crear Producto'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}