<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import Clickable from "./Clickable.vue";

import logoCekaDark from "../assets/images/logos/ceka-dark.png";
import logoNodDark from "../assets/images/logos/nod-dark.png";
import logoNodLight from "../assets/images/logos/nod-light.svg";
import logoSaemstunesDark from "../assets/images/logos/saemstunes-dark.png";
import logoNasakaDark from "../assets/images/logos/nasaka-dark.svg";
import logoNasakaLight from "../assets/images/logos/nasaka-light.png";

const props = defineProps<{
  isDarkTheme?: boolean;
}>();

interface ProjectLogo {
  dark: string;
  light: string;
  url: string;
  alt: string;
}

const logos: ProjectLogo[] = [
  {
    dark: logoCekaDark,
    light: logoCekaDark, // Using filter for light
    url: "https://civiceducationkenya.com",
    alt: "CEKA Logo",
  },
  {
    dark: logoNodLight,
    light: logoNodDark,
    url: "https://nod.saemstunes.com",
    alt: "NOD Logo",
  },
  {
    dark: logoSaemstunesDark,
    light: logoSaemstunesDark, // Using filter for light
    url: "https://saemstunes.com",
    alt: "Saem's Tunes Logo",
  },
  {
    dark: logoNasakaDark,
    light: logoNasakaLight,
    url: "https://nasaka.civiceducationkenya.com",
    alt: "Nasaka Logo",
  },
];

const currentIndex = ref(0);
const isTransitioning = ref(false);
let intervalId: ReturnType<typeof setInterval> | null = null;

const currentLogo = computed(() => {
  const logo = logos[currentIndex.value]!;
  return {
    src: props.isDarkTheme ? logo.light : logo.dark,
    url: logo.url,
    alt: logo.alt,
    needsFilter: (currentIndex.value === 0 || currentIndex.value === 2) && props.isDarkTheme,
  };
});

onMounted(() => {
  intervalId = setInterval(() => {
    isTransitioning.value = true;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % logos.length;
      isTransitioning.value = false;
    }, 400);
  }, 3500);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});

const handleLogoClick = (e: Event) => {
  e.stopPropagation();
  window.open(currentLogo.value.url, "_blank");
};
</script>

<template>
  <Clickable class="logo-container" @click="handleLogoClick" data-cursor="circle-white">
    <img
      :src="currentLogo.src"
      :key="currentIndex + (isDarkTheme ? '-light' : '-dark')"
      class="logo-image"
      :class="{ 'logo-image-out': isTransitioning, 'logo-white-filter': currentLogo.needsFilter }"
      :alt="currentLogo.alt"
    />
  </Clickable>
</template>

<style scoped lang="scss">
.logo-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  transform: scale(1);

  &-out {
    opacity: 0;
    transform: scale(0.85);
  }

  &.logo-white-filter {
    filter: brightness(0) invert(1);
  }
}
</style>
