<template>
  <span class="container">
    <span class="flex justify-center">
      <button v-for="letter in password.split('')" disabled class="flex">
        <kbd
          :class="[
            letters.includes(letter)
              ? 'px-2 py-1.5 mx-0.5 text-xl rounded-md bg-green-600 text-gray-100 border border-green-200'
              : 'px-2 py-1.5 mx-0.5 text-xl rounded-md bg-gray-400 text-gray-100 border border-gray-200',
          ]"
        >
          {{ letters.includes(letter) ? letter : '—' }}
        </kbd>
      </button>
    </span>
  </span>
</template>
<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import { passwordStore, lettersStore } from '../store'

const password = useStore(passwordStore)
const letters = useStore(lettersStore)
</script>
