/* Este  es el codigo para el inicio de sesión */


'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden font-sans">
      
      {/* FONDO (gim.jpg) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/gim.jpg" 
          alt="Gym Background" 
          fill 
          className="object-cover opacity-30 blur-[2px]"
          priority
        />
      </div>

      {/*  CONTENEDOR DEL LOGIN  */}
      <div className="relative z-10 w-[380px] p-[2px] rounded-3xl bg-gym-blue shadow-[0_0_50px_rgba(0,212,255,0.2)]">
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl rounded-3xl px-8 py-10 border border-white/10 flex flex-col items-center">
          
          {/* LOGO, IMAGEN (man.jpg) */}
          <div className="relative w-28 h-28 mb-2">
            <Image 
              src="/men.jpg" 
              alt="Logo Man" 
              fill 
              className="object-contain drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]"
            />
          </div>

          {/*  LOGO- INICIO DE SESIÓN- Y ALGUNAS FRASES */}
          <div className="text-center mb-8">
            <h1 className="text-gym-blue text-3xl font-black tracking-tighter uppercase italic leading-none">
              LION HEART
            </h1>
            <p className="text-gym-blue text-[8px] font-bold tracking-[0.4em] uppercase opacity-80 mt-1">
              CRM & OPERATIONS
            </p>
          </div>

          <h2 className="text-white text-sm font-bold uppercase tracking-[0.3em] mb-8 w-full border-b border-white/10 pb-2 text-center">
            INICIA SESIÓN
          </h2>

          {/* FORMULARIO DE INGRESO, USUARIO YCONTRASEÑA */}
          <form 
            className="space-y-6 w-full" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative border-b border-white/20 focus-within:border-gym-blue transition-colors">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gym-blue">👤</span>
              <input 
                type="text" 
                className="w-full bg-transparent py-2 pl-8 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                placeholder="USUARIO"
              />
            </div>

            <div className="relative border-b border-white/20 focus-within:border-gym-blue transition-colors">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gym-blue">🔒</span>
              <input 
                type="password" 
                className="w-full bg-transparent py-2 pl-8 pr-8 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                placeholder="CONTRASEÑA"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gym-blue opacity-50 text-xs">🔒</span>
            </div>

            {/* BOTÓN DE ENTRAR, Y LLEVA A DASHBOARD */}
            <button 
              type="button"
              onClick={() => router.push('/dashboard')}
              className="w-full bg-gym-blue hover:bg-cyan-400 text-black font-black py-3 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs shadow-lg active:scale-95 mt-4"
            >
              ENTRAR
            </button>
          </form>

          <button className="mt-8 text-gym-blue/50 text-[10px] uppercase tracking-widest hover:text-white transition-colors">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>

    </main>
  );
}