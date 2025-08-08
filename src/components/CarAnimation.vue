<template>
  <div class="car-animation-container" @click="triggerAnimation">
    <div class="car-wrapper" :class="{ animated: isAnimating, driving: isDriving }">
      <div class="car-body">
        <!-- Car main body -->
        <div class="car-roof"></div>
        <div class="car-windshield"></div>
        <div class="car-door"></div>
        <div class="car-handle"></div>
        
        <!-- Car lights -->
        <div class="headlight left" :class="{ on: lightsOn }"></div>
        <div class="headlight right" :class="{ on: lightsOn }"></div>
        <div class="taillight left"></div>
        <div class="taillight right"></div>
        
        <!-- Car wheels -->
        <div class="wheel front" :class="{ spinning: isDriving }"></div>
        <div class="wheel rear" :class="{ spinning: isDriving }"></div>
      </div>
      
      <!-- Exhaust smoke animation -->
      <div class="exhaust-smoke" v-if="!isElectric && isDriving">
        <div class="smoke-particle" v-for="n in 5" :key="n" :style="{ animationDelay: n * 0.2 + 's' }"></div>
      </div>
      
      <!-- Electric sparks for electric cars -->
      <div class="electric-effects" v-if="isElectric && isDriving">
        <div class="spark" v-for="n in 8" :key="n" :style="{ animationDelay: n * 0.1 + 's' }"></div>
      </div>
    </div>
    
    <!-- Road animation -->
    <div class="road" v-if="showRoad">
      <div class="road-line" v-for="n in 10" :key="n" :style="{ animationDelay: n * 0.1 + 's' }"></div>
    </div>
    
    <!-- Control buttons -->
    <div class="controls" v-if="showControls">
      <button @click.stop="toggleDriving" class="control-btn">
        {{ isDriving ? '⏸️' : '▶️' }}
      </button>
      <button @click.stop="toggleLights" class="control-btn">
        💡
      </button>
      <button @click.stop="honkHorn" class="control-btn">
        🔊
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'CarAnimation',
  props: {
    isElectric: {
      type: Boolean,
      default: false
    },
    showRoad: {
      type: Boolean,
      default: true
    },
    showControls: {
      type: Boolean,
      default: true
    },
    autoStart: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isAnimating = ref(false);
    const isDriving = ref(false);
    const lightsOn = ref(false);
    
    const triggerAnimation = () => {
      isAnimating.value = true;
      setTimeout(() => {
        isAnimating.value = false;
      }, 1000);
    };
    
    const toggleDriving = () => {
      isDriving.value = !isDriving.value;
      if (isDriving.value) {
        lightsOn.value = true;
      }
    };
    
    const toggleLights = () => {
      lightsOn.value = !lightsOn.value;
    };
    
    const honkHorn = () => {
      // Visual feedback for horn
      isAnimating.value = true;
      setTimeout(() => {
        isAnimating.value = false;
      }, 300);
    };
    
    onMounted(() => {
      if (props.autoStart) {
        setTimeout(() => {
          toggleDriving();
        }, 500);
      }
    });
    
    return {
      isAnimating,
      isDriving,
      lightsOn,
      triggerAnimation,
      toggleDriving,
      toggleLights,
      honkHorn
    };
  }
};
</script>

<style scoped>
.car-animation-container {
  position: relative;
  width: 300px;
  height: 200px;
  margin: 20px auto;
  cursor: pointer;
  overflow: hidden;
}

.car-wrapper {
  position: relative;
  width: 200px;
  height: 80px;
  margin: 0 auto;
  transform-origin: center;
  transition: transform 0.3s ease;
}

.car-wrapper.animated {
  animation: bounce 0.5s ease-in-out;
}

.car-wrapper.driving {
  animation: driving 2s ease-in-out infinite;
}

