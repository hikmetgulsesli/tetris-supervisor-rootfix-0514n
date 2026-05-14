// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Circle, Gamepad2, Menu, MousePointerClick, Play, Settings } from "lucide-react";


export type ControlsHelpActionId = never;

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp(_props: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar (Mobile & Global Anchor) */}
      <header className="w-full top-0 border-b border-outline-variant bg-background dark:bg-background text-primary dark:text-primary font-headline-sm text-headline-sm transition-colors duration-200 flex justify-between items-center px-panel-padding h-touch-target md:hidden z-20">
      <div className="font-display-lg text-display-lg text-primary uppercase tracking-tighter text-xl">Tetris Supervisor</div>
      <div className="flex gap-4">
      <Settings className="text-on-surface-variant hover:text-primary-fixed cursor-pointer" aria-hidden={true} focusable="false" />
      <Circle className="text-primary cursor-pointer" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Desktop) */}
      <nav className="bg-surface-container dark:bg-surface-container text-primary font-body-md text-body-md h-full w-64 left-0 fixed border-r border-outline-variant transition-colors duration-150 hidden md:flex flex-col py-panel-padding z-20">
      <div className="mb-8 px-4">
      <h1 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider mb-1">Tetris Supervisor</h1>
      <p className="text-on-surface-variant text-sm">Level 01</p>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" href="#">
      <Gamepad2 aria-hidden={true} focusable="false" />
      <span>Play</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span>Leaderboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-surface-container-high rounded-lg transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span>Controls</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors mt-auto" href="#">
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 relative overflow-y-auto p-6 md:p-12 pb-24 md:pb-12 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
      <header className="mb-10 text-center md:text-left">
      <h2 className="font-display-lg text-display-lg text-primary tracking-tighter mb-2 neon-glow uppercase">System Controls</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Master the interface. Precision timing and spatial awareness are critical for optimal line clears.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Keyboard Mapping */}
      <section className="bg-[#111827] border border-[#334155] rounded-xl p-8 neon-box">
      <h3 className="font-headline-sm text-headline-sm text-secondary mb-6 flex items-center gap-2 border-b border-[#334155] pb-4">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
                              Keyboard Interface
                          </h3>
      <div className="space-y-6">
      <div className="flex justify-between items-center group">
      <div className="flex gap-2">
      <div className="w-10 h-10 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface group-hover:border-primary transition-colors">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <div className="w-10 h-10 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface group-hover:border-primary transition-colors">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      </div>
      <span className="font-body-md text-body-md text-on-surface-variant">Move Tetromino</span>
      </div>
      <div className="flex justify-between items-center group">
      <div className="w-10 h-10 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface group-hover:border-primary transition-colors">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-md text-body-md text-on-surface-variant">Rotate Clockwise</span>
      </div>
      <div className="flex justify-between items-center group">
      <div className="w-10 h-10 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface group-hover:border-primary transition-colors">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-md text-body-md text-on-surface-variant">Soft Drop</span>
      </div>
      <div className="flex justify-between items-center group">
      <div className="h-10 px-8 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface font-label-sm text-label-sm tracking-widest group-hover:border-primary transition-colors min-w-[120px]">
                                      SPACE
                                  </div>
      <span className="font-body-md text-body-md text-primary font-bold">Hard Drop</span>
      </div>
      <div className="flex justify-between items-center group">
      <div className="w-10 h-10 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface font-label-sm text-label-sm group-hover:border-primary transition-colors">
                                      P
                                  </div>
      <span className="font-body-md text-body-md text-on-surface-variant">Pause Game</span>
      </div>
      <div className="flex justify-between items-center group">
      <div className="w-10 h-10 border border-[#334155] rounded bg-[#0f1418] flex items-center justify-center text-on-surface font-label-sm text-label-sm group-hover:border-primary transition-colors">
                                      C
                                  </div>
      <span className="font-body-md text-body-md text-on-surface-variant">Hold Piece</span>
      </div>
      </div>
      </section>
      {/* Touch & Rules */}
      <div className="space-y-8">
      <section className="bg-[#111827] border border-[#334155] rounded-xl p-8">
      <h3 className="font-headline-sm text-headline-sm text-secondary mb-6 flex items-center gap-2 border-b border-[#334155] pb-4">
      <MousePointerClick className="text-primary" aria-hidden={true} focusable="false" />
                                  Touch Protocol
                              </h3>
      <div className="grid grid-cols-2 gap-4">
      <div className="p-4 border border-[#334155] rounded-lg bg-surface flex flex-col items-center text-center gap-3">
      <Circle className="text-2xl text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface">Swipe L/R to Move</span>
      </div>
      <div className="p-4 border border-[#334155] rounded-lg bg-surface flex flex-col items-center text-center gap-3">
      <Circle className="text-2xl text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface">Tap to Rotate</span>
      </div>
      <div className="p-4 border border-[#334155] rounded-lg bg-surface flex flex-col items-center text-center gap-3">
      <Circle className="text-2xl text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface">Swipe Down to Drop</span>
      </div>
      <div className="p-4 border border-[#334155] rounded-lg bg-surface flex flex-col items-center text-center gap-3">
      <Circle className="text-2xl text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface">Swipe Up to Hold</span>
      </div>
      </div>
      </section>
      <section className="bg-[#111827] border border-[#334155] rounded-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
      <Circle className="text-6xl" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4 relative z-10">Directives</h3>
      <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant relative z-10">
      <li className="flex items-start gap-2">
      <span className="text-tertiary">01.</span>
      <span>Complete horizontal lines to clear blocks.</span>
      </li>
      <li className="flex items-start gap-2">
      <span className="text-tertiary">02.</span>
      <span>Clearing 4 lines simultaneously (a 'Tetris') yields maximum score.</span>
      </li>
      <li className="flex items-start gap-2">
      <span className="text-tertiary">03.</span>
      <span>Speed increases incrementally with each level advance.</span>
      </li>
      <li className="flex items-start gap-2">
      <span className="text-tertiary">04.</span>
      <span>If the stack reaches the upper boundary, sequence terminates.</span>
      </li>
      </ul>
      </section>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary font-label-sm text-label-sm fixed bottom-0 w-full z-50 border-t border-outline-variant scale-95 transition-transform duration-75 md:hidden flex justify-around items-center h-16 px-4">
      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high p-2 rounded-xl" href="#">
      <Play className="mb-1" aria-hidden={true} focusable="false" />
      <span>Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high p-2 rounded-xl" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span>Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span>Guide</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high p-2 rounded-xl" href="#">
      <Menu className="mb-1" aria-hidden={true} focusable="false" />
      <span>Menu</span>
      </a>
      </nav>
    </>
  );
}
