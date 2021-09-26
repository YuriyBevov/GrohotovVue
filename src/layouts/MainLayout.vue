<template>
    <div class="main-container cmn">
        <Header/>
        <Main/>
        <InformationModal/>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import Header from '@/components/Header.vue'
    import Main from '@/components/Main.vue'
    import InformationModal from '@/components/InformationModal'

    export default {
        name: 'MainLayout',
        
        components: {
            Header,
            Main,
            InformationModal
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