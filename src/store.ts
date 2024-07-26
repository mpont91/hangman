import {
  atom,
  computed,
  type WritableAtom,
  type ReadableAtom,
} from 'nanostores'
import { generate } from './password.ts'

const LIMIT_MISTAKES: number = 8

export const passwordStore: WritableAtom<string> = atom(generate() as string)
export const mistakesStore: WritableAtom<number> = atom(0 as number)
export const lettersStore: WritableAtom<string[]> = atom([] as string[])
export const isGameOverGetter: ReadableAtom<boolean> = computed(
  mistakesStore,
  (mistakes: number): boolean => mistakes >= LIMIT_MISTAKES,
)
export const isGameWonGetter: ReadableAtom<boolean> = computed(
  [passwordStore, lettersStore],
  (password: string, letters: string[]): boolean =>
    !!password &&
    password
      .split('')
      .every((letter: string): boolean => letters.includes(letter)),
)
export const isGameFinishedGetter: ReadableAtom<boolean> = computed(
  [isGameOverGetter, isGameWonGetter],
  (isGameOver: boolean, isGameWon: boolean): boolean => isGameOver || isGameWon,
)

export const resetMistakesAction = () => {
  mistakesStore.set(0)
}
export const resetPasswordAction = () => {
  passwordStore.set(generate())
}
export const resetLettersAction = () => {
  lettersStore.set([])
}
