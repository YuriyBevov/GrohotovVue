<template>
    <div class="main-container cmn">
        <Header/>
        <Main/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Main from '@/components/Main.vue'

    export default {
        name: 'MainLayout',
        
        components: {
            Header,
            Main
        }
    }
</script>