import { mockList } from '@/constant';
import { createGlobalState } from '@vueuse/core';
import { reactive, ref } from 'vue';

export const useMessageStore = createGlobalState(() => {
  const { userId } = useUserStore();

  const message = reactive<MessageItem[]>(mockList);

  const sendMessage = async (params: { message: string }) => {
    message.push({ userId: userId.value, message: params.message });
  };

  return { message, sendMessage };
});

export const useUserStore = createGlobalState(() => {
  const userId = ref(1);

  const isCurrentUser = (id: number) => {
    return id === userId.value;
  };

  return { userId, isCurrentUser };
});

export const useInputStore = createGlobalState(() => {
  const inputValue = ref('');

  const add = (_value: string) => {
    inputValue.value = `${inputValue.value}${_value}`;
  };
  const clear = () => {
    inputValue.value = '';
  };

  return { inputValue, add, clear };
});
