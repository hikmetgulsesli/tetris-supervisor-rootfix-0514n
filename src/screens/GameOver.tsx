// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home, TriangleAlert } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Ambient background glow to simulate arcade CRT emission */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      <div className="absolute w-[600px] h-[600px] bg-error/10 rounded-full blur-[120px] mix-blend-screen transform translate-y-1/4"></div>
      </div>
      {/* Main Content Canvas (Transaction Screen: Nav Shell Suppressed) */}
      <main className="w-full max-w-md flex flex-col items-stretch z-10 relative">
      {/* Header Section */}
      <header className="text-center mb-10 flex flex-col items-center">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1", fontSize: "48px"}} className="text-error mb-2 drop-shadow-[0_0_8px_rgba(255,180,171,0.6)]" aria-hidden={true} focusable="false" />
      <h1 className="font-display-lg text-display-lg text-error uppercase tracking-tighter drop-shadow-[0_0_12px_rgba(255,180,171,0.4)]">
                      Game Over
                  </h1>
      </header>
      {/* Stats Bento Grid (Using grid-gap for inner-gutter effect) */}
      <div className="bg-outline-variant p-[2px] rounded-lg mb-8 shadow-2xl">
      <div className="grid grid-cols-2 gap-[2px] bg-outline-variant rounded-md overflow-hidden">
      {/* Final Score Component (Hero Stat) */}
      <div className="col-span-2 bg-surface-container flex flex-col items-center justify-center p-8 relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-2 z-10">Final Score</h2>
      <p className="font-stats-number text-[40px] leading-none font-bold text-primary drop-shadow-[0_0_6px_rgba(142,213,255,0.5)] z-10 tracking-tight">
                              142,850
                          </p>
      </div>
      {/* Level Reached */}
      <div className="col-span-1 bg-surface-container flex flex-col items-center justify-center p-6 hover:bg-surface-container-high transition-colors duration-200">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Level</h3>
      <p className="font-stats-number text-stats-number text-on-background">
                              12
                          </p>
      </div>
      {/* Lines Cleared */}
      <div className="col-span-1 bg-surface-container flex flex-col items-center justify-center p-6 hover:bg-surface-container-high transition-colors duration-200">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Lines</h3>
      <p className="font-stats-number text-stats-number text-on-background">
                              114
                          </p>
      </div>
      </div>
      </div>
      {/* Touch Controls / Actions */}
      <div className="flex flex-col gap-4 mt-2">
      {/* Primary Action */}
      <button className="group h-touch-target w-full bg-transparent border border-outline-variant text-on-background font-headline-sm text-headline-sm flex items-center justify-center rounded-DEFAULT transition-colors duration-150 hover:bg-primary-container hover:text-on-primary-container hover:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="mr-2 transition-transform group-hover:scale-110" aria-hidden={true} focusable="false" />
                      Play Again
                  </button>
      {/* Secondary Action */}
      <button className="group h-touch-target w-full bg-transparent border border-outline-variant text-on-surface-variant font-headline-sm text-headline-sm flex items-center justify-center rounded-DEFAULT transition-colors duration-150 hover:bg-surface-container-high hover:text-on-background focus:outline-none focus:ring-2 focus:ring-outline-variant focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Home className="mr-2" aria-hidden={true} focusable="false" />
                      Main Menu
                  </button>
      </div>
      </main>
    </>
  );
}
