<template>
  <div class="w-full max-w-4xl px-6 py-16 mx-auto">
    <h1 class="mb-12 text-4xl text-white font-pixel">> ENGINE_DOCS</h1>
    
    <div class="p-8 border-4 shadow-pixel border-jaroo-cyan bg-jaroo-surface">
      <h2 class="mb-6 text-2xl text-jaroo-yellow font-pixel">Godot_Jaroo_Build_v1.0</h2>
      
      <p class="mb-8 text-2xl text-gray-300 font-terminal">
        Welcome to the technical documentation for Jaroo Studio's custom Godot architecture.
        Select a module below to view the source specifications.
      </p>

      <ul class="space-y-4 text-xl font-terminal">
        <li class="flex items-center gap-4 cursor-pointer hover:text-jaroo-magenta">
          <span class="text-jaroo-cyan">[+]</span> 01_Pixel_Perfect_Camera_Setup.md
        </li>
        <li class="flex items-center gap-4 cursor-pointer hover:text-jaroo-magenta">
          <span class="text-jaroo-cyan">[+]</span> 02_Custom_2D_Physics_Overrides.md
        </li>
        <li class="flex items-center gap-4 cursor-pointer hover:text-jaroo-magenta">
          <span class="text-jaroo-cyan">[+]</span> 03_Audio_Manager_Singleton.md
        </li>
      </ul>
      
      <div class="inline-block p-4 mt-12 text-xs text-black bg-jaroo-magenta font-pixel">
        WARNING: SYSTEM_STILL_IN_DEVELOPMENT
      </div>
    </div>
  </div>
</template>