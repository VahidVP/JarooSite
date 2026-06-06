<script setup lang="ts">
import { onMounted } from 'vue'
import { useGameStore } from '../stores/gameStore'


const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})
</script>

<template>
  <div class="flex flex-col w-full max-w-6xl gap-32 px-6 py-16 mx-auto">
    
    <!-- 1. HERO SECTION -->
    <section class="flex flex-col items-center justify-center mt-12 text-center">
      <!-- Blocky Logo Placeholder -->
      <div class="flex items-center justify-center w-32 h-32 mb-12 transition-all border-4 bg-jaroo-black border-jaroo-cyan shadow-pixel hover:shadow-pixel-hover hover:translate-y-1">
        <span class="text-xs text-white font-pixel">LOGO.SPRITE</span>
      </div>
      
      <h1 class="mb-6 text-4xl leading-tight text-white font-pixel md:text-6xl">
        WE BUILD <br><span class="text-jaroo-cyan">PIXEL WORLDS</span>
      </h1>
      <p class="max-w-2xl mx-auto text-2xl font-terminal text-jaroo-cyan-dark">
        INDIE GAME DEVELOPMENT / CUSTOM ENGINE ARCHITECTURE
      </p>
    </section>

    <!-- 2. CUSTOM ENGINE TERMINAL -->
    <section class="w-full p-1 border-4 bg-jaroo-black border-jaroo-cyan shadow-pixel">
      <!-- Terminal Header bar -->
      <div class="flex justify-between w-full p-2 text-xs text-black bg-jaroo-cyan font-pixel">
        <span>godot_custom_build.exe</span>
        <span>[X]</span>
      </div>
      
      <div class="items-center gap-12 p-8 md:flex bg-jaroo-surface">
        <div class="flex-1 mb-8 md:mb-0">
          <h2 class="mb-4 text-2xl text-white font-pixel">> ROOT ACCESS GRANTED</h2>
          <p class="mb-6 text-2xl leading-relaxed text-gray-400 font-terminal">
            We don't just use engines; we forge them. Our proprietary open-source modifications to Godot empower our specific blend of 2D pixel art and 3D rendering. We write the rules so the hardware bends to our mechanics, guaranteeing raw performance.
          </p>
          <RouterLink to="/about" class="inline-block p-4 text-xs text-black transition-colors bg-jaroo-cyan font-pixel hover:bg-white">
            READ THE DOCS
          </RouterLink>
        </div>
        
        <div class="flex items-center justify-center w-48 h-48 border-4 border-dashed border-jaroo-cyan-dark animate-pulse">
          <span class="font-pixel text-[10px] text-center">CUSTOM<br>ENGINE<br>SPRITE</span>
        </div>
      </div>
    </section>

    <!-- 3. FEATURED DROP -->
    <section class="flex flex-col items-center w-full">
      <h2 class="mb-12 text-3xl text-center text-white font-pixel">- LATEST DROP -</h2>
      
      <div class="flex flex-col items-center w-full max-w-4xl gap-8 p-6 transition-all border-4 border-jaroo-cyan bg-jaroo-surface shadow-pixel md:flex-row hover:translate-y-1 hover:shadow-pixel-hover">
        <div class="flex items-center justify-center w-full bg-black border-2 md:w-1/2 aspect-video border-jaroo-cyan-dark">
          <span class="text-xl font-terminal">Gameplay_GIF.mp4</span>
        </div>
        <div class="flex flex-col items-start w-full md:w-1/2">
          <h3 class="mb-2 text-2xl text-white font-pixel">Duck til DUN</h3>
          <span class="bg-jaroo-cyan text-black font-pixel text-[10px] px-2 py-1 mb-4">ROGUELITE SURVIVOR</span>
          <p class="mb-6 text-xl text-gray-300 font-terminal">
            Break the game. Rule the abyss. Survive the onslaught in our latest pixel art arena.
          </p>
          <RouterLink to="/games" class="pb-1 text-xs border-b-2 border-jaroo-cyan font-pixel hover:text-white hover:border-white">
            PLAY NOW ->
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>