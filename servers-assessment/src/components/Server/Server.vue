<template>
    <li class="list-group-item"
      @click="showServerDetails">Server# {{ server.id }}
    </li>
</template>
<script>
import { eventBus } from './../../main';
export default {
  props:['server'],
  methods:{
      showServerDetails(){
          eventBus.$emit('showServerDetails', this.server);
      }
  }
}
</script>

