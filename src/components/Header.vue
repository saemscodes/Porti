<script setup lang="ts">
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import { computed, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { lenis } from "../composables/useScroll";
import { projectId } from "../composables/useRouteObserver";
import { social } from "../content/social";
import ButtonRound from "./ButtonRound.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import SoundsToggle from "./SoundsToggle.vue";
import { isFeatureEnabled } from "../utils/features";
import { useRouter } from "../composables/useRouter";
import { useFirstRoute } from "../composables/useFirstRoute";

const router = useRouter();
const { isFirstRoute } = useFirstRoute();

const scrolledPastHeroVisible = ref(false);
const { isDarkTheme } = useHeaderTheme({
  onUpdate: (element, boundingClientRect, hasScrolledIntoView) => {
    if (!element || !boundingClientRect) {
      scrolledPastHeroVisible.value = false;
      return;
    }

    if (hasScrolledIntoView) {
      scrolledPastHeroVisible.value = true;
    } else {
      scrolledPastHeroVisible.value = false;
    }
  },
});

const handleBackClick = () => {
  // If it's the first route the user visited, navigate to home
  // Otherwise, go back in browser history
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

const handleLogoClick = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const classNames = computed(() => {
  return {
    header: true,
    "header-dark": isDarkTheme.value,
    "header-scrolled": scrolledPastHeroVisible.value,
    [`project-${projectId.value}`]: projectId.value !== null,
  };
});

const getInTouchClassNames = computed(() => {
  return {
    "header-get-in-touch": true,
    "header-get-in-touch-isProjectPage": projectId.value !== null,
  };
});
</script>

<template>
  <header :class="classNames">
    <div class="header-left">
      <ButtonRound
        v-if="projectId !== null"
        variant="accent"
        @click="handleBackClick"
        :aria-label="t('back-to-home')"
        :class="{ 'header-back': true, 'header-back-isProjectPage': projectId !== null }"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRight class="header-back-icon" />
      </ButtonRound>
    </div>
    <div
      :class="{
        'header-logo': true,
        'header-logo-isProjectPage': projectId !== null,
        'header-logo-clickable': scrolledPastHeroVisible,
        'children-unclickable': true,
      }"
      @click="handleLogoClick"
      data-sound="click"
      data-hoversound="hover"
      data-cursor="circle-white"
    >
      <Logo class="header-logo-image" :isDarkTheme="isDarkTheme" />
    </div>
    <div class="header-right">
      <Button
        renderAs="a"
        variant="accent"
        :aria-label="t('get-in-touch')"
        :href="social.find((item) => item.name === 'mail')?.url ?? ''"
        external
        :class="getInTouchClassNames"
        data-cursor="circle-white"
        data-hoversound="hover"
        >{{ t("get-in-touch") }}</Button
      >
      <SoundsToggle class="header-sounds-toggle" :isDarkTheme="isDarkTheme" v-if="isFeatureEnabled('sounds')" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  width: var(--breakpoint-xxxl);
  padding: 0 var(--space-outer);
  max-width: 100%;
  z-index: var(--z-index-header);
  height: var(--height-header);
  pointer-events: none;

  --scrolled: 0;

  &-scrolled {
    --scrolled: 1;
  }

  &-back {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    transition-delay: 0.1s;
    pointer-events: auto;

    // Glassmorphism/Skeuomorphism
    background: rgba(255, 255, 255, 0.7) !important;
    backdrop-filter: blur(16px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.05) !important;
    color: #1a1a1a !important; 
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        180deg, 
        rgba(255, 255, 255, 0.8) 0%, 
        rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none;
    }

    @include mixins.hover {
      &:hover {
        background: #fff !important;
        border-color: rgba(0, 0, 0, 0.2) !important;
        transform: translateY(-2px) scale(1.05) !important;
        box-shadow: 
          0 8px 24px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 #fff !important;
        color: #000 !important;
      }

      &:active {
        transform: translateY(0) scale(0.95) !important;
        background: rgba(255, 255, 255, 0.9) !important;
        box-shadow: 
          0 2px 8px rgba(0, 0, 0, 0.05),
          inset 0 1px 4px rgba(0, 0, 0, 0.1) !important;
      }
    }

    &-icon {
      width: 100%;
      transform: rotate(180deg);
      --icon-color: currentColor;
    }

    &-isProjectPage {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &-left {
    position: absolute;
    left: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
  }

  &-get-in-touch {
    width: fit-content;

    &-isProjectPage {
      opacity: 1 !important;
    }
  }

  &-right {
    position: absolute;
    right: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  &-music-toggle {
    display: flex;
  }

  &-dark {
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }

  &-get-in-touch {
    display: none;

    @include mixins.mq("md") {
      display: flex;
      background: rgba(255, 255, 255, 0.03) !important;
      backdrop-filter: blur(12px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(12px) saturate(180%) !important;
      border: 1px solid rgba(255, 255, 255, 0.08) !important;
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2) !important;
      color: rgba(0, 0, 0, 0.8) !important; // Dark text on light backgrounds
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          180deg, 
          rgba(0, 0, 0, 0.05) 0%, 
          rgba(0, 0, 0, 0) 100%
        );
        pointer-events: none;
      }

      @include mixins.hover {
        &:hover {
          background: rgba(0, 0, 0, 0.05) !important;
          border-color: rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
          color: #000 !important;
        }

        &:active {
          transform: translateY(0) scale(0.98) !important;
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.05),
            inset 0 1px 4px rgba(0, 0, 0, 0.1) !important;
        }
      }
    }
  }

  &-dark {
    .header-get-in-touch {
      background: rgba(255, 255, 255, 0.03) !important;
      border-color: rgba(255, 255, 255, 0.1) !important;
      color: rgba(255, 255, 255, 0.9) !important; // Light text on dark backgrounds
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      
      &::before {
        background: linear-gradient(
          180deg, 
          rgba(255, 255, 255, 0.05) 0%, 
          rgba(255, 255, 255, 0) 100%
        );
      }

      &:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        border-color: rgba(255, 255, 255, 0.2) !important;
        box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        color: #fff !important;
      }
    }
  }

  &-logo {
    cursor: pointer;
    display: flex;
    gap: var(--space-xs);
    transition: color 0.2s ease-in-out;
    opacity: var(--scrolled);
    pointer-events: none;

    &-clickable {
      pointer-events: all;
    }

    @include mixins.mq("md") {
      gap: var(--space-sm);
    }

    &-isProjectPage {
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
      opacity: 0;
    }

    &-image {
      width: 36px;

      @include mixins.mq("md") {
        width: 40px;
      }
    }

    &-text {
      font-weight: 900;
      font-size: 18px;

      @include mixins.mq("md") {
        font-size: 20px;
      }
    }
  }
}
</style>
