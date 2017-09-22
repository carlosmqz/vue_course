<template>
  <div>
      <h4>MixIn</h4>
      <input type="text" v-model="textValue">
      <p>Text input count computed prop: {{ wordLength }}</p>
  </div>
</template>
<script>
import {countChars} from './countCharsMixin'

export default {
    mixins:[countChars]
}
</script>

