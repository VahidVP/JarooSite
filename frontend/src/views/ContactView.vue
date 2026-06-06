<template>
  <div class="w-full max-w-3xl px-6 py-16 mx-auto">
    
    <div class="border-4 border-jaroo-cyan bg-jaroo-surface shadow-pixel">
      <div class="w-full p-2 text-xs text-black bg-jaroo-cyan font-pixel">
        COMMS_LINK.exe
      </div>
      
      <form class="flex flex-col gap-8 p-8" @submit.prevent>
        <p class="text-2xl text-gray-400 font-terminal">
          Establish a secure connection. Awaiting input...
        </p>

        <!-- Custom Input field -->
        <div class="flex flex-col">
          <label class="font-pixel text-[10px] text-jaroo-cyan mb-2">> IDENTIFY (NAME)</label>
          <input type="text" class="p-3 text-2xl text-white transition-colors bg-black border-2 border-jaroo-cyan-dark font-terminal focus:outline-none focus:border-jaroo-cyan" placeholder="ENTER_NAME">
        </div>

        <div class="flex flex-col">
          <label class="font-pixel text-[10px] text-jaroo-cyan mb-2">> PING_ADDRESS (EMAIL)</label>
          <input type="email" class="p-3 text-2xl text-white transition-colors bg-black border-2 border-jaroo-cyan-dark font-terminal focus:outline-none focus:border-jaroo-cyan" placeholder="ENTER_EMAIL">
        </div>

        <div class="flex flex-col">
          <label class="font-pixel text-[10px] text-jaroo-cyan mb-2">> TRANSMISSION_DATA (MESSAGE)</label>
          <textarea rows="5" class="p-3 text-2xl text-white transition-colors bg-black border-2 border-jaroo-cyan-dark font-terminal focus:outline-none focus:border-jaroo-cyan" placeholder="ENTER_MESSAGE"></textarea>
        </div>

        <button type="submit" class="p-4 mt-4 text-sm text-black transition-all bg-jaroo-cyan font-pixel hover:bg-white hover:shadow-pixel">
          TRANSMIT DATA
        </button>
      </form>
    </div>

  </div>
</template>