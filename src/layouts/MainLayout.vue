<template>
    <div class="main-container cmn">
        <Header/>
        <Main/>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import Header from '@/components/Header.vue'
    import Main from '@/components/Main.vue'

    export default {
        name: 'MainLayout',
        
        components: {
            Header,
            Main
        },

        methods: {
            ...mapActions('catalog', ['GET_PRODUCT_LIST']),

            initCatalog() {
                this.GET_PRODUCT_LIST()
            }
        },

        computed: {
            ...mapGetters('catalog', ['productList'])
        },

        created() {
            this.initCatalog()
        }
    }
</script>