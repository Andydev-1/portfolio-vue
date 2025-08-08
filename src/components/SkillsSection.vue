<template>
  <section class="py-16 px-6 md:px-0">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-4xl font-bold text-center relative mx-auto w-full justify-center flex mb-4"
        >
          Skills & Technologies
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Frontend Skills -->
        <div
          class="bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-700"
        >
          <h3
            class="text-2xl font-bold text-center relative mx-auto w-full justify-center flex mb-6 items-center gap-3"
          >
            <svg
              class="w-8 h-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Frontend
          </h3>
          <div class="space-y-6">
            <div
              v-for="skill in frontendSkills"
              :key="skill.name"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-neutral-300 font-medium">{{
                  skill.name
                }}</span>
                <span class="text-emerald-600 dark:text-emerald-400 text-sm"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="w-full bg-neutral-700 rounded-full h-2">
                <div
                  class="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div
          class="bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-700"
        >
          <h3
            class="text-2xl font-bold text-center relative mx-auto w-full justify-center flex mb-6 items-center gap-3"
          >
            <svg
              class="w-8 h-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-2-4h.01M17 16h.01"
              ></path>
            </svg>
            Backend
          </h3>
          <div class="space-y-6">
            <div
              v-for="skill in backendSkills"
              :key="skill.name"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-neutral-300 font-medium">{{
                  skill.name
                }}</span>
                <span class="text-emerald-600 dark:text-emerald-400 text-sm"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="w-full bg-neutral-700 rounded-full h-2">
                <div
                  class="bg-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Technologies -->
      <div
        class="mt-16 bg-neutral-800 rounded-3xl p-10 shadow-2xl border border-neutral-700"
      >
        <div class="text-center mb-12">
          <h3
            class="text-3xl font-bold text-center relative mx-auto w-full justify-center flex mb-4"
          >
            <svg
              class="w-8 h-8 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z"
              ></path>
            </svg>
            Tools & Technologies
          </h3>
          <p class="text-neutral-300 text-lg max-w-2xl mx-auto">
            Professional tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tool in tools" :key="tool.name" class="group relative">
            <div
              class="bg-neutral-800 p-6 rounded-2xl border border-neutral-700 group-hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
            >
              <div class="flex flex-col items-center space-y-4">
                <div class="relative">
                  <div
                    class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-500"
                  >
                    <svg
                      class="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path :d="tool.icon"></path>
                    </svg>
                  </div>
                  <div
                    class="absolute -inset-2 bg-emerald-500/0 group-hover:bg-emerald-500/10 rounded-xl transition-all duration-500 blur-sm"
                  ></div>
                </div>
                <div class="text-center">
                  <h4
                    class="text-neutral-300 font-semibold text-sm group-hover:text-emerald-300 transition-colors duration-300"
                  >
                    {{ tool.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const frontendSkills = ref([
  { name: "HTML/CSS", level: 100 },
  { name: "JavaScript", level: 95 },
  { name: "Vue.js", level: 85 },
  { name: "React", level: 20 },
  { name: "Tailwind CSS", level: 95 },
  { name: "TypeScript", level: 60 },
]);

const backendSkills = ref([
  { name: "Node.js", level: 60 },
  { name: "Python", level: 30 },
  { name: "PHP", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "laravel", level: 60 },
  { name: "REST APIs", level: 50 },
]);

const tools = ref([
  {
    name: "Git",
    icon: "M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V8.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82z",
  },
  {
    name: "VS Code",
    icon: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z M5.633 17.774a1 1 0 0 1-1.188.058l-1.5-1a1 1 0 0 1-.166-1.525L5.96 12L2.78 8.693a1 1 0 0 1 .166-1.525l1.5-1a1 1 0 0 1 1.188.058l3.29 2.692l6.35-6.604A1.02 1.02 0 0 1 15.999 2H16a1 1 0 0 1 .6.2l4 3a1 1 0 0 1 .4.8v12a1 1 0 0 1-.4.8l-4 3a1 1 0 0 1-1.328-.114l-6.35-6.603zM15 13.89v-3.78L12.69 12z",
  },
  {
    name: "Supabase",
    icon: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
  },
  {
    name: "Figma",
    icon: "M5.333 5.333A3.333 3.333 0 0 1 8.666 2h6.667a3.333 3.333 0 1 1 0 6.667H12v10a3.333 3.333 0 1 1-3.334-3.334a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1-3.333-3.334M12 12a3.333 3.333 0 1 0 6.666 0A3.333 3.333 0 0 0 12 12",
  },
]);
</script>
