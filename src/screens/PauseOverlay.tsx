// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "exit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* BACKGROUND CONTEXT: Simulated Game Board
              Provides depth to the pause overlay. It's intentionally dimmed and blurred via the overlay above it. */}
      <div className="absolute inset-0 flex justify-center items-center opacity-40 pointer-events-none z-0">
      {/* Game Board Container */}
      <div className="relative w-[340px] h-[680px] bg-surface-container border-2 border-outline-variant p-[2px]">
      <div className="w-full h-full game-grid-bg opacity-20"></div>
      {/* Simulated Active Piece (T-Tetromino) */}
      <div className="absolute bottom-[68px] left-[136px] w-[32px] h-[32px] bg-[#a855f7] border border-[#d8b4fe] shadow-[0_0_8px_#a855f7]"></div>
      <div className="absolute bottom-[68px] left-[170px] w-[32px] h-[32px] bg-[#a855f7] border border-[#d8b4fe] shadow-[0_0_8px_#a855f7]"></div>
      <div className="absolute bottom-[68px] left-[204px] w-[32px] h-[32px] bg-[#a855f7] border border-[#d8b4fe] shadow-[0_0_8px_#a855f7]"></div>
      <div className="absolute bottom-[102px] left-[170px] w-[32px] h-[32px] bg-[#a855f7] border border-[#d8b4fe] shadow-[0_0_8px_#a855f7]"></div>
      {/* Simulated Stacked Blocks */}
      <div className="absolute bottom-[2px] left-[34px] w-[32px] h-[32px] bg-[#3b82f6] border border-[#93c5fd]"></div>
      <div className="absolute bottom-[2px] left-[68px] w-[32px] h-[32px] bg-[#3b82f6] border border-[#93c5fd]"></div>
      <div className="absolute bottom-[36px] left-[34px] w-[32px] h-[32px] bg-[#3b82f6] border border-[#93c5fd]"></div>
      </div>
      </div>
      {/* PAUSE OVERLAY: Main Interactive Layer
              Dark, semi-transparent backdrop focusing attention entirely on the menu. */}
      <div className="absolute inset-0 z-50 bg-background/85 backdrop-blur-md flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center space-y-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-5xl mb-2" aria-hidden={true} focusable="false" />
      <h1 className="font-display-lg text-display-lg text-primary uppercase tracking-tighter text-neon-primary">Paused</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Focus required. System on standby.</p>
      </div>
      {/* Menu Actions */}
      <nav aria-label="Pause Menu" className="flex flex-col w-full max-w-[280px] space-y-4">
      {/* Primary Action: Resume (Pre-focused style visually) */}
      <button className="group relative flex items-center justify-center h-[56px] px-6 w-full bg-primary-container text-on-primary-container border border-primary font-headline-sm text-headline-sm uppercase tracking-widest transition-colors duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary neon-glow-primary" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play className="mr-3" aria-hidden={true} focusable="false" />
                      Resume
                  </button>
      {/* Secondary Action: Restart */}
      <button className="group flex items-center justify-center h-touch-target px-6 w-full bg-transparent border border-outline-variant text-on-background font-headline-sm text-headline-sm uppercase tracking-widest transition-colors duration-150 hover:bg-surface-container-high hover:border-outline hover:text-primary-fixed active:bg-surface-container-highest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle className="mr-3 text-on-surface-variant group-hover:text-primary-fixed transition-colors" aria-hidden={true} focusable="false" />
                      Restart
                  </button>
      {/* Destructive/Exit Action */}
      <button className="group flex items-center justify-center h-touch-target px-6 w-full bg-transparent border border-outline-variant text-on-background font-headline-sm text-headline-sm uppercase tracking-widest mt-8 transition-colors duration-150 hover:bg-error hover:text-on-error hover:border-error active:bg-error/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-error" type="button" data-action-id="exit-to-menu-3" onClick={actions?.["exit-to-menu-3"]}>
      <Circle className="mr-3 text-on-surface-variant group-hover:text-on-error transition-colors" aria-hidden={true} focusable="false" />
                      Exit to Menu
                  </button>
      </nav>
      {/* Optional: Session Stats (High-end UI element adding value to the pause screen) */}
      <div className="mt-20 flex space-x-12 border-t border-outline-variant/50 pt-8 opacity-80">
      <div className="flex flex-col items-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Current Score</span>
      <span className="font-stats-number text-stats-number text-secondary">014,850</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Time Elapsed</span>
      <span className="font-stats-number text-stats-number text-secondary">04:12</span>
      </div>
      </div>
      </div>
    </>
  );
}
