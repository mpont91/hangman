<template>
  <div class="container">
    <div
      v-for="(line, i) in collection"
      :key="i"
      class="flex justify-center mb-1"
    >
      <button
        v-for="letter in line"
        :key="letter"
        class="flex"
        :disabled="letters.includes(letter) || isGameOver"
        @click="clickHandler(letter)"
      >
        <kbd
          :class="[
            letters.includes(letter)
              ? 'px-2 py-1.5 mx-0.5 text-xl rounded-md bg-orange-600 text-orange-100 border border-orange-500'
              : 'px-2 py-1.5 mx-0.5 text-xl rounded-md bg-gray-600 text-gray-100 border border-gray-500',
          ]"
        >
          {{ letter }}
        </kbd>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import {
  isGameOverGetter,
  passwordStore,
  lettersStore,
  mistakesStore,
} from '../store'

const isGameOver = useStore(isGameOverGetter)
const password = useStore(passwordStore)
const letters = useStore(lettersStore)
const mistakes = useStore(mistakesStore)
const collection = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

const clickHandler = (letter: string) => {
  lettersStore.set([...letters.value, letter])
  if (!password.value.includes(letter)) {
    mistakesStore.set(mistakes.value + 1)
  }
}
</script>
