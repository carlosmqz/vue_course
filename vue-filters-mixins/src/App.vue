<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase }}</p>
                <hr>
                <input type="text" v-model="personName">
                <ul><li v-for="person in filteredPeople">{{ person }}</li></ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                text: 'Some Text Message',
                people: ['Carlos','Oscar','Leticia','Abel','Juan Pablo'],
                personName: ''
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            }
        }, 
        computed:{
            filteredPeople(){
                return this.people.filter((element)=>{
                    return element.match(this.personName);
                });
            }
        }
    }
</script>

<style>

</style>
