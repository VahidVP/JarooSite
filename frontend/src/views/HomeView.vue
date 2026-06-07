<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGameStore } from '../stores/gameStore'

const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})

// Dynamically grab the newest game (assuming the last added item is the newest)
// If your backend sorts them differently, you can use: [...gameStore.games].reverse()[0]
const latestGame = computed(() => {
  if (gameStore.games.length === 0) return null
  return gameStore.games[gameStore.games.length - 1]
})

const getImageUrl = (url?: string) => {
  return url ? url : 'https://via.placeholder.com/800x400/050505/FFEA00?text=NO_SIGNAL'
}
</script>

<template>
  <div class="flex flex-col w-full max-w-6xl gap-32 px-6 py-16 mx-auto">
    
    <!-- 1. HERO SECTION -->
    <section class="flex flex-col items-center justify-center mt-12 text-center">
      <!-- Automatic floating animation and Magenta shadow applied to the logo -->
      <div class="flex items-center justify-center w-48 h-48 mb-12 transition-all border-4 bg-jaroo-black border-jaroo-magenta shadow-pixel-magenta animate-float">
        <img src="../assets/studio-logo.png" alt="Jaroo Studio Logo" class="object-contain w-full h-full p-4 render-pixelated" />
      </div>
      
      <h1 class="mb-6 text-4xl leading-tight text-white font-pixel md:text-6xl">
        WE BUILD <br><span class="text-jaroo-cyan animate-pulse">PIXEL WORLDS</span>
      </h1>
      <p class="max-w-2xl mx-auto text-2xl text-jaroo-yellow font-terminal">
        INDIE GAME DEVELOPMENT / CUSTOM ENGINE ARCHITECTURE
      </p>
    </section>

    <!-- AUTOMATIC SCROLLING TICKER (Animation) -->
    <!-- This creates a continuous news banner across the screen -->
    <div class="w-full py-2 overflow-hidden border-y-4 border-jaroo-cyan bg-jaroo-surface">
      <div class="whitespace-nowrap animate-marquee font-pixel text-jaroo-cyan text-[10px]">
        <span class="mx-4">>> SYSTEM ONLINE</span>
        <span class="mx-4 text-jaroo-magenta">>> NEW BUILDS COMPILING</span>
        <span class="mx-4 text-white">>> QASEMSAG AND JASEMSAG ARE IN THE LAB</span>
        <span class="mx-4 text-jaroo-yellow">>> CHECK THE LATEST DROP BELOW</span>
        <!-- Duplicated to make the infinite scroll seamless -->
        <span class="mx-4">>> SYSTEM ONLINE</span>
        <span class="mx-4 text-jaroo-magenta">>> NEW BUILDS COMPILING</span>
        <span class="mx-4 text-white">>> QASEMSAG AND JASEMSAG ARE IN THE LAB</span>
        <span class="mx-4 text-jaroo-yellow">>> CHECK THE LATEST DROP BELOW</span>
      </div>
    </div>

    <!-- 2. CUSTOM ENGINE TERMINAL -->
    <!-- Updated with Yellow borders and Magenta text accents -->
    <section class="w-full p-1 border-4 bg-jaroo-black border-jaroo-yellow shadow-pixel-yellow">
      <div class="flex justify-between w-full p-2 text-xs text-black bg-jaroo-yellow font-pixel">
        <span class="animate-blink">godot_custom_build.exe</span>
        <span class="text-red-600">[X]</span>
      </div>
      
      <div class="items-center gap-12 p-8 md:flex bg-jaroo-surface scanlines">
        <div class="flex-1 mb-8 md:mb-0">
          <h2 class="mb-4 text-2xl text-jaroo-magenta font-pixel">> ROOT ACCESS GRANTED</h2>
          <p class="mb-6 text-2xl leading-relaxed text-gray-400 font-terminal">
            We don't just use engines; we forge them. Our proprietary open-source modifications to Godot empower our specific blend of 2D pixel art and 3D rendering.
          </p>
          <RouterLink to="/docs" class="inline-block p-4 text-xs text-black transition-colors bg-jaroo-cyan font-pixel hover:bg-white hover:shadow-pixel">
            READ_THE_DOCS.md
          </RouterLink>
        </div>
        
        <!-- Automatic slow spin applied to the engine graphic -->
        <div class="flex items-center justify-center w-48 h-48 border-4 border-dashed border-jaroo-magenta animate-spin-slow">
          <img src="../assets/engine-logo.png" alt="Custom Godot Engine" class="object-contain w-full h-full p-2 render-pixelated" />
        </div>
      </div>
    </section>

    <!-- 3. DYNAMIC FEATURED DROP -->
    <section class="flex flex-col items-center w-full">
      <h2 class="mb-12 text-3xl text-center text-white font-pixel">- LATEST DROP -</h2>
      
      <div v-if="gameStore.isLoading" class="text-xl text-center text-jaroo-magenta font-pixel animate-blink">
        SCANNING_DATABASE...
      </div>

      <div v-else-if="!latestGame" class="text-xl text-center text-gray-500 font-terminal">
        NO_RECORDS_FOUND. AWAITING_FIRST_UPLOAD.
      </div>
      
      <!-- This block now pulls entirely from your Django database via Pinia -->
      <div v-else class="flex flex-col items-center w-full max-w-4xl gap-8 p-6 transition-all border-4 border-jaroo-cyan bg-jaroo-surface shadow-pixel hover:-translate-y-1 hover:shadow-pixel-hover md:flex-row group">
        
        <div class="flex items-center justify-center w-full overflow-hidden border-2 bg-jaroo-black border-jaroo-cyan-dark md:w-1/2 aspect-video">
           <img 
            :src="getImageUrl(latestGame.cover_image_url)" 
            :alt="latestGame.title"
            class="object-cover w-full h-full transition-transform duration-700 render-pixelated group-hover:scale-105"
          />
        </div>

        <div class="flex flex-col items-start w-full md:w-1/2">
          <h3 class="mb-2 text-2xl text-white font-pixel group-hover:text-jaroo-cyan">{{ latestGame.title }}</h3>
          
          <span class="px-2 py-1 mb-4 text-[10px] text-black bg-jaroo-magenta font-pixel">
            {{ latestGame.genre }}
          </span>
          
          <p class="mb-6 text-xl text-gray-300 line-clamp-3 font-terminal">
            {{ latestGame.description || "NO_TRANSMISSION_DATA." }}
          </p>
          
          <RouterLink :to="{ name: 'game-details', params: { slug: latestGame.slug } }" class="pb-1 text-xs border-b-2 text-jaroo-yellow border-jaroo-yellow font-pixel hover:text-white hover:border-white">
            INITIALIZE_GAME ->
          </RouterLink>
        </div>
      </div>

    </section>
  </div>
</template>