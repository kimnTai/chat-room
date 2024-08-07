<script setup lang="ts">
import { useToggle } from '@vueuse/core';

import FaLaugh from '@/assets/FaLaugh.vue';
import { useInputStore } from '@/store';

const [value, toggle] = useToggle();
const { add } = useInputStore();

const emojiList = ['😄', '😀', '😂', '😭', '😍', '🤮', '🤑', '😖', '😷'];
</script>

<template>
  <span class="emoji-button">
    <FaLaugh class="icon" @click="toggle()" />
    <div class="emoji-box" :class="[value ? 'emoji-show' : '']">
      <span v-for="item in emojiList" class="emoji" @click="add(item)">{{
        item
      }}</span>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.emoji-button {
  position: relative;
}

.emoji-box {
  display: none;
  position: absolute;
  width: 0px;
  height: 0px;
  top: 0px;
  right: 0px;
  transition: 0.3s all ease-out;
}

.emoji {
  user-select: none;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
}

.emoji-show {
  display: flex !important;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 150px !important;
  height: 100px !important;
  padding: 10px;

  top: -135px !important;
  right: 10px !important;
  background-color: #fff;
  box-shadow: 0 0 25px -5px lightgray;
  border-radius: 5px 5px 0 5px;
}

.icon {
  font-size: 20px;
  color: lightgrey;
  cursor: pointer;
}
</style>
