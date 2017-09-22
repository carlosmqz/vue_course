<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input type="text" v-model="textValue">
                <p>Reversed string using Filter: {{ textValue | reverseFilter }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>Text input count Filter: {{ textValue | count-chars }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <p>Reversed string using Computed props: {{ reversedText }} </p>
                <p>Text input count computed prop: {{ wordLength }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <app-my-component></app-my-component>
            </div>
        </div>
    </div>
</template>

<script>

    import MyComponent from './myComponent.vue';
    export default {
        data(){
            return{
                textValue:''
            }
        },
        computed:{
            reversedText(){
                let temp = this.textValue.split('');
                return temp.reverse().join('');
            },
            wordLength(){
                return this.textValue+'-'+this.textValue.length;
            }
        },
        filters:{
            reverseFilter(value){
                let valueArr = value.split('');
                return valueArr.reverse().join('');
            }
        },
        components:{
            AppMyComponent: MyComponent
        }
    }
</script>

<style>
</style>
