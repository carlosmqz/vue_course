<template>
  <div class="form-group">
      <div class="row">
        <div class="col-xs-12 ">
            <div>
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" name="firstName" id="firstName" v-model="firstName">
            </div>
            <div>
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" name="lastName" id="lastName" v-model.lazy="lastName" @change="fullName">
            </div>            
        </div>
      </div>
  </div>
</template>

<script>
export default {
   props:['value'],
    data(){
        return{
            firstName: '',
            lastName: ''
        }
    },
    methods:{
        fullName(){
            this.$emit('input', this.firstName+' '+this.lastName);
        }
    }  
}
</script>

