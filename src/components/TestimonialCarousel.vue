<template>
  <section class="bg-transparent py-12 px-6 md:px-12">
    <div class="max-w-3xl mx-auto">
      <div class="mb-10">
        <h2
          class="text-4xl text-center relative mx-auto w-full justify-center flex pb-2"
        >
          Testimonials
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
      <div class="relative" style="min-height: 340px">
        <transition :name="slideDirection" mode="out-in">
          <div
            v-if="testimonials[currentTestimonial]"
            :key="testimonials[currentTestimonial].name"
            class="bg-neutral-800 rounded-xl p-8 flex flex-col items-center gap-6 shadow-lg w-full"
          >
            <img
              :src="testimonials[currentTestimonial].photo"
              :alt="testimonials[currentTestimonial].name"
              class="w-24 h-24 rounded-full object-cover border-4 border-emerald-400 shadow-md mb-4"
            />
            <p class="text-lg text-neutral-200 italic mb-4 text-center">
              "{{ testimonials[currentTestimonial].quote }}"
            </p>
            <div class="flex flex-col items-center mb-2">
              <span class="font-semibold text-white">{{
                testimonials[currentTestimonial].name
              }}</span>
              <span class="text-neutral-400 text-sm"
                >/ {{ testimonials[currentTestimonial].role }}</span
              >
            </div>
            <div
              v-if="testimonials[currentTestimonial].rating"
              class="flex items-center gap-1 mb-2"
            >
              <template v-for="star in 5">
                <svg
                  v-if="star <= testimonials[currentTestimonial].rating"
                  :key="
                    'star-filled-' +
                    testimonials[currentTestimonial].name +
                    '-' +
                    star
                  "
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z"
                  />
                </svg>
                <svg
                  v-else
                  :key="
                    'star-empty-' +
                    testimonials[currentTestimonial].name +
                    '-' +
                    star
                  "
                  class="w-5 h-5 text-neutral-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z"
                  />
                </svg>
              </template>
            </div>
          </div>
        </transition>
        <!-- Carousel Controls -->
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-300 text-3xl px-2 focus:outline-none"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-300 text-3xl px-2 focus:outline-none"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
        <!-- Carousel Dots -->
        <div class="flex justify-center mt-6 gap-2">
          <button
            v-for="(t, idx) in testimonials"
            :key="t.name"
            @click="goToTestimonial(idx)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              idx === currentTestimonial
                ? 'bg-emerald-400 scale-125 shadow-lg'
                : 'bg-neutral-500 hover:bg-emerald-300',
            ]"
            aria-label="Go to testimonial"
          ></button>
        </div>
      </div>
    </div>
  </section>
  <section></section>
</template>

<script setup>
import { ref } from "vue";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Working with Ikpa was a fantastic experience. The website exceeded our expectations and was delivered on time!",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Product Manager, Beta Inc",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Professional, creative, and always responsive. Highly recommended for any web project.",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    role: "Founder, StartupX",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The attention to detail and design was top-notch. I will definitely work with Ikpa again!",
    rating: 5,
  },
];

const currentTestimonial = ref(0);
const slideDirection = ref("slide-left");

function nextTestimonial() {
  slideDirection.value = "slide-left";
  currentTestimonial.value =
    (currentTestimonial.value + 1) % testimonials.length;
}

function prevTestimonial() {
  slideDirection.value = "slide-right";
  currentTestimonial.value =
    (currentTestimonial.value - 1 + testimonials.length) % testimonials.length;
}

function goToTestimonial(idx) {
  slideDirection.value =
    idx > currentTestimonial.value ? "slide-left" : "slide-right";
  currentTestimonial.value = idx;
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style>
