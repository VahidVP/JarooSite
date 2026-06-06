import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Game {
  id: number
  title: string
  slug: string
  genre: string
  status: string
  description: string
  cover_image_url: string
}

export const useGameStore = defineStore('games', () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  const games = ref<Game[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const releasedGames = computed(() => games.value.filter((g) => g.status === 'Released'))
  const inDevelopmentGames = computed(() =>
    games.value.filter((g) => g.status === 'In Development'),
  )

  async function fetchGames() {
    if (games.value.length > 0) return

    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/games/list`)
      if (!response.ok) throw new Error('Failed to fetch games')

      games.value = await response.json()
    } catch (e) {
      console.error(e)
      if (e instanceof Error) {
        error.value = e.message
      } else {
        error.value = 'An unknown error occurred'
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    games,
    isLoading,
    error,
    releasedGames,
    inDevelopmentGames,
    fetchGames,
  }
})
