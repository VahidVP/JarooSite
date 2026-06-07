<script setup lang="ts">
import { ref } from 'vue'

// 1. Define our Types (Professional TypeScript Architecture)
interface DocItem {
  id: number;
  title: string;
  isNew: boolean;
  content: string;
}

interface Directory {
  id: string;
  name: string;
  isOpen: boolean;
  docs: DocItem[];
}

const fileSystem = ref<Directory[]>([
  {
    id: 'dir_rnd',
    name: 'R&D_INITIATIVES',
    isOpen: true,
    docs: [
      {
        id: 1,
        title: '04_Project_RAGGE_AI.md',
        isNew: true,
        content: `
          <h3 class="mb-4 text-2xl text-jaroo-yellow font-pixel">💥 THE FUTURE OF INTERACTIVE STORYTELLING</h3>
          <p class="mb-4 text-xl text-gray-300 font-terminal">For decades, conversations in video games have been limited by static, predictable scripts. What if they weren't? What if every character could be a dynamic, responsive entity, powered by AI that runs efficiently on a player's local machine?</p>
          <p class="mb-4 text-xl text-gray-300 font-terminal">At Jaroo Studio, we are proud to announce our new R&D initiative to solve modern game development's biggest challenge: high-performance AI integration. <strong>Enter Project RAGGE (Retrieval-Augmented Generation for Game Environments).</strong></p>
          
          <p class="mb-4 text-xl text-jaroo-cyan font-terminal">This isn't just an API plug-in. We are building a comprehensive methodology:</p>
          <ul class="pl-4 mb-6 space-y-2 text-xl text-gray-400 list-none font-terminal">
            <li><span class="text-jaroo-magenta">></span> <strong>Advanced Prompt Engineering:</strong> Creating unique, lore-consistent NPC personalities.</li>
            <li><span class="text-jaroo-magenta">></span> <strong>Efficient Fine-Tuning:</strong> Utilizing LoRA/PEFT to specialize models specifically for branching dialogue.</li>
            <li><span class="text-jaroo-magenta">></span> <strong>Quantization:</strong> Ensuring our models are lightweight enough to run entirely offline on low-end systems.</li>
            <li><span class="text-jaroo-magenta">></span> <strong>Custom Inference Engine:</strong> Designed from scratch for zero-latency responses required in real-time environments.</li>
          </ul>
          <p class="text-xl text-gray-300 font-terminal">Our ultimate goal is to develop a repeatable, scalable framework that empowers developers to create richer, more immersive worlds. This is just the beginning.</p>
        `
      }
    ]
  },
  {
    id: 'dir_engine',
    name: 'JAROO_ENGINE_CORE',
    isOpen: true,
    docs: [
      {
        id: 2,
        title: '01_Pixel_Perfect_Camera.md',
        isNew: false,
        content: `
          <h3 class="mb-4 text-2xl text-white font-pixel">CAMERA LOGIC / JITTER PREVENTION</h3>
          <p class="mb-4 text-xl text-gray-300 font-terminal">To eliminate sub-pixel jitter in low-resolution 2D environments, we completely bypass Godot's default camera smoothing. Instead, we implemented a custom Viewport scaling script.</p>
          <p class="text-xl text-gray-300 font-terminal">This module intercepts the player's world coordinates and locks the camera's target to the nearest exact integer pixel before rendering the frame. This guarantees that 8-bit assets never warp or distort during high-speed movement or dashing mechanics.</p>
        `
      },
      {
        id: 3,
        title: '02_Custom_2D_Physics.md',
        isNew: false,
        content: `
          <h3 class="mb-4 text-2xl text-white font-pixel">DETERMINISTIC MOVEMENT ENGINE</h3>
          <p class="mb-4 text-xl text-gray-300 font-terminal">Standard physics engines feel too 'floaty' for tight, responsive roguelites. We override Godot's built-in <code>_physics_process</code> to implement our own AABB (Axis-Aligned Bounding Box) collision checks.</p>
          <p class="text-xl text-gray-300 font-terminal">By manually calculating velocity vectors rather than relying on simulated forces, we achieve immediate momentum halting and frame-perfect dash invincibility, giving the player absolute mechanical control.</p>
        `
      },
      {
        id: 4,
        title: '03_Audio_Manager.md',
        isNew: false,
        content: `
          <h3 class="mb-4 text-2xl text-white font-pixel">AUDIO POOLING SYSTEM</h3>
          <p class="mb-4 text-xl text-gray-300 font-terminal">A common issue in Godot is <code>AudioStreamPlayer</code> nodes cutting themselves off if re-triggered before finishing. In bullet-hell scenarios, this breaks immersion.</p>
          <p class="text-xl text-gray-300 font-terminal">Our AutoLoad Singleton dynamically instantiates an array of 16 audio channels. When a sound is requested, the manager routes it to the oldest idle channel. This allows multiple identical sound effects (like overlapping enemy explosions) to stack flawlessly without clipping.</p>
        `
      }
    ]
  }
])

