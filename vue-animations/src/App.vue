<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn" @click="show = !show">Show</button>
                <br>
                <br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">Some text to look</div>
                </transition>

                <transition name="slide-fade" type="animation">
                    <div class="alert alert-info" v-if="show">Another text with Slide animation</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}

.slide-fade-enter-active{
    animation: slide .3s;
}

.slide-fade-leave-active{
    /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    animation: slide .3s;
}

.slide-fade-enter, .slide-fade-leave-to{
    animation: slide .3s;
}

@keyframes slide {
    from {
        transition: all .3s ease;
        opacity: 1;
    }
    to{
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      transform: translateX(10px);
      opacity: 0;
    }
    
}

</style>
