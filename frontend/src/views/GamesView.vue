<script setup lang="ts">
import { onMounted } from 'vue'
import { useGameStore } from '../stores/gameStore'

const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})

const getImageUrl = (url: string) => {
  return url ? url : 'https://via.placeholder.com/400x300/050505/00F0FF?text=NO_SIGNAL'
}
</script>

<template>
  <div class="w-full max-w-6xl px-6 py-16 mx-auto">
    <h1 class="mb-16 text-4xl text-center text-white font-pixel">> SELECT_STAGE</h1>

    <div v-if="gameStore.isLoading" class="text-xl text-center font-pixel animate-blink">
      LOADING_CARTRIDGES...
    </div>

    <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      <RouterLink 
        v-for="game in gameStore.games" 
        :key="game.id"
        :to="{ name: 'game-details', params: { slug: game.slug } }"
        class="flex flex-col p-4 transition-all border-4 h-96 bg-jaroo-surface border-jaroo-cyan shadow-pixel hover:shadow-pixel-yellow hover:-translate-y-2 group hover:border-jaroo-yellow"
      >
        <!-- The Game Image -->
        <div class="relative flex-grow w-full mb-4 overflow-hidden border-2 bg-jaroo-black border-jaroo-cyan-dark group-hover:border-jaroo-yellow">
          <img 
            :src="getImageUrl(game.cover_image_url)" 
            :alt="game.title"
            class="object-cover w-full h-full transition-transform duration-500 render-pixelated group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none transition-all"></div>
        </div>

        <h2 class="mb-2 text-lg text-white truncate font-pixel group-hover:text-jaroo-yellow">{{ game.title }}</h2>
        
        <div class="flex items-end justify-between font-pixel text-[10px]">
          <span class="text-jaroo-magenta">{{ game.genre }}</span>
          <span :class="game.status === 'Released' ? 'text-green-400' : 'text-jaroo-yellow'">
            [{{ game.status }}]
          </span>
        </div>
      </RouterLink>

    </div>
  </div>
</template>