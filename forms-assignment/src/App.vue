<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-name-control v-model="userData.fullName"></app-name-control>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="text" class="form-control" name="Email" id="Email" v-model="userData.userEmail">
                    </div>
                    <div class="form-group">
                        <label for="userPassword">Password</label>
                        <input type="password" class="form-control" name="userPassword" id="userPassword" v-model="userData.userPassword">
                    </div>
                    <div class="form-group">
                        <p>Store Data?</p>
                        <label for="storeDataYes">Yes</label>
                        <input type="radio" name="storeDataYes" id="storeDataYes" value="Yes" v-model="userData.storeInDatabase">
                        <label for="storeDataNo">No</label>
                        <input type="radio" name="storeDataNo" id="storeDataNo" value="No" v-model="userData.storeInDatabase">
                    </div>
        
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="!isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name:{{ userData.fullName }} </p>
                        <p>Mail: {{ userData.userPassword }}</p>
                        <p>Password: {{ userData.userEmail }}</p>
                        <p>Store in Database?: {{userData.storeInDatabase }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NameControl from './fullNameControl.vue';
    export default {
        data(){
            return{
                userData:{
                    userFirstName:'',
                    userLastName:'',
                    userPassword:'',
                    userEmail:'',
                    storeInDatabase: 'No',
                    fullName:''
                },
                isSubmitted: false
            };
        },
        methods:{
            submitForm(){
                this.isSubmitted = false;
            }
        },
        components:{
            appNameControl: NameControl
        }
    }
</script>

<style>
</style>