.car-body {
  position: relative;
  width: 200px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  border-radius: 20px 20px 10px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.car-roof {
  position: absolute;
  top: -20px;
  left: 40px;
  width: 120px;
  height: 40px;
  background: linear-gradient(135deg, #1e40af, #1e3a8a);
  border-radius: 15px 15px 5px 5px;
}

.car-windshield {
  position: absolute;
  top: -15px;
  left: 45px;
  width: 110px;
  height: 30px;
  background: rgba(135, 206, 235, 0.8);
  border-radius: 10px 10px 0 0;
  border: 2px solid #1e40af;
}

.car-door {
  position: absolute;
  top: 10px;
  left: 120px;
  width: 60px;
  height: 50px;
  border: 2px solid #1e3a8a;
  border-radius: 5px;
}

.car-handle {
  position: absolute;
  top: 30px;
  left: 170px;
  width: 8px;
  height: 4px;
  background: #374151;
  border-radius: 2px;
}

.headlight {
  position: absolute;
  top: 30px;
  width: 15px;
  height: 15px;
  background: #fbbf24;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.headlight.left {
  left: -5px;
}

.headlight.right {
  left: 10px;
}

.headlight.on {
  background: #fde047;
  box-shadow: 0 0 20px #fde047, 0 0 40px #fde047;
}

.taillight {
  position: absolute;
  top: 35px;
  width: 10px;
  height: 10px;
  background: #dc2626;
  border-radius: 50%;
}

.taillight.left {
  right: 5px;
}

.taillight.right {
  right: 20px;
}

.wheel {
  position: absolute;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, #374151 60%, #111827 100%);
  border-radius: 50%;
  border: 3px solid #6b7280;
  top: 60px;
}

.wheel.front {
  left: 20px;
}

.wheel.rear {
  right: 20px;
}

.wheel.spinning {
  animation: spin 0.3s linear infinite;
}

.wheel::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #9ca3af;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.wheel::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #374151;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.exhaust-smoke {
  position: absolute;
  right: 10px;
  top: 40px;
}

.smoke-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #6b7280;
  border-radius: 50%;
  opacity: 0;
  animation: smoke 2s ease-out infinite;
}

.electric-effects {
  position: absolute;
  width: 100%;
  height: 100%;
}

.spark {
  position: absolute;
  width: 3px;
  height: 8px;
  background: #06b6d4;
  border-radius: 2px;
  opacity: 0;
  animation: electricSpark 1s ease-out infinite;
}

.spark:nth-child(odd) {
  background: #8b5cf6;
}

.road {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #374151;
  overflow: hidden;
}

.road-line {
  position: absolute;
  top: 18px;
  width: 30px;
  height: 4px;
  background: #fbbf24;
  border-radius: 2px;
  animation: roadMove 1s linear infinite;
}

.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.control-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.control-btn:hover {
  background: white;
  transform: scale(1.1);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes driving {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-2px) rotate(0.5deg); }
  75% { transform: translateY(-1px) rotate(-0.5deg); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes smoke {
  0% {
    opacity: 0.8;
    transform: translateY(0) scale(0.5);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(1.5);
  }
}

@keyframes electricSpark {
  0% {
    opacity: 1;
    transform: translateY(0) scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-15px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-25px) scale(0.3);
  }
}

@keyframes roadMove {
  0% {
    left: -30px;
  }
  100% {
    left: 100%;
  }
}

/* Position sparks randomly */
.spark:nth-child(1) { left: 10%; top: 20%; }
.spark:nth-child(2) { left: 90%; top: 60%; }
.spark:nth-child(3) { left: 30%; top: 80%; }
.spark:nth-child(4) { left: 70%; top: 10%; }
.spark:nth-child(5) { left: 50%; top: 40%; }
.spark:nth-child(6) { left: 20%; top: 70%; }
.spark:nth-child(7) { left: 80%; top: 30%; }
.spark:nth-child(8) { left: 60%; top: 90%; }

/* Position road lines */
.road-line:nth-child(1) { left: 0%; animation-delay: 0s; }
.road-line:nth-child(2) { left: 10%; animation-delay: 0.1s; }
.road-line:nth-child(3) { left: 20%; animation-delay: 0.2s; }
.road-line:nth-child(4) { left: 30%; animation-delay: 0.3s; }
.road-line:nth-child(5) { left: 40%; animation-delay: 0.4s; }
.road-line:nth-child(6) { left: 50%; animation-delay: 0.5s; }
.road-line:nth-child(7) { left: 60%; animation-delay: 0.6s; }
.road-line:nth-child(8) { left: 70%; animation-delay: 0.7s; }
.road-line:nth-child(9) { left: 80%; animation-delay: 0.8s; }
.road-line:nth-child(10) { left: 90%; animation-delay: 0.9s; }
</style>