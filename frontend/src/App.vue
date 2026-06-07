<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen text-xl bg-jaroo-black text-jaroo-cyan font-terminal selection:bg-jaroo-cyan selection:text-black">
    
    <header class="sticky top-0 z-50 w-full p-6 border-b-4 bg-jaroo-black border-jaroo-cyan">
      <div class="flex flex-col items-center justify-between gap-4 mx-auto md:flex-row max-w-7xl">
        
        <RouterLink to="/" class="text-xl transition-colors font-pixel hover:text-white">
          > JAROO_STUDIO<span class="animate-blink">_</span>
        </RouterLink>
        
        <nav class="flex gap-8 text-xs tracking-widest font-pixel">
          <RouterLink to="/games" class="transition-transform hover:text-jaroo-magenta hover:-translate-y-1">GAMES</RouterLink>
          <RouterLink to="/docs" class="transition-transform hover:text-jaroo-yellow hover:-translate-y-1">DOCS</RouterLink>
          <RouterLink to="/about" class="transition-transform hover:text-jaroo-cyan hover:-translate-y-1">ABOUT</RouterLink>
          <RouterLink to="/contact" class="transition-transform hover:text-white hover:-translate-y-1">CONTACT</RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex flex-col items-center flex-grow w-full">
      <RouterView v-slot="{ Component }">
        <transition name="pixel-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="w-full mt-24 border-t-4 bg-jaroo-black border-jaroo-panel">
      <div class="flex flex-col items-center justify-between w-full p-6 mx-auto md:flex-row max-w-7xl">
        <div class="mb-4 text-xs text-gray-500 font-pixel md:mb-0">
          © {{ new Date().getFullYear() }} JAROO STUDIO. PRESS START.
        </div>
        
        <div class="flex gap-6 text-sm font-pixel text-jaroo-cyan-dark">
          <a href="#" class="transition-colors hover:text-jaroo-cyan">LINKEDIN</a>
          <a href="#" class="transition-colors hover:text-jaroo-magenta">INSTAGRAM</a>
          <a href="#" class="transition-colors hover:text-white">X</a>
          <a href="#" class="transition-colors hover:text-jaroo-red ">ITCH.IO</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.pixel-fade-enter-active, .pixel-fade-leave-active {
  transition: opacity 0.15s steps(3, end);
}
.pixel-fade-enter-from, .pixel-fade-leave-to {
  opacity: 0;
}
</style>