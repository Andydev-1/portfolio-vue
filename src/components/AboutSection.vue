<template>
  <section class="py-16 px-6 md:px-0">
    <div class="max-w-4xl mx-auto">
      <div class="mb-10">
        <h2
          class="text-4xl font-bold text-center relative mx-auto w-full justify-center flex pb-2 mt-10"
        >
          About Me
          <svg
            class="absolute left-1/2 -translate-x-1/2 mt-2"
            width="200"
            height="24"
            viewBox="0 0 200 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="bottom: -12px; position: absolute"
          >
            <defs>
              <linearGradient
                id="testimonialUnderlineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style="stop-color: #34d399; stop-opacity: 0.3"
                />
                <stop
                  offset="25%"
                  style="stop-color: #34d399; stop-opacity: 0.8"
                />
                <stop
                  offset="50%"
                  style="stop-color: #34d399; stop-opacity: 1"
                />
                <stop
                  offset="75%"
                  style="stop-color: #34d399; stop-opacity: 0.8"
                />
                <stop
                  offset="100%"
                  style="stop-color: #34d399; stop-opacity: 0.3"
                />
              </linearGradient>
            </defs>
            <path
              d="M10 18 Q50 8 100 18 Q150 28 190 18"
              stroke="url(#testimonialUnderlineGradient)"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 20 Q50 10 100 20 Q150 30 190 20"
              stroke="#34d399"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              opacity="0.5"
            />
          </svg>
        </h2>
      </div>

      <div
        class="bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-700"
      >
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Developer Workstation Image -->
          <div class="relative">
            <img
              src="@/assets/img/code.jpg"
              alt="Developer Workstation"
              class="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"
            ></div>
          </div>

          <!-- Right Side - Text and Buttons -->
          <div class="space-y-6">
            <p class="text-lg text-neutral-300 leading-relaxed">
              Hello! I'm Ikpa Andrew, a passionate web developer focused on
              building beautiful and functional websites with modern frameworks
              like <strong class="text-emerald-400">Vue.js</strong>,
              <strong class="text-emerald-400">Tailwind CSS</strong> and
              <strong class="text-emerald-400">Laravel</strong>. I love creating
              clean, user-friendly interfaces and always aim for pixel-perfect
              implementation.
            </p>

            <!-- Skill/Role Buttons -->
            <div class="flex flex-wrap gap-3">
              <div
                class="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Web Developer
              </div>
              <div
                class="bg-neutral-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                UI/UX Enthusiast
              </div>
            </div>

            <!-- Call-to-Action Button -->
            <button
              @click="$router.push('/resume')"
              class="bg-black border border-white text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-neutral-800 transition-colors duration-200"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static UI
</script>
