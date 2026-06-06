<template>
  <div class="w-full max-w-5xl px-6 py-16 mx-auto">
    <h1 class="mb-12 text-4xl text-center text-white font-pixel">> THE_PARTY</h1>
    
    <div class="max-w-3xl mx-auto mb-16 text-2xl text-center text-gray-300 font-terminal">
      Jaroo Studio operates as a two-player co-op. We are an independent duo obsessed with bleeding-edge open-source tech, uncompromising pixel art, and raw game mechanics. 
    </div>

    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      
      <!-- Player 1: Vahid -->
      <div class="relative p-6 border-4 bg-jaroo-surface border-jaroo-cyan group hover:animate-glitch">
        <span class="absolute px-2 text-xs -top-4 left-4 bg-jaroo-black font-pixel text-jaroo-cyan">PLAYER_01</span>
        
        <div class="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-black border-2 border-jaroo-cyan">
          <!-- Add your personal avatar image here if you have one! -->
          <span class="font-pixel text-[10px] text-jaroo-cyan-dark">QASEMSAG.SPRITE</span>
        </div>
        
        <h2 class="mb-2 text-2xl text-center text-white font-pixel">VAHID <span class="text-xs text-jaroo-cyan">"QasemSag"</span></h2>
        <p class="font-pixel text-[10px] text-jaroo-cyan-dark text-center mb-6">CLASS: Lead Game Designer / Co-Founder</p>
        
        <p class="mb-4 text-xl text-gray-400 font-terminal">
          Primary focus on world-building, mechanics, and pixel art, with a heavy secondary spec in codebase architecture.
        </p>

        <ul class="space-y-2 text-xl text-gray-500 font-terminal">
          <li>> STR: Game Design & Mechanics</li>
          <li>> INT: Pixel Art Aesthetics</li>
          <li>> AGI: Cross-Discipline Coding</li>
        </ul>
      </div>

      <!-- Player 2: Hamidreza -->
      <div class="relative p-6 border-4 bg-jaroo-surface border-jaroo-cyan group hover:animate-glitch">
        <span class="absolute px-2 text-xs -top-4 left-4 bg-jaroo-black font-pixel text-jaroo-cyan">PLAYER_02</span>
        
        <div class="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-black border-2 border-jaroo-cyan">
           <!-- Add Hamidreza's avatar image here -->
          <span class="font-pixel text-[10px] text-jaroo-cyan-dark">JASEMSAG.SPRITE</span>
        </div>
        
        <h2 class="mb-2 text-2xl text-center text-white font-pixel">HAMIDREZA <span class="text-xs text-jaroo-cyan">"JasemSag"</span></h2>
        <p class="font-pixel text-[10px] text-jaroo-cyan-dark text-center mb-6">CLASS: Lead Developer / Co-Founder</p>
        
        <p class="mb-4 text-xl text-gray-400 font-terminal">
          Primary focus on engine architecture, tooling, and backend systems, with a strong secondary spec in level design.
        </p>

        <ul class="space-y-2 text-xl text-gray-500 font-terminal">
          <li>> STR: Custom Godot Tooling</li>
          <li>> INT: Level & Environment Design</li>
          <li>> AGI: Performance Optimization</li>
        </ul>
      </div>

    </div>
  </div>
</template>