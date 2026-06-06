<script setup lang="ts">
import { ref } from 'vue'

const alias = ref('')
const message = ref('')
const status = ref('AWAITING_INPUT')

const transmit = () => {
  if (!alias.value || !message.value) {
    status.value = 'ERROR: INCOMPLETE_PACKET'
    setTimeout(() => status.value = 'AWAITING_INPUT', 2000)
    return
  }
  status.value = 'TRANSMITTING_DATA...'
  // Here is where you would eventually call your Django API
  setTimeout(() => {
    status.value = 'TRANSMISSION_SUCCESSFUL'
    alias.value = ''
    message.value = ''
  }, 1500)
}
</script>

<template>
  <div class="w-full max-w-4xl px-6 py-16 mx-auto">
    
    <div class="border-4 shadow-pixel border-jaroo-cyan bg-jaroo-black scanlines">
      <!-- Terminal Header -->
      <div class="flex justify-between w-full p-2 text-xs text-black bg-jaroo-cyan font-pixel">
        <span>root@jaroo-studio:~/comms</span>
        <span>_ □ X</span>
      </div>
      
      <!-- Terminal Window -->
      <div class="p-8 text-2xl text-gray-300 font-terminal min-h-[400px] flex flex-col">
        <p class="mb-2">Jaroo Secure Shell v2.4.1</p>
        <p class="mb-6">Establishing secure connection to QasemSag and JasemSag...</p>
        <p class="mb-8 text-jaroo-cyan">> STATUS: {{ status }} <span class="animate-blink">_</span></p>

        <div v-if="status === 'AWAITING_INPUT' || status.includes('ERROR')" class="flex flex-col gap-4">
          
          <div class="flex items-center gap-4">
            <span class="text-jaroo-cyan">~/alias$</span>
            <!-- Borderless input that looks like terminal text -->
            <input 
              v-model="alias" 
              type="text" 
              class="flex-1 text-white bg-transparent border-none outline-none focus:ring-0 caret-jaroo-cyan" 
              placeholder="enter_your_name..."
            >
          </div>

          <div class="flex items-start gap-4">
            <span class="text-jaroo-cyan">~/msg$</span>
            <textarea 
              v-model="message" 
              rows="3" 
              class="flex-1 text-white bg-transparent border-none outline-none resize-none focus:ring-0 caret-jaroo-cyan" 
              placeholder="type_your_message_here..."
            ></textarea>
          </div>

          <div class="mt-8">
            <button @click="transmit" class="p-2 text-black transition-colors bg-jaroo-cyan hover:bg-white font-pixel text-[10px]">
              ./execute_transmission.sh
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>