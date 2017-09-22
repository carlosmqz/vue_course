<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{ userage }}</p>
        <hr>
        <button @click="updateAge">Edit</button>
    </div>
</template>

<script>
  import { eventBus } from './../main.js';
  export default{
      props: {
          userage: Number
      },
      methods: {
          updateAge(){
              this.userage = 20;
              eventBus.$emit('ageWasUpdated', this.userage);
          }
      }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
