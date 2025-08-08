<template>
  <section
    class="min-h-screen px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-b from-neutral-900 to-neutral-800 dark:from-neutral-900 dark:to-neutral-800"
  >
    <div
      class="max-w-4xl mx-auto bg-white/90 dark:bg-neutral-900/80 backdrop-blur rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
    >
      <!-- Header -->
      <header
        class="px-6 sm:px-10 py-8 bg-neutral-50 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-700"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1
              class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
            >
              Ikpa Andrew
            </h1>
            <p class="text-neutral-600 dark:text-neutral-300 mt-1">
              junior web Developer • Vue.js • Node.js • PHP/Laravel • MySQL
            </p>
          </div>
          <div
            class="text-neutral-700 dark:text-neutral-300 text-sm sm:text-right"
          >
            <div class="flex sm:block gap-2 sm:gap-0">
              <a
                href="mailto:ikpaandrew057@gmail.com"
                class="text-emerald-700 dark:text-emerald-400 hover:underline"
                >ikpaandrew057@gmail.com</a
              >
            </div>
            <div>+234 813 256 0739</div>
            <div class="text-neutral-600 dark:text-neutral-400">
              Lagos, Nigeria
            </div>
          </div>
        </div>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            class="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
            >Open to Work</span
          >
          <span
            class="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 dark:bg-neutral-700/50 dark:text-neutral-200"
            >Remote & Onsite</span
          >
        </div>
      </header>

      <div class="px-6 sm:px-10 py-8 space-y-8">
        <!-- Summary -->
        <section>
          <h2
            class="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white"
          >
            Professional Summary
          </h2>
          <p
            class="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            Full‑stack oriented developer crafting modern, accessible interfaces
            with Vue.js and Tailwind CSS, and actively building server‑side
            skills with Node.js, PHP/Laravel, and SQL databases (MySQL).
            Experienced delivering responsive, high‑performance web apps with
            clean component architecture, smooth animations, and attention to
            detail. Focused on end‑to‑end product quality, API integration, and
            scalable UI patterns.
          </p>
        </section>

        <!-- Skills -->
        <section>
          <h2
            class="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white"
          >
            Core Skills
          </h2>
          <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <ul class="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Vue 3 (Composition API)</li>
              <li>Vue Router, Pinia</li>
              <li>JavaScript (ES2023)</li>
            </ul>
            <ul class="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Node.js (Express)</li>
              <li>PHP / Laravel</li>
              <li>MySQL • REST APIs</li>
            </ul>
            <ul class="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Tailwind CSS, Vite</li>
              <li>Git/GitHub, CI basics</li>
              <li>Testing & Debugging</li>
            </ul>
          </div>
        </section>

        <!-- Experience -->
        <section>
          <h2
            class="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white"
          >
            Experience
          </h2>
          <div class="mt-3 space-y-6">
            <div>
              <div class="flex items-start justify-between gap-4">
                <h3 class="font-semibold text-neutral-900 dark:text-white">
                  Frontend / Aspiring Full‑Stack Developer • Freelance
                </h3>
                <span class="text-sm text-neutral-600 dark:text-neutral-400"
                  >2022 — Present</span
                >
              </div>
              <ul
                class="mt-2 list-disc pl-5 text-neutral-700 dark:text-neutral-300 space-y-1"
              >
                <li>
                  Built responsive landing pages and dashboards in Vue 3,
                  improving Lighthouse scores to 90+.
                </li>
                <li>
                  Implemented component libraries with Tailwind CSS, reducing
                  CSS churn and improving delivery speed.
                </li>
                <li>
                  Integrated REST APIs; built small Node/Express endpoints for
                  demos.
                </li>
                <li>
                  Basic CRUD with Laravel and MySQL while learning full‑stack
                  patterns.
                </li>
              </ul>
            </div>
            <div>
              <div class="flex items-start justify-between gap-4">
                <h3 class="font-semibold text-neutral-900 dark:text-white">
                  UI Developer • Personal Projects
                </h3>
                <span class="text-sm text-neutral-600 dark:text-neutral-400"
                  >2022 — present</span
                >
              </div>
              <ul
                class="mt-2 list-disc pl-5 text-neutral-700 dark:text-neutral-300 space-y-1"
              >
                <li>
                  Prototyped and shipped interactive components (carousels,
                  charts, cards) with accessible markup.
                </li>
                <li>
                  Maintained clean Git workflows and documentation for
                  scalability and handoff.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section>
          <h2
            class="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white"
          >
            Selected Projects
          </h2>
          <div class="mt-3 grid sm:grid-cols-2 gap-4">
            <div
              class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/60"
            >
              <h3 class="font-semibold text-neutral-900 dark:text-white">
                Sir Larry Charity Foundation
              </h3>
              <p class="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                Non‑profit website with donation flow and responsive UI.
              </p>
              <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                Vue, Tailwind
              </p>
            </div>
            <div
              class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/60"
            >
              <h3 class="font-semibold text-neutral-900 dark:text-white">
                Legacy Cars (Ecommerce)
              </h3>
              <p class="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                Catalog, cart, and checkout with modern UI patterns.
              </p>
              <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                Vue, Tailwind, Supabase
              </p>
            </div>
          </div>
        </section>

        <!-- Education & Certs -->
        <section class="grid sm:grid-cols-2 gap-6">
          <div>
            <h2
              class="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white"
            >
              Education
            </h2>
            <p class="mt-2 text-neutral-700 dark:text-neutral-300">
              B.Sc. Computer Science (or Equivalent Experience)
            </p>
          </div>
          <div>
            <h2
              class="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white"
            >
              Certifications
            </h2>
            <ul
              class="mt-2 text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-1"
            >
              <li>Frontend Developer Path (2024)</li>
              <li>JavaScript Algorithms & Data Structures</li>
            </ul>
          </div>
        </section>

        <!-- Actions -->
        <div class="pt-2 flex items-center gap-3">
          <button
            @click="downloadPDF"
            class="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
          >
            Download PDF
          </button>
          <router-link
            to="/"
            class="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50 transition-colors"
            >Back Home</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const downloadPDF = () => {
  window.print();
};
</script>

<style scoped>
@media print {
  section {
    padding: 0 !important;
  }
  .backdrop-blur {
    backdrop-filter: none !important;
  }
  .shadow-2xl {
    box-shadow: none !important;
  }
  .border {
    border-color: #e5e7eb !important;
  }
  button,
  a[href] {
    display: none !important;
  }
}
</style>
