import { createGlobalState } from '@vueuse/core';
import { ref } from 'vue';

export const useMessageStore = createGlobalState(() => {
  const { userId } = useUserStore();

  const message = ref([
    {
      userId: 0,
      message: 'Hey anhat!',
    },
    {
      userId: 1,
      message: 'what is going on?',
    },
  ]);

  const sendMessage = async (params: { message: string }) => {
    message.value.push({ userId: userId.value, message: params.message });
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
