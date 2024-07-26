<template>
  <div class="container text-center">
    <div
      class="image-wrapper border-4 border-gray-100 border-opacity-20 mx-auto max-w-sm"
    >
      <img
        v-if="mistakes > 0"
        class="mx-auto"
        :src="`/hangman/${mistakes}.png`"
        :alt="`${mistakes} mistake`"
        height="353px"
      />
    </div>
  </div>
  <div
    v-if="isGameFinished"
    class="absolute top-1/2 text-center flex flex-col gap-12"
  >
    <p v-if="isGameOver" class="text-4xl text-red-300 font-bold">Game Over!</p>
    <p v-if="isGameWon" class="text-4xl text-green-300 font-bold">You win!</p>
    <button
      @click="restartGame"
      class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Restart
    </button>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import {
  isGameOverGetter,
  isGameWonGetter,
  isGameFinishedGetter,
  mistakesStore,
  resetPasswordAction,
  resetLettersAction,
  resetMistakesAction,
} from '../store'

const mistakes = useStore(mistakesStore)
const isGameOver = useStore(isGameOverGetter)
const isGameWon = useStore(isGameWonGetter)
const isGameFinished = useStore(isGameFinishedGetter)

const restartGame = () => {
  resetPasswordAction()
  resetLettersAction()
  resetMistakesAction()
}
</script>

<style>
.image-wrapper {
  height: 400px;
}
@media (max-height: 800px) {
  .image-wrapper {
    height: 350px;
  }
  .image-wrapper > img {
    height: 300px;
  }
}
@media (max-height: 750px) {
  .image-wrapper {
    height: 300px;
  }
  .image-wrapper > img {
    height: 250px;
  }
}
@media (max-height: 700px) {
  .image-wrapper {
    height: 220px;
  }
  .image-wrapper > img {
    height: 200px;
  }
}
@media (max-height: 600px) {
  .image-wrapper {
    height: 160px;
  }
  .image-wrapper > img {
    height: 150px;
  }
}
</style>
