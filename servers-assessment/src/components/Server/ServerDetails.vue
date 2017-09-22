<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <div v-else>
            <p>Server #{{server.id}} selected</p>
            <p>Status: {{ server.status }}</p>
            <hr>
            <button @click="fixServer">Reset Status</button>
        </div>
    </div>

</template>

<script>
import { eventBus } from '../../main';
export default {
  data: function(){
      return {
          server: null
      }
  },
  methods:{
      fixServer(){
          this.server.status = 'Normal';
      }
  },
  created(){
      eventBus.$on('showServerDetails', (serverData) =>{
          this.server = serverData;
      });
  }
}
</script>

    
<style>

</style>
