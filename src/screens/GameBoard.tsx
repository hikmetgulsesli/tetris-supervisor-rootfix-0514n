// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-background dark:bg-background w-full top-0 border-b border-outline-variant flex justify-between items-center px-panel-padding h-touch-target transition-colors duration-200 z-10 md:hidden">
      <div className="font-display-lg text-display-lg text-primary uppercase tracking-tighter text-xl">Tetris Supervisor</div>
      <div className="flex gap-4">
      <button className="text-primary hover:text-primary-fixed" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}><Settings aria-hidden={true} focusable="false" /></button>
      <button className="text-primary hover:text-primary-fixed" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}><Circle aria-hidden={true} focusable="false" /></button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container h-full w-64 left-0 fixed border-r border-outline-variant hidden md:flex flex-col py-panel-padding transition-colors duration-150 z-10">
      <div className="mb-8 px-4">
      <div className="font-headline-sm text-headline-sm text-primary">Tetris Supervisor</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Level 01</div>
      </div>
      <ul className="flex-1 space-y-2">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary hover:bg-surface-container-high transition-colors" href="#">
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Play</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Leaderboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Controls</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-1 flex flex-col md:ml-64 relative bg-[#0F172A] p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
      <div className="max-w-container-max mx-auto w-full h-full flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Stats Panel (Desktop) */}
      <div className="hidden md:flex flex-col gap-4 w-48 order-1 md:order-none">
      <div className="bg-[#111827] border border-[#334155] p-4 rounded-DEFAULT">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-2">SCORE</h3>
      <p className="font-stats-number text-stats-number text-primary">024,500</p>
      </div>
      <div className="bg-[#111827] border border-[#334155] p-4 rounded-DEFAULT">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-2">LINES</h3>
      <p className="font-stats-number text-stats-number text-primary">012</p>
      </div>
      <div className="bg-[#111827] border border-[#334155] p-4 rounded-DEFAULT">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-2">LEVEL</h3>
      <p className="font-stats-number text-stats-number text-primary">05</p>
      </div>
      </div>
      {/* Game Board */}
      <div className="flex-shrink-0 relative">
      <div className="tetris-grid bg-[#111827] border-2 border-[#334155]">
      {/* Row 1 */}
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div>
      {/* Row 2 */}
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div>
      {/* Row 3 */}
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div>
      {/* Row 4 (Falling I piece) */}
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell active-cyan"></div><div className="tetris-cell active-cyan"></div><div className="tetris-cell active-cyan"></div><div className="tetris-cell active-cyan"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div>
      {/* Rows 5-18 Empty for brevity in visualization, adding placed blocks at bottom */}
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div>
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div>
      <div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div><div className="tetris-cell"></div></div></div></div></main></div>
    </>
  );
}
