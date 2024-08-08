<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core';

import { useInputStore, useMessageStore } from '@/store';
import ButtonAdd from './ButtonAdd.vue';

const { sendMessage } = useMessageStore();
const { inputValue, clear } = useInputStore();

const onSendMessage = async () => {
  if (!inputValue.value) return;

  await sendMessage({ message: inputValue.value });

  clear();
};

onKeyStroke('Enter', (e) => {
  e.preventDefault();
  onSendMessage();
});
</script>

<template>
  <div class="type-area">
    <div class="input-wrapper">
      <input
        v-model="inputValue"
        type="text"
        class="input"
        placeholder="Type messages here..."
      />
    </div>
    <ButtonAdd />
    <button class="button-send" @click="onSendMessage">Send</button>
  </div>
</template>

<style lang="scss" scoped>
.type-area {
  display: flex;
  height: 65px;
  background-color: white;
  border-radius: 0 0 20px 20px;
}

.input-wrapper {
  overflow: hidden;
  border-radius: 0 0 0 20px;
}

.input {
  outline: none;
  border: none;
  padding-left: 20px;
  height: 100%;
  width: 220px;
  font-size: 14px;
}

.button-send {
  background-color: #fff;
  width: 65px;
  color: var(--violet);
  font-weight: bold;
  border-left: 2px solid var(--gray);
  border-radius: 0 0 20px 0;
  border: 0;
  outline: none;

  &:hover {
    background-color: var(--violet);
    color: #fff;
  }
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
