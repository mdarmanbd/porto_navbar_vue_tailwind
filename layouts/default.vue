<script setup>
    import  Header  from '../components/header.vue';
    import Footer from '../components/footer.vue';

</script>

<template>
    <Header/>
        <!-- out put the pages -->
        <div class="">
            <slot/>
        </div>

    <Footer/>
  
</template>

<style scoped>

</style>