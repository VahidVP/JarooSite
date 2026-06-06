<script setup lang="ts">
import { onMounted } from 'vue'
import { useGameStore } from '../stores/gameStore'

const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})
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
        class="flex flex-col p-4 transition-all border-4 bg-jaroo-surface border-jaroo-cyan shadow-pixel hover:shadow-pixel-hover hover:translate-y-1 group h-80"
      >
        <!-- The Game "Screen" -->
        <div class="relative flex items-center justify-center flex-grow w-full mb-4 overflow-hidden bg-black border-2 border-jaroo-cyan-dark">
          <span class="font-terminal text-jaroo-cyan-dark">NO SIGNAL</span>
          
          <!-- Scanline overlay effect -->
          <div class="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none group-hover:bg-[length:100%_2px] transition-all"></div>
        </div>

        <h2 class="mb-2 text-lg text-white truncate font-pixel">{{ game.title }}</h2>
        
        <div class="flex justify-between items-end font-pixel text-[10px]">
          <span class="text-jaroo-cyan-dark">{{ game.genre }}</span>
          <span :class="game.status === 'Released' ? 'text-green-400' : 'text-yellow-400'">
            [{{ game.status }}]
          </span>
        </div>
      </RouterLink>

    </div>
  </div>
</template>