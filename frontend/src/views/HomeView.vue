<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGameStore } from '../stores/gameStore'

const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})

const latestGame = computed(() => {
  if (gameStore.games.length === 0) return null
  return gameStore.games[gameStore.games.length - 1]
})

const getImageUrl = (url?: string) => {
  return url ? url : 'https://via.placeholder.com/800x400/050505/00F0FF?text=NO_SIGNAL'
}
</script>

<template>
  <!-- Root container now spans the full width of the browser -->
  <div class="flex flex-col w-full pb-24">
    
    <!-- 1. HERO SECTION (Full Bleed Background) -->
    <section class="relative flex flex-col items-center justify-center w-full min-h-[70vh] bg-jaroo-black">
      <div class="flex items-center justify-center w-48 h-48 mb-12 transition-all border-4 bg-jaroo-black border-jaroo-cyan shadow-pixel animate-float">
        <img src="../assets/studio-logo.png" alt="Jaroo Studio Logo" class="object-contain w-full h-full p-4 render-pixelated" />
      </div>
      
      <h1 class="mb-6 text-4xl leading-tight text-center text-white font-pixel md:text-6xl">
        WE BUILD <br><span class="text-jaroo-cyan animate-pulse">PIXEL WORLDS</span>
      </h1>
      <p class="max-w-2xl mx-auto text-2xl text-center text-jaroo-crimson font-terminal">
        INDIE GAME DEVELOPMENT / CUSTOM ENGINE ARCHITECTURE
      </p>
    </section>

    <!-- 2. AUTOMATIC SCROLLING TICKER (Fixed CSS Marquee) -->
    <!-- The flex container with overflow-hidden ensures the scroll doesn't break the page width -->
    <div class="flex w-full py-3 overflow-hidden text-black border-y-4 border-jaroo-cyan-dark bg-jaroo-cyan">
      <!-- Container 1 -->
      <div class="flex whitespace-nowrap animate-marquee shrink-0">
        <span class="mx-8 text-xs font-pixel">>> SYSTEM ONLINE</span>
        <span class="mx-8 text-xs font-pixel">>> QASEMSAG AND JASEMSAG ARE IN THE LAB</span>
        <span class="mx-8 text-xs font-pixel">>> CUSTOM GODOT ARCHITECTURE</span>
        <span class="mx-8 text-xs font-pixel">>> PREPARING LATEST DROP</span>
      </div>
      <!-- Container 2 (Exact duplicate to create the seamless loop) -->
      <div class="flex whitespace-nowrap animate-marquee shrink-0" aria-hidden="true">
        <span class="mx-8 text-xs font-pixel">>> SYSTEM ONLINE</span>
        <span class="mx-8 text-xs font-pixel">>> QASEMSAG AND JASEMSAG ARE IN THE LAB</span>
        <span class="mx-8 text-xs font-pixel">>> CUSTOM GODOT ARCHITECTURE</span>
        <span class="mx-8 text-xs font-pixel">>> PREPARING LATEST DROP</span>
      </div>
    </div>

    <!-- 3. CUSTOM ENGINE TERMINAL -->
    <section class="w-full py-24 border-b-4 bg-jaroo-surface border-jaroo-panel">
      <!-- Inner container restrains the text from stretching too wide on big monitors -->
      <div class="w-full max-w-[1400px] mx-auto px-6">
        
        <div class="w-full p-1 border-4 bg-jaroo-black border-jaroo-cyan shadow-pixel">
          <div class="flex justify-between w-full p-2 text-xs text-black bg-jaroo-cyan font-pixel">
            <span class="animate-blink">godot_custom_build.exe</span>
            <span class="text-jaroo-crimson">[X]</span>
          </div>
          
          <div class="items-center gap-12 p-8 md:flex bg-jaroo-surface scanlines">
            <div class="flex-1 mb-8 md:mb-0">
              <h2 class="mb-4 text-2xl text-jaroo-cyan font-pixel">> ROOT ACCESS GRANTED</h2>
              <p class="mb-6 text-2xl leading-relaxed text-gray-400 font-terminal">
                We don't just use engines; we forge them. Our proprietary open-source modifications to Godot empower our specific blend of 2D pixel art and 3D rendering.
              </p>
              <RouterLink to="/docs" class="inline-block p-4 text-xs text-white transition-colors border-2 border-jaroo-cyan font-pixel hover:bg-jaroo-cyan hover:text-black">
                READ_THE_DOCS.md
              </RouterLink>
            </div>
            
            <div class="flex items-center justify-center w-48 h-48 border-4 border-dashed border-jaroo-cyan-dark animate-spin-slow shrink-0">
              <img src="../assets/engine-logo.png" alt="Custom Godot Engine" class="object-contain w-full h-full p-2 render-pixelated" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. DYNAMIC FEATURED DROP -->
    <section class="flex flex-col items-center w-full py-24 bg-jaroo-panel">
      <div class="w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        
        <h2 class="mb-12 text-3xl text-center text-white font-pixel">- LATEST DROP -</h2>
        
        <div v-if="gameStore.isLoading" class="text-xl text-center text-jaroo-cyan font-pixel animate-blink">
          SCANNING_DATABASE...
        </div>

        <div v-else-if="!latestGame" class="text-xl text-center text-gray-500 font-terminal">
          NO_RECORDS_FOUND. AWAITING_FIRST_UPLOAD.
        </div>
        
        <div v-else class="flex flex-col items-center w-full max-w-5xl gap-8 p-6 transition-all border-4 border-jaroo-cyan-dark bg-jaroo-surface hover:shadow-pixel hover:border-jaroo-cyan md:flex-row group">
          
          <div class="flex items-center justify-center w-full overflow-hidden border-2 bg-jaroo-black border-jaroo-cyan-dark md:w-1/2 aspect-video">
             <img 
              :src="getImageUrl(latestGame.cover_image_url)" 
              :alt="latestGame.title"
              class="object-cover w-full h-full transition-transform duration-700 render-pixelated group-hover:scale-105"
            />
          </div>

          <div class="flex flex-col items-start w-full md:w-1/2">
            <h3 class="mb-2 text-3xl text-white font-pixel group-hover:text-jaroo-cyan">{{ latestGame.title }}</h3>
            
            <span class="px-2 py-1 mb-4 text-[10px] text-white bg-jaroo-crimson font-pixel">
              {{ latestGame.genre }}
            </span>
            
            <p class="mb-6 text-xl text-gray-300 line-clamp-4 font-terminal">
              {{ latestGame.description || "NO_TRANSMISSION_DATA." }}
            </p>
            
            <RouterLink :to="{ name: 'game-details', params: { slug: latestGame.slug } }" class="pb-1 text-xs border-b-2 text-jaroo-cyan border-jaroo-cyan font-pixel hover:text-white hover:border-white">
              INITIALIZE_GAME ->
            </RouterLink>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>