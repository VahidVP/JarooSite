<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '../stores/gameStore'

const route = useRoute()
const gameStore = useGameStore()

onMounted(() => {
  gameStore.fetchGames()
})

const game = computed(() => {
  return gameStore.games.find(g => g.slug === route.params.slug)
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen p-8">
    <div v-if="!game && gameStore.isLoading" class="text-xl text-gray-500 animate-pulse">
      Syncing game configurations...
    </div>

    <div v-else-if="!game" class="text-center">
      <h2 class="mb-4 text-2xl font-bold text-red-500">Game Not Found</h2>
      <RouterLink to="/" class="text-jaroo-accent hover:underline">Return to catalog</RouterLink>
    </div>

    <div v-else class="w-full max-w-3xl p-8 bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl">
      <RouterLink to="/" class="block mb-6 font-mono text-sm text-gray-500 transition-colors hover:text-jaroo-accent">
        &lt; Back to Catalog
      </RouterLink>

      <div class="md:flex md:gap-8">
        <div class="w-full md:w-1/3 aspect-[3/4] bg-gray-800 rounded-xl mb-6 md:mb-0 flex items-center justify-center border border-gray-700">
          <img 
                v-if="game.cover_image_url"
                :src="game.cover_image_url" 
                :alt="game.title"
                class="object-cover w-full h-full transition-all duration-700 ease-out opacity-40 group-hover:opacity-50 group-hover:scale-105"
            />
        </div>

        <div class="flex-1">
          <h1 class="mb-2 text-4xl font-black text-white">{{ game.title }}</h1>
          <div class="mb-6 font-mono text-sm text-jaroo-accent">{{ game.genre }}</div>
          
          <p class="mb-6 leading-relaxed text-gray-300">
            {{ game.description || "No transmission description available for this designated project assignment." }}
          </p>

          <div class="flex items-center justify-between pt-4 font-mono text-sm border-t border-gray-800">
            <span class="text-gray-500">Status:</span>
            <span :class="game.status === 'Released' ? 'text-green-400' : 'text-yellow-400'" class="font-bold">
              {{ game.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>