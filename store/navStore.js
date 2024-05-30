
import { reactive,ref } from "vue";

const navStore = reactive ({
    navAllCategoriesIsTrue : false,

    navAllCategoriesToggle(){
       this.navAllCategoriesIsTrue = !this.navAllCategoriesIsTrue
       console.log(this.navAllCategoriesIsTrue)
    }
})

export {navStore}