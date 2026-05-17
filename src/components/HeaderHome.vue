<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue";
import { onMounted, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { lenis } from "../composables/useScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { projectId } from "../composables/useRouteObserver";

const handleLinkClick = (link: string) => {
  if (!lenis.value) return;
  lenis.value.scrollTo(link);
};

type ActiveLink = "about" | "projects" | "contact";
const activeLink = ref<ActiveLink | null>(null);
const sections: ActiveLink[] = ["about", "projects", "contact"];
const ariaLabels = {
  about: t("about"),
  projects: t("projects"),
  contact: t("contact"),
};

const isMounted = ref(false);

const barStyle = ref({ transform: "" });
const ITEM_WIDTH = 128;

const { isDarkTheme, hasScrolledIntoView } = useHeaderTheme();

const updateBarPosition = () => {
  const index = sections.indexOf(activeLink.value as ActiveLink);
  const left = index * ITEM_WIDTH;
  barStyle.value = {
    transform: `translateX(${left}px)`,
  };
};

onMounted(() => {
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: `#${section}`,
      start: section === "about" ? "top 22.5%" : "top center",
      end: "bottom center",
      onEnter: () => {
        activeLink.value = section;
        updateBarPosition();
      },
      onEnterBack: () => {
        activeLink.value = section;
        updateBarPosition();
      },
      onLeave: () => (activeLink.value = null),
      onLeaveBack: () => (activeLink.value = null),
    });
  });

  ScrollTrigger.refresh();

  isMounted.value = true;
});
</script>

<template>
  <div :class="['header-home', { 'header-home-mounted': isMounted, 'header-home-isProjectPage': projectId !== null }]">
    <div :class="['header-home-links', { 'header-home-links-dark': isDarkTheme }]">
      <div
        :class="[
          'header-home-bar',
          { 'header-home-bar-active': activeLink !== null && hasScrolledIntoView, 'header-home-bar-dark': isDarkTheme },
        ]"
        :style="barStyle"
      ></div>
      <HeaderLink
        v-for="section in sections"
        :key="section"
        :is-active="activeLink === section"
        :class="[
          'header-home-link',
          { 'header-home-link-active': activeLink === section && hasScrolledIntoView },
          'children-unclickable',
        ]"
        @click="handleLinkClick('#' + section)"
        :is-dark-theme="isDarkTheme"
        :aria-label="ariaLabels[section]"
        data-sound="click"
        data-hoversound="hover"
      >
        {{ t(section) }}
      </HeaderLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-home {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-index-header-home);
  height: var(--height-header);
  align-items: center;
  justify-content: center;
  display: none;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    transform var(--transition-route-duration) var(--transition-route-ease);

  &-isProjectPage {
    transform: translateX(-50%) translateY(-100%);
  }

  &-mounted {
    opacity: 1;
  }

  @include mixins.mq("lg") {
    display: flex;
  }

  &-links {
    position: relative;
    display: flex;
    padding: 4px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    &-dark {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }
  }

  &-bar {
    position: absolute;
    top: 4px;
    left: 4px;
    height: calc(100% - 8px);
    width: 128px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 100px;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 2px 8px rgba(0, 0, 0, 0.1),
      inset 0 1px 2px rgba(255, 255, 255, 0.1);
    transition:
      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.2s ease-in-out;
    z-index: 1;
    opacity: 0;

    &-dark {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    &-active {
      opacity: 1;
    }
  }

  &-link {
    position: relative;
    z-index: 2;
    letter-spacing: 0.05em;
    font-weight: 700;
    border: none;
    background: none;
    transition: all 0.3s ease;
    font-size: 13px;
    width: 128px;
    height: 36px;
    white-space: nowrap;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    opacity: 0.6;

    &-active {
      opacity: 1;
      color: #000;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.4);
    }

    @include mixins.hover {
      &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    }
  }
}

.header-home-links-dark .header-home-link-active {
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
