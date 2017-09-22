<template>
    <div class="container">
        <app-header :quoteCounter="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteRemoved="removeQuote"></app-quote-grid>
        <div class="row">
            <div class="alert alert-info text-center">Info: Click over a quote to delete it!</div>
        </div>
    </div>
</template>

<script>
    
    import QuoteGrid from './components/QuoteGrid.vue';
    import Header from './components/Header.vue';
    import NewQuote from './components/NewQoute.vue';
    
    export default {
        data: function(){
            return{
                quotes:[],
                maxQuotes: 10,
                quoteCounter: 0
            };
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length >= 10)
                    alert('Remove some Quotes first!');
                else
                    this.quotes.push(quote);
            },
            removeQuote(i){
                this.quotes.splice(i,1);
            }
        },
        components:{
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
