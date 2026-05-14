// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "controls-2" | "high-scores-3";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
      <div className="w-full max-w-[800px] h-full ghost-grid border-x border-[#334155] opacity-20"></div>
      </div>
      {/* Decorative Tetromino Elements */}
      <div className="absolute top-1/4 left-10 md:left-32 z-0 opacity-40 rotate-12">
      <div className="grid grid-cols-2 gap-grid-gap w-[66px]">
      <div className="w-cell-size h-cell-size bg-[#FACC15] shadow-[0_0_8px_#FACC15] border border-[#FEF08A]"></div>
      <div className="w-cell-size h-cell-size bg-[#FACC15] shadow-[0_0_8px_#FACC15] border border-[#FEF08A]"></div>
      <div className="w-cell-size h-cell-size bg-[#FACC15] shadow-[0_0_8px_#FACC15] border border-[#FEF08A]"></div>
      <div className="w-cell-size h-cell-size bg-[#FACC15] shadow-[0_0_8px_#FACC15] border border-[#FEF08A]"></div>
      </div>
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-32 z-0 opacity-40 -rotate-12">
      <div className="grid grid-cols-3 gap-grid-gap w-[100px]">
      <div className="col-start-2 w-cell-size h-cell-size bg-[#A855F7] shadow-[0_0_8px_#A855F7] border border-[#D8B4FE]"></div>
      <div className="col-start-1 row-start-2 w-cell-size h-cell-size bg-[#A855F7] shadow-[0_0_8px_#A855F7] border border-[#D8B4FE]"></div>
      <div className="col-start-2 row-start-2 w-cell-size h-cell-size bg-[#A855F7] shadow-[0_0_8px_#A855F7] border border-[#D8B4FE]"></div>
      <div className="col-start-3 row-start-2 w-cell-size h-cell-size bg-[#A855F7] shadow-[0_0_8px_#A855F7] border border-[#D8B4FE]"></div>
      </div>
      </div>
      {/* Main Content Canvas */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-md px-6 py-12">
      {/* Logo Section */}
      <div className="mb-16 text-center">
      <div className="inline-block relative">
      <h1 className="font-display-lg text-display-lg text-primary tracking-tighter uppercase neon-glow-primary m-0">TETRIS</h1>
      <div className="absolute -bottom-2 -right-4 bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold shadow-[0_0_10px_rgba(56,189,248,0.5)]">SUPERVISOR</div>
      </div>
      <p className="mt-6 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">System Ready • Insert Coin</p>
      </div>
      {/* Navigation / Action Menu */}
      <nav aria-label="Main Menu" className="flex flex-col gap-4 w-full">
      {/* Start Game Button */}
      <button className="group relative w-full min-h-touch-target flex items-center justify-between px-6 py-4 bg-transparent border border-outline-variant hover:border-primary focus:border-primary hover:bg-primary-container focus:bg-primary-container hover:text-on-primary-container focus:text-on-primary-container transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A] neon-box-shadow" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="font-headline-sm text-headline-sm uppercase tracking-wide">Start Game</span>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      {/* Decorative corner brackets for hover state */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-on-primary-container group-focus:border-on-primary-container"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-on-primary-container group-focus:border-on-primary-container"></div>
      </button>
      {/* Controls Button */}
      <button className="group relative w-full min-h-touch-target flex items-center justify-between px-6 py-4 bg-transparent border border-outline-variant hover:border-primary focus:border-primary hover:bg-primary-container focus:bg-primary-container hover:text-on-primary-container focus:text-on-primary-container transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A]" type="button" data-action-id="controls-2" onClick={actions?.["controls-2"]}>
      <span className="font-headline-sm text-headline-sm uppercase tracking-wide">Controls</span>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      {/* High Scores Button */}
      <button className="group relative w-full min-h-touch-target flex items-center justify-between px-6 py-4 bg-transparent border border-outline-variant hover:border-primary focus:border-primary hover:bg-primary-container focus:bg-primary-container hover:text-on-primary-container focus:text-on-primary-container transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0F172A]" type="button" data-action-id="high-scores-3" onClick={actions?.["high-scores-3"]}>
      <span className="font-headline-sm text-headline-sm uppercase tracking-wide">High Scores</span>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </nav>
      {/* Version / Footer Info */}
      <div className="mt-16 text-center">
      <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">v.1.0.4 - Build 89A</span>
      </div>
      </main>
    </>
  );
}
