<template>
  <div class="text-xl">
    Hello Index {{ meep }}
    <p
      v-for="(n, index) in myArr"
      :key="index"
      @click="removeFromArr(index)"
    >
      {{ n }}
    </p>
    <button @click="addToMyArr">
      add
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const meep = ref(1)
const myArr = ref([1, 2, 2, 3])

const addToMyArr = () => {
  myArr.value = [...myArr.value, 99]
}

const removeFromArr = (index: number) => {
  myArr.value = myArr.value.filter((_, i) => i !== index)
}
</script>

<style scoped>

</style>
