<script setup lang="ts">
import Header from '@/components/Header.vue';
import ChatRoom from '@/components/ChatRoom.vue';
import TypeArea from '@/components/TypeArea.vue';
</script>

<template>
  <div class="container m-y-6">
    <Header />
    <ChatRoom />
    <TypeArea />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 348px;
  margin: 0 auto;
}

.m-y-6 {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
