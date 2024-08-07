<script setup lang="ts">
import { useMessageStore, useUserStore } from '@/store';

const { message } = useMessageStore();
const { isCurrentUser } = useUserStore();
</script>

<template>
  <div class="chat-room">
    <template v-for="item in message">
      <div
        class="message"
        :class="[isCurrentUser(item.userId) ? 'message-right' : 'message-left']"
      >
        <div class="avatar-wrapper avatar-small">
          <img src="@/assets/icon_1.png" alt="" />
        </div>
        <div
          class="bubble"
          :class="[isCurrentUser(item.userId) ? 'bubble-dark' : 'bubble-light']"
        >
          {{ item.message }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.chat-room {
  height: 619px;
  overflow-y: scroll;
  background-color: var(--gray);
  padding: 16px;
}

.avatar-small {
  width: 24px;
  height: 24px;
}
.message {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}
.message-left {
  align-items: flex-start;
}
.message-right {
  align-items: flex-end;
}
.bubble {
  border-radius: 0 4px 4px 4px;
}
.bubble {
  padding: 10px;
  font-size: 14px;
  margin-top: 4px;
  display: inline-block;
}
.bubble-light {
  background-color: var(--light-violet);
}
.bubble-dark {
  color: white;
  background-color: var(--violet);
}
</style>
