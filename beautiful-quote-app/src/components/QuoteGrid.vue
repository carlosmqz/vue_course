<template>
  <div class="row">
      <app-quote v-for="(quote,id) in quotes" @click.native="removeQuote(id)">{{ quote }}</app-quote>
  </div>
</template>
<script>
import Quote from './Quote.vue';
export default {
    props:['quotes'],
    components:{
        appQuote: Quote
    },
    methods:{
        removeQuote(id){
            this.$emit('quoteRemoved', id);
        }
    }
}
</script>
<style>

</style>


