<template>
  <div class="floating-menu-container">
    <!-- Main floating button -->
    <div class="floating-button" @click="toggleMenu">
      <div class="menu-icon" :class="{ open: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Menu items -->
    <div class="menu-items" :class="{ open: isOpen }">
      <div
        v-for="(item, index) in menuItems"
        :key="item.id"
        class="menu-item"
        :style="{ '--delay': `${index * 0.1}s` }"
        @click="scrollToSection(item.id)"
      >
        <div class="menu-item-content">
          <span class="menu-item-icon">{{ item.icon }}</span>
          <span class="menu-item-text">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

const menuItems = [
  { id: "home", text: "Home", icon: "🏠" },
  { id: "about", text: "About", icon: "👤" },
  { id: "skills", text: "Skills", icon: "⚡" },
  { id: "projects", text: "Projects", icon: "💼" },
  { id: "testimonials", text: "Testimonials", icon: "💬" },
  { id: "contact", text: "Contact", icon: "📧" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  isOpen.value = false;
};

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const menuContainer = event.target.closest(".floating-menu-container");
  if (!menuContainer && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.floating-menu-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  pointer-events: none;
}

.floating-button {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 32px var(--shadow-light);
  border: 2px solid var(--border-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
}

.floating-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px var(--shadow-medium);
  border-color: var(--accent-color);
}

.menu-icon {
  width: 24px;
  height: 18px;
  position: relative;
  transition: all 0.3s ease;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  position: absolute;
  transition: all 0.3s ease;
}

.menu-icon span:nth-child(1) {
  top: 0;
}

.menu-icon span:nth-child(2) {
  top: 8px;
}

.menu-icon span:nth-child(3) {
  top: 16px;
}

.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 8px;
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 8px;
}

.menu-items {
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.menu-items.open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.menu-item {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border-radius: 12px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 16px var(--shadow-light);
  transition: all 0.3s ease;
  transform: translateX(20px);
  opacity: 0;
  animation: slideIn 0.3s ease forwards;
  animation-delay: var(--delay);
}

.menu-item:hover {
  transform: translateX(-5px);
  background: linear-gradient(135deg, var(--bg-tertiary), var(--accent-color));
  border-color: var(--accent-color);
  box-shadow: 0 6px 20px var(--shadow-medium);
}

.menu-item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
}

.menu-item-icon {
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}

.menu-item-text {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
}

@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .floating-menu-container {
    bottom: 1rem;
    right: 1rem;
  }

  .floating-button {
    width: 50px;
    height: 50px;
  }

  .menu-items {
    bottom: 60px;
  }

  .menu-item {
    padding: 0.5rem 0.75rem;
  }

  .menu-item-text {
    font-size: 0.8rem;
  }
}
</style>
