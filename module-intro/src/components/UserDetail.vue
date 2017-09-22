<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ switchName() }}</p>
        <p>Age: {{ userage }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from './../main.js';
    export default {
        props: {
            name:{
                type: String
            },
            resetFn: Function,
            userage: Number
        },
        methods:{
            switchName()
            {
                return this.name.split("").reverse().join("");
            },
            resetName()
            {
                this.name = 'Carlos';
                this.$emit('nameWasReset', this.name);
            }        
        },
        created(){
            eventBus.$on('ageWasUpdated', (age)=>
                {
                    this.userage = age;
                });
        }
    }
    
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
