<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-my-von.click>Some random DIV tag, click it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            'my-von':{
                bind(el, binding, vnode){
                    if (binding.modifiers['click']){
                        el.addEventListener('click',()=>{
                            alert('You clicked over the DIV!'); 
                        });
                    }
                }
            }
        }
    }
</script>

<style>
</style>
