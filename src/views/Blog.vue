<template>
  <section
    class="bg-gradient-to-b from-neutral-900 to-neutral-800 min-h-screen transition-all duration-300"
  >
    <!-- Navigation Section -->
    <div class="mx-0 md:mx-40 px-4 md:px-0">
      <nav class="transition-colors duration-300">
        <div class="flex justify-between md:gap-90 pt-6 mr-2 md:mr-30">
          <div
            class="flex-start size-15 rounded-full bg-radial-[at_25%_25%] from-neutral-700 to-neutral-800 to-75% cursor-pointer transition-all duration-300 hover:scale-110"
            @click="toggleTheme"
          >
            <div
              class="size-15 rounded-full bg-neutral-800 p-2.5 transition-all duration-300"
            >
              <!-- Sun Icon for Light Mode -->
              <svg
                v-if="!isDark"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clip-path="url(#siSunLine0)">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
                    />
                  </g>
                  <defs>
                    <clipPath id="siSunLine0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <!-- Moon Icon for Dark Mode -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clip-path="url(#siMoonLine0)">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="siMoonLine0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
          </div>
          <!-- Desktop Nav -->
          <div
            class="hidden md:flex items-center bg-neutral-800 rounded-full px-8 py-2 transition-all duration-300 shadow-md border border-neutral-700"
          >
            <nav class="flex gap-8 w-full justify-center">
              <router-link
                to="/"
                class="flex items-center px-4 py-2 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                :class="{ 'text-emerald-400': $route.path === '/' }"
              >
                Home
              </router-link>
              <router-link
                to="/blog"
                class="flex items-center px-4 py-2 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                :class="{ 'text-emerald-400': $route.path.startsWith('/blog') }"
              >
                Blog
              </router-link>
            </nav>
          </div>
          <!-- Mobile Nav -->
          <div
            class="flex md:hidden items-center bg-neutral-800 rounded-full px-4 py-2 transition-all duration-300 shadow-md border border-neutral-700"
          >
            <nav class="flex gap-4 w-full justify-center">
              <router-link
                to="/"
                class="flex items-center px-2 py-1 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                :class="{ 'text-emerald-400': $route.path === '/' }"
              >
                Home
              </router-link>
              <router-link
                to="/blog"
                class="flex items-center px-2 py-1 rounded-full font-medium text-neutral-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                :class="{ 'text-emerald-400': $route.path.startsWith('/blog') }"
              >
                Blog
              </router-link>
            </nav>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto pt-16 pb-10 px-4 text-center">
      <h1
        class="text-5xl md:text-6xl font-extrabold text-emerald-400 mb-4 drop-shadow-lg"
      >
        Insights & Inspiration
      </h1>
      <p class="text-xl md:text-2xl text-neutral-200 mb-8">
        Discover expert tips, stories, and strategies to elevate your business
        and digital presence.
      </p>
      <div class="flex justify-center gap-4">
        <span
          class="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse"
        >
          New
        </span>
        <span
          class="inline-block bg-neutral-700 text-emerald-300 px-4 py-1 rounded-full text-sm font-semibold shadow-md"
        >
          For Entrepreneurs
        </span>
      </div>
    </div>
    <!-- Blog Posts Grid -->
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-emerald-400/30 transition-transform duration-300 group"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-56 object-cover group-hover:brightness-110 transition duration-300"
        />
        <div class="p-6">
          <h2
            class="text-2xl font-bold text-emerald-400 mb-2 group-hover:underline"
          >
            {{ post.title }}
          </h2>
          <p class="text-neutral-300 mb-4">{{ post.excerpt }}</p>
          <div
            class="flex items-center justify-between text-sm text-neutral-400"
          >
            <span>{{ post.author }}</span>
            <span>{{ post.date }}</span>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </section>
</template>

<script setup>
import FooterSection from "../components/FooterSection.vue";
import { useTheme } from "../composables/useTheme.js";

const { isDark, toggleTheme } = useTheme();

const posts = [
  {
    id: 1,
    title: "How a Modern Website Can Skyrocket Your Business",
    excerpt:
      "Discover why investing in a professional website is the best decision for your brand in 2024.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    author: "Ikpa Andrew",
    date: "May 2024",
  },
  {
    id: 2,
    title: "5 Design Secrets to Captivate Your Audience",
    excerpt:
      "Learn the top design principles that keep visitors engaged and turn them into loyal clients.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    author: "Ikpa Andrew",
    date: "May 2024",
  },
  {
    id: 3,
    title: "Boost Your Brand with Authentic Storytelling",
    excerpt:
      "See how sharing your story can build trust and set you apart in a crowded market.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    author: "Ikpa Andrew",
    date: "April 2024",
  },
  {
    id: 4,
    title: "The Power of Responsive Design for Mobile Clients",
    excerpt:
      "Why mobile-first design is no longer optional—and how it can win you more business.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    author: "Ikpa Andrew",
    date: "April 2024",
  },
];
</script>
