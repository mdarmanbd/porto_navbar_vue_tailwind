<script setup>
import { ref } from 'vue';
import { navStore } from '../store/navStore';

const fashion = ref(false)
const electronics = ref(false)
const applicances =ref(false)
const home = ref(false)
const mobileToggle = ref(false)
const isMainMenuTrue = ref(true)
const isCtgTrue = ref(false)
const isOpenProduct = ref(false)
const isOpenFeatures = ref(false)

const showFashion = () => {
    fashion.value = !fashion.value
}
const showElectronics = () =>{
    electronics.value = !electronics.value
}
const showApplicances = () =>{
    applicances.value = !applicances.value
}
const showHome = () =>{
    home.value = !home.value
}

// Mobile Menu //

const mobileToggleMenu = () =>{
    mobileToggle.value = !mobileToggle.value
}

const mainMenu = () => {
    isMainMenuTrue.value = true
    isCtgTrue.value = false
}

const categories = () => {
    isCtgTrue.value = true
    isMainMenuTrue.value = false
}

const isOpenProductSubMenu = () =>{
    isOpenProduct.value = !isOpenProduct.value
}

const isOpenFeaturesSubMenu = () =>{
    isOpenFeatures.value = !isOpenFeatures.value
}


</script>

<template>
    <header class="hidden lg:block">
       <div class="header-top py-2">
            <div class="flex justify-between items-center lg:max-w-[960px] xl:max-w-[1200px] xxl:max-w-[1440px] mx-auto ">
                <div class="">
                    <p class="font-medium leading-normal text-[13px] text-black">Free Express Shipping On Orders $99+</p>
                </div>
                <div class="inline-flex items-center">
                    <ul class="inline-flex gap-4 mr-10">
                        <li class=" text-[13px] font-medium text-black flex items-center gap-1 relative group">
                            USD
                            <span class="text-[10px] text-black font-normal "> 
                                <font-awesome-icon icon="angle-down" />
                            </span>
                            <div class="absolute top-4 left-0 w-full z-0 invisible group-hover:visible group-hover:z-10 group-hover:top-5 group-hover:duration-200">
                                <ul class="bg-white shadow text-left space-y-1 pt-2 rounded w-full min-w-12">
                                    <li class="hover:bg-slate-100 pl-1 py-1">
                                        <a href="#" class="font-medium text-[13px] uppercase text-black ">USD</a>
                                    </li>
                                    <li class="hover:bg-slate-100 pl-1 py-1">
                                        <a href="#" class="font-medium text-[13px] uppercase text-black ">ERU</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class=" text-[13px] font-medium text-black flex items-center gap-1 relative group ">
                            ENG
                            <span class="text-[10px] text-black font-normal "> 
                                <font-awesome-icon icon="angle-down" />
                            </span>
                            <div class="absolute top-4 left-0 w-full z-0 invisible group-hover:visible group-hover:z-10 group-hover:top-5 group-hover:duration-200">
                                <ul class="bg-white shadow text-left space-y-1 pt-2 rounded w-full min-w-12">
                                    <li class="hover:bg-slate-100 pl-1 py-1">
                                        <a href="#" class="font-medium text-[13px] uppercase text-black ">ENG</a>
                                    </li>
                                    <li class="hover:bg-slate-100 pl-1 py-1">
                                        <a href="#" class="font-medium text-[13px] uppercase text-black ">FRH</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div class="inline-flex items-center gap-1 mr-4 cursor-pointer">
                        <font-awesome-icon class="text-[13px] " icon="location-pin" />
                        <span class="text-[13px] text-black font-medium">Our Stores</span>
                    </div>
                    <div class="inline-flex items-center gap-1 mr-4 cursor-pointer">
                        <font-awesome-icon class="text-[13px]" icon="truck" />
                        <span class="text-[13px] text-black font-medium">Track Your Order</span>
                    </div>
                    <div class="inline-flex items-center gap-1 mr-4 cursor-pointer">
                        <font-awesome-icon class="text-[13px]" icon="circle-info" />
                        <span class="text-[13px] text-black font-medium">Help</span>
                    </div>
                    <div class="inline-flex items-center gap-1 cursor-pointer">
                        <font-awesome-icon class="text-[13px]" icon="heart" />
                        <span class="text-[13px] text-black font-medium">Wish list</span>
                    </div>
                </div>
            </div>
       </div>
       <div class="header-middle py-4 ">
            <div class="flex items-center justify-around lg:max-w-[960px] xl:max-w-[1200px] xxl:max-w-[1440px] mx-auto">
                <img class="w-full max-w-[100px]" src="../images/porto46-logo.png" alt="logo.png">
               <form class="flex items-center justify-between border-2 w-full lg:max-w-[500px] xl:max-w-[700px] border-[#0155b5] m-3 rounded-lg ">
                    <input class="border-none outline-none focus:outline-none h-12 px-3 rounded-lg w-full " type="text" placeholder="Search..">
                    <div class="inline-flex items-center text-nowrap mx-2 relative">
                        <span @click="navStore.navAllCategoriesToggle()" class="text-[13px] text-black font-normal cursor-pointer">All Categories</span>
                        <font-awesome-icon class="text-[10px] text-black font-normal ml-1" icon="angle-down" />
                        <ul v-if="navStore.navAllCategoriesIsTrue" class="absolute top-7 left-0 w-32 h-36 space-y-1 overflow-y-auto bg-white shadow">
                            <li class="px-2 py-1 leading-3 hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">All Categories</a>
                            </li>
                            <li class="px-2 py-1 leading-[8px] hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">Kitchen</a>
                            </li>
                            <li class="px-2 py-1 leading-[8px] hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">Electronics</a>
                            </li>
                            <li class="px-2 py-1 leading-[8px] hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">Fashion</a>
                            </li>
                            <li class="px-2 py-1 leading-[8px] hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">Sports</a>
                            </li>
                            <li class="px-2 py-1 leading-[8px] hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">Tools</a>
                            </li>
                            <li class="px-2 py-1 leading-[8px] hover:bg-slate-200">
                                <a class="text-gray-800 text-xs font-medium" href="#">Automation</a>
                            </li>
                        </ul>
                    </div>
                    <div class=" cursor-pointer px-4">
                        <font-awesome-icon class="text-sm font-normal text-black" icon="magnifying-glass" />
                    </div>
               </form>
               <div class="flex items-center gap-1">
                    <img src="../svg/person.svg">
                    <div class="block">
                        <h4 class="font-medium text-xs text-gray-500">Welcome</h4>
                        <div class="flex gap-1">
                           <a href="#" class="text-sm font-semibold text-black">Sign In /</a>
                           <a href="#" class="text-sm font-semibold text-black">Register</a>
                        </div>
                    </div>
               </div>
               <div class="flex items-center gap-2 relative cursor-pointer group">
                    <div class="relative w-full">
                        <img src="../svg/shoping.svg">
                        <div class="absolute -top-5 -right-2 w-6 h-6 bg-yellow-500 rounded-full grid place-content-center">
                            <span class="text-black text-sm font-medium ">0</span>
                        </div>
                    </div>
                    <div class="block">
                        <h4 class="font-medium text-xs text-gray-500">Welcome</h4>
                        <span class="text-sm font-semibold text-[#0155b5]">$327.00</span>
                    </div>
                    <div class="absolute top-12 w-[320px] h-[100px] z-0 invisible right-0 bg-white shadow-md px-4 py-2 group-hover:top-10 group-hover:duration-200 group-hover:z-10 group-hover:visible ">
                       <div class="pb-2 flex justify-between border-b border-b-gray-300 text-black mt-3">
                            <span class="text-sm font-medium">0 ITEMS</span>
                            <a class="text-sm font-medium" href="#">VIEW CART</a>
                       </div>
                    </div>
               </div>
            </div>
       </div>
       <div class="header-bottom bg-[#0155b5] ">
            <div class="flex items-center xl:max-w-[1200px] lg:max-w-[960px] xxl:max-w-[1440px] mx-auto">
                <div class="block cursor-pointer relative group py-4">
                    <font-awesome-icon class="text-base font-medium text-[#f9d759]" icon="bars" />
                    <span class="text-white text-base font-medium ml-2 group-hover:text-[#f9d759] duration-200">All Departments</span>
                    <div class="absolute top-16 left-0 z-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:top-14
                                transition-all group-hover:duration-200 w-[245px] block shadow-lg h-[217px] bg-white overflow-y-auto">
                        <ul>
                            <li>
                                <a @click="showFashion() " class="flex items-center py-2 px-2 w-full hover:bg-gray-100" href="#">
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal" icon="shirt" />
                                    <span class="text-sm text-gray-600 font-normal ml-3">Fashion</span>
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal ml-auto" :icon="!fashion? 'chevron-right':'chevron-down'" />
                                </a>
                                <transition name="slide">
                                    <ul v-if="fashion" >
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Woman </a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Man</a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Kids</a> 
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                            <li>
                                <a @click="showElectronics()" class="flex items-center py-2 px-2 w-full hover:bg-gray-200" href="#">
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal" icon="plug-circle-bolt" />
                                    <span class="text-sm text-gray-600 font-normal ml-3">Electronics</span>
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal ml-auto" :icon="!electronics? 'chevron-right':'chevron-down'" />
                                </a>
                                <transition name="slide">
                                    <ul v-if="electronics">
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Mobile</a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Laptob</a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3">Destop</a> 
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                            <li>
                                <a  @click="showApplicances()" class="flex items-center py-2 px-2 w-full hover:bg-gray-200" href="#">
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal" icon="face-smile"/>
                                    <span class="text-sm text-gray-600 font-normal ml-3">Applicances</span>
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal ml-auto" :icon="!applicances?'chevron-right':'chevron-down'" />
                                </a>
                                <transition name="slide">
                                    <ul v-if="applicances">
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Mobile</a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Laptob</a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3">Destop</a> 
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                            <li>
                                <a @click="showHome()" class="flex items-center py-2 px-2 w-full hover:bg-gray-200" href="#">
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal" icon="igloo"/>
                                    <span class="text-sm text-gray-600 font-normal ml-3">Home & Decor</span>
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal ml-auto" :icon="!home?'chevron-right':'chevron-down'" />
                                </a>
                                <transition name="slide">
                                    <ul v-if="home">
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Woman </a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Man</a> 
                                        </li>
                                        <li class="hover:bg-gray-100 px-2">
                                            <a href="#" class="text-sm text-gray-600 font-normal ml-3" >Kids</a> 
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                            <li class="hover:bg-gray-200">
                                <a class="flex items-center py-2 px-2 w-full" href="#">
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal" icon="microphone" />
                                    <span class="text-sm text-gray-600 font-normal ml-3">Tables & Desks</span>
                                </a>
                            </li>
                            <li class="hover:bg-gray-200">
                                <a class="flex items-center py-2 px-2 w-full" href="#">
                                    <font-awesome-icon class="text-sm text-gray-600 font-normal" icon="volleyball" />
                                    <span class="text-sm text-gray-600 font-normal ml-3">Sports</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
               <ul class="inline-flex ml-16 [&>li]:mr-11  text-white text-base font-medium">
                    <li class="relative block group py-4">
                        <a href="#" class="hover:text-[#f9d759] ">
                            Products
                        </a>
                        <div class="dropdown absolute top-10 -left-10 z-0 invisible opacity-0 group-hover:top-14 group-hover:z-10 group-hover:visible
                                    group-hover:opacity-100 group-hover:duration-200 right-auto w-[750px] bg-white shadow py-3 px-4">
                           <div class="grid grid-cols-4 gap-5">
                                <ul class="space-y-2 ">
                                    <li class="text-black text-base font-medium ">
                                        PRODUCTS PAGES
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Variables products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Combo products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Gift
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            New Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Single Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                </ul>
                                <ul class="space-y-2 ">
                                    <li class="text-black text-base font-medium ">
                                        PRODUCT LAYOUTS
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            New Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Brands Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Kids Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Man Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Woman Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                    </li>
                                </ul>
                                <ul class="space-y-2 ">
                                    <li class="text-black text-base font-medium ">
                                        PRODUCTS LOOP
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                           Full image
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Add button
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            New Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                    <li>
                                        <a href="#" class=" text-gray-600 text-sm font-normal hover:text-black hover:underline">
                                            Simple Products
                                        </a>
                                        <span class=" tip bg-green-500 text-white text-[9px] px-1 py-[1px] ml-2">New</span>
                                    </li>
                                </ul>
                               <div class="mega-menu-image">
                                    <div class="relative">
                                        <h3 class="text-8xl font-extrabold text-white [writing-mode:vertical-lr] rotate-180 mt-2">OFF</h3>
                                        <div class="absolute top-0 right-5">
                                            <h5 class="text-lg text-black tracking-widest font-extrabold ">UP TO</h5>
                                            <h2 class="text-[#ff7272] text-3xl font-extrabold ">50%</h2>
                                        </div>
                                    </div>
                               </div>
                           </div>
                        </div>
                    </li>
                    <li class="block relative group py-4">
                        <a href="#"  class="hover:text-[#f9d759]">
                            Features
                        </a>
                        <ul class="absolute z-0 invisible opacity-0 top-10 left-0 w-[150px] py-2 px-3 bg-white shadow space-y-3 [&>li]:text-gray-500 [&>li]:text-sm 
                                [&>li]:font-normal group-hover:z-10 group-hover:visible group-hover:opacity-100 group-hover:top-14 group-hover:duration-200">
                            <li>
                                <a href="#" class="hover:text-black">
                                    Tempalte builder
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Display condition
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Porto Life
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Hello Display
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Green Tea
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Gift vutucher
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Home delivary
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-black">
                                    Rocket World
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="block py-4">
                        <a href="#"  class="hover:text-[#f9d759]">
                            Blogs
                        </a>
                    </li>
                    <li class="block py-4">
                        <a href="#"  class="hover:text-[#f9d759]">
                            About Us
                        </a>
                    </li>
                    <li class="block py-4">
                        <a href="#"  class="hover:text-[#f9d759]">
                            Elements
                        </a>
                    </li>
               </ul>
               <a href="#" class="block py-4 text-white text-base font-medium ml-auto hover:text-[#f9d759]">
                    Best Offers Here
               </a>
            </div>
       </div>
    </header>
   
    <!-- mobile menu start -->
    <div class="block lg:hidden">
        <div class="w-full flex px-4 my-4">
            <div class="flex gap-4">
                <font-awesome-icon @click="mobileToggleMenu()" class="font-extrabold text-2xl" icon="bars" />
                <img class="w-24" src="../images/porto46-logo.png"> 
            </div>
            <div class="ml-auto relative">
                <img src="../svg/shoping.svg">
                <div class="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500 rounded-full grid place-content-center">
                    <span class="text-black text-xs font-medium">0</span>
                </div>
            </div>
        </div>
        <transition-group name="isTransition">
            <div v-if="mobileToggle" class="w-full fixed top-0 left-0 right-0 bottom-0 ">
                <div class="flex w-full h-screen ">
                    <div class="w-4/5 bg-white z-10 overflow-y-auto">
                        <div class="w-11/12 m-auto my-2 flex items-center rounded-full px-4 bg-gray-100">
                            <input class="bg-transparent py-2 px-3 text-sm w-full focus:outline-none border-none" type="text" placeholder="Search...">
                            <font-awesome-icon icon="magnifying-glass" />
                        </div>
                        <div class="mt-2 ">
                            <ul class="w-full flex justify-between ">
                                <li @click="mainMenu()" :class="isMainMenuTrue? 'text-[#0155b5] border-b border-b-[#0155b5]' : 'text-gray-800'" class=" cursor-pointer text-sm font-semibold border-b border-b-gray-300 w-1/2 p-3">Main Menu</li>
                                <li @click="categories()" :class="isCtgTrue? 'text-[#0155b5] border-b border-b-[#0155b5]' : 'text-gray-800'" class=" cursor-pointer text-sm font-semibold border-b border-b-gray-300 w-1/2 text-right p-3">Categories</li>
                            </ul>
                            <div v-if="isMainMenuTrue">
                                <ul>
                                    <li>
                                        <div @click="isOpenProductSubMenu()" :class="isOpenProduct? 'border-b-0': 'border-b'" class="cursor-pointer font-medium text-sm text-gray-700 flex justify-between border-b-gray-200 p-3">
                                            Products
                                            <font-awesome-icon v-if="!isOpenProduct" class="text-sm font-medium" icon="angle-down" />
                                            <font-awesome-icon v-if="isOpenProduct" class="text-sm font-medium" icon="angle-up" />
                                        </div>
                                        <transition-group name="productSubMenu">
                                            <ul v-if="isOpenProduct" class="block">
                                                <li class="pl-3 [&>a]:font-medium [&>a]:text-sm [&>a]:text-gray-700 [&>a]:flex [&>a]:justify-between [&>a]:border-b [&>a]:border-gray-200 [&>a]:py-3 [&>a]:pl-3 ">
                                                    <a href="#">
                                                        Baby products
                                                    </a>
                                                </li>
                                                <li class="pl-3 [&>a]:font-medium [&>a]:text-sm [&>a]:text-gray-700 [&>a]:flex [&>a]:justify-between [&>a]:border-b [&>a]:border-gray-200 [&>a]:py-3 [&>a]:pl-3 ">
                                                    <a href="#">
                                                        Kids products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="font-medium text-sm text-gray-700 flex justify-between border-b border-b-gray-200 pl-6 py-3 " >
                                                        Man products
                                                    </a>
                                                </li>
                                            </ul>
                                        </transition-group>
                                    </li>
                                    <li>
                                        <div @click="isOpenFeaturesSubMenu()" :class="isOpenFeatures? 'border-b-0': 'border-b'" class="cursor-pointer font-medium text-sm text-gray-700 flex justify-between border-b-gray-200 p-3">
                                            Features
                                            <font-awesome-icon v-if="!isOpenFeatures" class="text-sm font-medium" icon="angle-down" />
                                            <font-awesome-icon v-if="isOpenFeatures" class="text-sm font-medium" icon="angle-up" />
                                        </div>
                                        <transition-group name="featureSubMenu">
                                            <ul v-if="isOpenFeatures" class="block">
                                                <li class="pl-3 [&>a]:font-medium [&>a]:text-sm [&>a]:text-gray-700 [&>a]:flex [&>a]:justify-between [&>a]:border-b [&>a]:border-gray-200 [&>a]:py-3 [&>a]:pl-3 ">
                                                    <a href="#">
                                                        Baby products 1
                                                    </a>
                                                </li>
                                                <li class="pl-3 [&>a]:font-medium [&>a]:text-sm [&>a]:text-gray-700 [&>a]:flex [&>a]:justify-between [&>a]:border-b [&>a]:border-gray-200 [&>a]:py-3 [&>a]:pl-3 ">
                                                    <a href="#">
                                                        Kids products 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="font-medium text-sm text-gray-700 flex justify-between border-b border-b-gray-200 pl-6 py-3 " >
                                                        Man products 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </transition-group>
                                    </li>
                                    <li class="font-medium text-sm text-gray-700 border-b border-b-gray-200 p-3">
                                        Blog
                                    </li>
                                    <li class="font-medium text-sm text-gray-700 border-b border-b-gray-200 p-3">
                                        Abouts
                                    </li>
                                    <li class="font-medium text-sm text-gray-700  p-3">
                                        Elements
                                    </li>
                                </ul>
                            </div>
                            <div v-if="isCtgTrue">
                                <ul>
                                    <li class="font-medium text-sm text-gray-700 border-b border-b-gray-200 p-3">
                                        <a href="#">
                                            Woman Products
                                        </a>
                                    </li>
                                    <li class="font-medium text-sm text-gray-700 border-b border-b-gray-200 p-3">
                                        <a href="#">
                                            Happy hours
                                        </a>
                                    </li>
                                    <li class="font-medium text-sm text-gray-700 border-b border-b-gray-200 p-3">
                                        <a href="#">
                                            Contact us
                                        </a>
                                    </li>
                                    <li class="font-medium text-sm text-gray-700 border-b border-b-gray-200 p-3">
                                        <a href="#">
                                            Elements
                                        </a>
                                    </li>
                                    <li class="font-medium text-sm text-gray-700 p-3">
                                        <a href="#">
                                            Location
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex justify-center items-center gap-3 mt-4 mb-2 ">
                                <a href="#">
                                    <img class="w-8 bg-cyan-700 p-1" src="../svg/facebook.svg">
                                </a>
                                <a href="#">
                                    <img class="w-8 bg-cyan-500 p-1" src="../svg/twitter.svg">
                                </a>
                                <a href="#">
                                    <img class="w-8 bg-indigo-500 p-1" src="../svg/skype.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div @click="mobileToggle = false" class="bg-black opacity-50 w-[20%]"></div>
                    <div class="opacity-100 z-10 absolute top-3 right-5" >
                        <font-awesome-icon @click="mobileToggle = false" class="text-white text-3xl font-extrabold cursor-pointer" icon="xmark" />
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
    <!-- mobile menu end -->

</template>


<style scoped>

.featureSubMenu-enter-active,
.featureSubMenu-leave-active {
    transition: all 0.4s ease;
}

.featureSubMenu-enter-from,
.featureSubMenu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}


.productSubMenu-enter-active,
.productSubMenu-leave-active {
    transition: all 0.4s ease;
}

.productSubMenu-enter-from,
.productSubMenu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.isTransition-enter-active,
.isTransition-leave-active {
  transition: all 0.5s ease;
}
.isTransition-enter-from,
.isTransition-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}




.mega-menu-image{
    background-image: url(/images/shop46-menu-banner-2.jpg);
    background-size: cover;
    background-position: center;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10%);
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}

.after-icon{
    position: relative;
}

.after-icon::after{
  content: '\f00c';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900; 
  
}
   
div{
font-family: "Poppins", sans-serif;
}

.tip {
   position: relative;
   text-decoration: none !important;
}

.tip::before{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 6px 6px 0 0;
    border-color: rgb(34 197 94) transparent transparent transparent;
    top: 50%;
    left: -2px; 
    text-decoration: none !important;
    transform: translateY(-50%) rotate(-50deg);
}




</style>