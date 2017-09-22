<template>
   <div class="col-xs-12 col-sm-6">
        <ul class="list-group" v-for="server in servers">
            <app-server :server="server"></app-server>
        </ul>
   </div>
</template>

<script>
    import Server from './Server.vue';
    import { eventBus } from './../../main';

    export default{
        data: function()
        {
            return{
                servers: [
                    {id: 1, status:'Critical'},
                    {id: 2, status:'Normal'},
                    {id: 3, status:'Poor Performance'},
                    {id: 4, status:'Critical'},
                    {id: 5, status:'Normal'}
                ]
            };
        },
        components:{
            'app-server': Server
        }
    }
</script>

<style>

</style>
