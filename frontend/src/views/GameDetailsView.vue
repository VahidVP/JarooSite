<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useGameStore } from '../stores/gameStore'

const route = useRoute()
const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})

const game = computed(() => {
  return gameStore.games.find(g => g.slug === route.params.slug)
})

// Fallback image generator
const getImageUrl = (url: string) => {
  return url ? url : 'https://via.placeholder.com/800x400/050505/FF00FF?text=MISSING_ASSET.PNG'
}
</script>

<template>
  <div class="w-full max-w-5xl px-6 py-16 mx-auto">
    <div v-if="!game && gameStore.isLoading" class="text-xl text-center font-pixel animate-blink text-jaroo-magenta">
      LOADING_MEMORY_BLOCK...
    </div>

    <div v-else-if="!game" class="text-center">
      <h2 class="mb-4 text-2xl text-red-500 font-pixel">ERROR: GAME_NOT_FOUND</h2>
      <RouterLink to="/games" class="text-xl hover:underline text-jaroo-cyan font-terminal">> RETURN_TO_CATALOG</RouterLink>
    </div>

    <!-- Main Detail Layout -->
    <div v-else class="flex flex-col gap-8">
      
      <!-- Back button -->
      <RouterLink to="/games" class="text-xl text-gray-500 transition-colors font-terminal hover:text-jaroo-cyan w-fit">
        > RETURN_TO_CATALOG
      </RouterLink>

      <!-- Hero Image / Cover Art -->
      <div class="relative w-full overflow-hidden border-4 shadow-pixel-magenta border-jaroo-magenta bg-jaroo-surface aspect-video scanlines">
        <img 
          :src="getImageUrl(game.cover_image_url)" 
          :alt="game.title" 
          class="object-cover w-full h-full render-pixelated"
        />
      </div>

      <!-- Game Data -->
      <div class="p-8 border-4 bg-jaroo-black border-jaroo-cyan">
        <div class="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-end">
          <div>
            <h1 class="mb-2 text-4xl text-white font-pixel">{{ game.title }}</h1>
            <div class="text-sm tracking-widest uppercase font-pixel text-jaroo-magenta">{{ game.genre }}</div>
          </div>
          
          <div class="px-4 py-2 text-xs text-black bg-jaroo-yellow font-pixel">
            STATUS: {{ game.status }}
          </div>
        </div>
        
        <div class="pt-8 border-t-4 border-dashed border-jaroo-cyan-dark">
          <p class="text-2xl leading-relaxed text-gray-300 font-terminal">
            {{ game.description || "NO_DESCRIPTION_DATA_AVAILABLE_IN_CURRENT_MEMORY_BANK." }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-6 mt-12">
          <button class="p-4 text-xs text-black transition-all bg-jaroo-cyan font-pixel hover:bg-white hover:shadow-pixel">
            PLAY_GAME.exe
          </button>
          <button class="p-4 text-xs transition-all border-4 text-jaroo-cyan border-jaroo-cyan font-pixel hover:bg-jaroo-surface">
            VIEW_SOURCE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>