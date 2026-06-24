"use client";

import { useState, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const clips = [
  {
    src: "/videos/clip1-sorteio.mp4",
    label: "Sorteio da pedra-chave",
    description: "O momento em que um participante é contemplado ao vivo",
  },
  {
    src: "/videos/clip2-sorteio.mp4",
    label: "Contemplação em grupo",
    description: "Acompanhe como funciona o processo completo",
  },
  {
    src: "/videos/clip3-sorteio.mp4",
    label: "Resultado do sorteio",
    description: "A emoção de quem realizou o sonho",
  },
];

export function VideoPlayer() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clip = clips[current];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  const prev = () => goTo(current === 0 ? clips.length - 1 : current - 1);
  const next = () => goTo(current === clips.length - 1 ? 0 : current + 1);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
      {/* Video */}
      <div className="relative aspect-video bg-black cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={clip.src}
          className="w-full h-full object-contain"
          playsInline
          onEnded={() => {
            setPlaying(false);
            next();
          }}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-deep/40">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Play size={28} className="text-deep ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-surface p-4 flex items-center justify-between gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer shrink-0"
          aria-label="Clipe anterior"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex-1 text-center min-w-0">
          <p className="text-white font-heading font-semibold text-sm truncate">
            {clip.label}
          </p>
          <p className="text-white/25 text-xs truncate">{clip.description}</p>
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer shrink-0"
          aria-label="Próximo clipe"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div className="bg-surface pb-4 flex items-center justify-center gap-2">
        {clips.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "bg-gold w-6" : "bg-white/10 hover:bg-white/20"
            }`}
            aria-label={`Clipe ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
