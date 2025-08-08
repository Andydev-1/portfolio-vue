<template>
  <section class="bg-neutral-900 py-16 px-6 md:px-0">
    <div class="max-w-2xl mx-auto bg-neutral-800 rounded-2xl shadow-lg p-10">
      <h2 class="text-3xl font-bold text-center text-white mb-8">Contact Me</h2>
      <form class="space-y-6">
        <div>
          <label class="block text-neutral-300 mb-2" for="name">Name</label>
          <input
            id="name"
            type="text"
            class="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label class="block text-neutral-300 mb-2" for="email">Email</label>
          <input
            id="email"
            type="email"
            class="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="you@email.com"
            required
          />
        </div>
        <div>
          <label class="block text-neutral-300 mb-2" for="message"
            >Message</label
          >
          <textarea
            id="message"
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Type your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg transition-colors duration-200 shadow-md"
        >
          Send Message
        </button>
      </form>
      <div class="mt-10 text-center text-neutral-400">
        <p>
          Email:
          <a
            href="mailto:your@email.com"
            class="text-emerald-400 hover:underline"
            >your@email.com</a
          >
        </p>
        <p>
          Phone:
          <a href="tel:+1234567890" class="text-emerald-400 hover:underline"
            >+1 234 567 890</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static UI
</script>
