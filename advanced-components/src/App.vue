<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Default</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>                
                </keep-alive>
               <!--
                   <app-quote>
                   <h1 slot="title">{{ theQuote }}</h1>
                   <p>A wonderful quote!</p>
               </app-quote>
               -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data: function(){
            return{
                theQuote : "The Quote",
                selectedComponent: "app-quote"
            }
        },
        components:
        {
            'app-quote': Quote,
            'appAuthor': Author,
            'appNew': New
        }        
    }
</script>

<style>
</style>
