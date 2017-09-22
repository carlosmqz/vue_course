export const countChars = {
    data(){
        return{
            textValue:''
        }
    },
    computed:{
        wordLength(){
            return this.textValue+'-'+this.textValue.length;
        }
    }
}