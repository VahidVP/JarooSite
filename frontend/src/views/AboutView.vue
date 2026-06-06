<template>
  <div class="w-full max-w-5xl px-6 py-16 mx-auto">
    <h1 class="mb-12 text-4xl text-center text-white font-pixel">> THE_PARTY</h1>
    
    <div class="max-w-3xl mx-auto mb-16 text-2xl text-center text-gray-300 font-terminal">
      Jaroo Studio operates as a two-player co-op. We are an independent duo obsessed with bleeding-edge open-source tech, uncompromising pixel art, and raw game mechanics. 
    </div>

    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      
      <!-- Player 1 -->
      <div class="relative p-6 border-4 border-jaroo-cyan bg-jaroo-surface">
        <span class="absolute px-2 text-xs -top-4 left-4 bg-jaroo-black font-pixel text-jaroo-cyan">PLAYER_01</span>
        
        <div class="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-black border-2 border-jaroo-cyan">
          <span class="font-pixel text-[10px]">AVATAR</span>
        </div>
        
        <h2 class="mb-2 text-2xl text-center text-white font-pixel">VAHID</h2>
        <p class="font-pixel text-[10px] text-jaroo-cyan-dark text-center mb-6">CLASS: Lead Developer / Architect</p>
        
        <ul class="space-y-2 text-xl text-gray-400 font-terminal">
          <li>STR: Full-Stack Architecture</li>
          <li>INT: Custom Godot Tooling</li>
          <li>AGI: C#, Python, Vue</li>
        </ul>
      </div>

      <!-- Player 2 -->
      <div class="relative p-6 border-4 border-jaroo-cyan bg-jaroo-surface">
        <span class="absolute px-2 text-xs -top-4 left-4 bg-jaroo-black font-pixel text-jaroo-cyan">PLAYER_02</span>
        
        <div class="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-black border-2 border-jaroo-cyan">
          <span class="font-pixel text-[10px]">AVATAR</span>
        </div>
        
        <h2 class="mb-2 text-2xl text-center text-white font-pixel">CO-FOUNDER</h2>
        <p class="font-pixel text-[10px] text-jaroo-cyan-dark text-center mb-6">CLASS: Lead Artist / Game Design</p>
        
        <ul class="space-y-2 text-xl text-gray-400 font-terminal">
          <li>STR: Pixel Art Aesthetics</li>
          <li>INT: Level Design</li>
          <li>AGI: 2D/3D Hybrid Environments</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
