<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quote status</h3>
            <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                :style="{width:(quoteCounter/maxQuotes)* 100 + '%'}">
                    {{ quoteCounter }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:['maxQuotes', 'quoteCounter']
}
</script>

