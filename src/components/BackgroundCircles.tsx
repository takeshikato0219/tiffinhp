"use client";

export default function BackgroundCircles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ top: '100vh' }}>
      {/* Floating white circles for background */}
      <div className="absolute w-32 h-32 md:w-48 md:h-48 bg-white/20 rounded-full blur-2xl animate-slow-float" style={{ top: '10%', left: '5%' }} />
      <div className="absolute w-24 h-24 md:w-36 md:h-36 bg-white/15 rounded-full blur-2xl animate-slow-float-reverse" style={{ top: '30%', right: '8%' }} />
      <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-white/25 rounded-full blur-2xl animate-slow-float" style={{ top: '50%', left: '15%' }} />
      <div className="absolute w-28 h-28 md:w-40 md:h-40 bg-white/20 rounded-full blur-2xl animate-slow-float-reverse" style={{ top: '70%', right: '12%' }} />
      <div className="absolute w-36 h-36 md:w-52 md:h-52 bg-white/18 rounded-full blur-2xl animate-slow-float" style={{ top: '90%', left: '8%' }} />
      <div className="absolute w-20 h-20 md:w-32 md:h-32 bg-white/15 rounded-full blur-2xl animate-slow-float-reverse" style={{ top: '60%', right: '20%' }} />
    </div>
  );
}

