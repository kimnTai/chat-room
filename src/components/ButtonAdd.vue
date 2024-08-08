<script setup lang="ts">
import { onClickOutside, useToggle } from '@vueuse/core';
import { ref } from 'vue';

import FaImage from '@/assets/FaImage.vue';
import FaPaperclip from '@/assets/FaPaperclip.vue';
import FaPlusCircle from '@/assets/FaPlusCircle.vue';
import Emoji from './Emoji.vue';

const target = ref(null);
const [value, toggle] = useToggle();

onClickOutside(target, () => {
  toggle(false);
});
</script>

<template>
  <span class="button-add">
    <FaPlusCircle class="icon" @click="toggle()" />
    <div ref="target" class="others" :class="[value ? 'others-show' : '']">
      <Emoji />
      <span class="image-button">
        <FaImage class="icon" />
      </span>
      <span>
        <FaPaperclip class="icon" />
      </span>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.button-add {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
}

.others {
  display: flex;
  padding: 10px 15px;
  background-color: #fff;
  position: absolute;
  top: 5px;
  z-index: -1;
  right: -52px;
  border-radius: 999px;
  box-shadow: 0 0 25px -5px lightgray;
  transition: 0.3s all ease-out;

  .icon {
    font-size: 20px;
  }
}

.image-button {
  margin: 0 25px;
}

.others-show {
  top: -55px !important;
  z-index: 10 !important;
}

.icon {
  font-size: 30px;
  color: lightgrey;
  cursor: pointer;

  &:hover {
    color: var(--violet);
  }
}
</style>
