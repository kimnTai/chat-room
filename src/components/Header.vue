<script setup lang="ts">
import FaEllipsisH from '@/assets/FaEllipsisH.vue';
</script>

<template>
  <div class="header">
    <div class="avatar-wrapper avatar-big">
      <img src="@/assets/icon_1.png" alt="" />
    </div>
    <span class="name">Crush</span>
    <span class="options">
      <FaEllipsisH class="icon" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 15px;
}

.avatar-big {
  width: 35px;
  height: 35px;
}

.name {
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
}
.options {
  font-size: 20px;
  color: lightgrey;
  margin-left: auto;
  cursor: pointer;
}
</style>