// 3. THE FIX: We use '!' at the end to assure TypeScript that this item definitively exists.
const activeDoc = ref<DocItem>(fileSystem.value[0]!.docs[0]!)
</script>

<template>
  <div class="flex flex-col w-full max-w-6xl gap-8 px-6 py-16 mx-auto md:flex-row">
    
    <div class="w-full md:w-1/3">
      <h1 class="mb-8 text-3xl text-white font-pixel">> ROOT/DOCS</h1>
      
      <div class="p-1 border-4 bg-jaroo-surface border-jaroo-panel">
        <div class="w-full p-2 text-xs text-black bg-jaroo-panel font-pixel">
          FILE_EXPLORER.exe
        </div>
        
        <div class="flex flex-col py-4 overflow-hidden">
          
          <div v-for="dir in fileSystem" :key="dir.id" class="mb-4">
            
            <div 
              @click="dir.isOpen = !dir.isOpen"
              class="flex items-center px-4 py-2 text-sm transition-colors cursor-pointer select-none text-jaroo-yellow font-pixel hover:bg-jaroo-panel"
            >
              <span class="mr-2 shrink-0">{{ dir.isOpen ? '[-]' : '[+]' }}</span>
              <span class="flex-1 truncate">/{{ dir.name }}</span>
            </div>

            <ul v-show="dir.isOpen" class="flex flex-col pl-4 mt-2">
              <li 
                v-for="doc in dir.docs" 
                :key="doc.id"
                @click="activeDoc = doc"
                class="flex items-center px-4 py-3 text-[10px] sm:text-xs cursor-pointer font-pixel transition-colors group min-w-0"
                :class="activeDoc.id === doc.id ? 'bg-jaroo-cyan text-black' : 'text-gray-400 hover:text-white hover:bg-jaroo-panel'"
              >
                <span class="mr-2 shrink-0" :class="activeDoc.id === doc.id ? 'text-black' : 'text-jaroo-cyan group-hover:text-white'">></span> 
                
                <span class="flex-1 truncate">{{ doc.title }}</span>
                
                <span v-if="doc.isNew" class="ml-2 text-[8px] animate-blink shrink-0" :class="activeDoc.id === doc.id ? 'text-jaroo-magenta' : 'text-jaroo-yellow'">NEW</span>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>

    <div class="w-full md:w-2/3">
      <div class="w-full p-3 mb-6 text-xs text-white bg-red-600 font-pixel animate-pulse">
        WARNING: SYSTEM_STILL_IN_DEVELOPMENT // SOME DATA MAY BE REDACTED
      </div>
      
      <div class="p-8 border-4 shadow-pixel bg-jaroo-black border-jaroo-cyan min-h-[500px] relative scanlines">
        
        <div class="flex items-center justify-between pb-4 mb-8 border-b-2 border-dashed border-jaroo-cyan-dark">
          <span class="text-xs truncate text-jaroo-cyan font-pixel max-w-[70%]">READING: {{ activeDoc.title }}</span>
          <span class="text-xs text-gray-500 shrink-0 font-pixel">ENCRYPTED</span>
        </div>
        
        <div v-html="activeDoc.content" class="leading-relaxed break-words"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Styling for the dynamically injected HTML strings */
:deep(strong) {
  color: #00F0FF;
}
:deep(code) {
  background-color: #141414;
  padding: 2px 6px;
  color: #FFEA00;
  border: 1px solid #008B99;
}
</style>