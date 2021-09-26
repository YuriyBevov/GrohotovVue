<template>
    <header class="header">
        <div class="cmn__wrapper header__wrapper">
            <MiniCart
              :totalPrice=cartTotalPrice
              :quantity=cartProducts.length
            />
        </div>
    </header>
</template>

<script>
    import MiniCart from '@/components/MiniCart'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Header',

        components: {
            MiniCart
        },
        
        data() {
            return {
                
            }
        },

        computed: {
            ...mapGetters('cart', ['cartProducts', 'cartTotalPrice', 'cartTotalQuantity']),
        },

        methods: {
            ...mapActions('cart', ['INIT_MOCK_CART']),

            initMiniCart() {
                this.INIT_MOCK_CART();
            }
        },

        created() {
            this.initMiniCart()
        }
    }
</script>

<style lang="scss">
    .header {
        height: 14rem;

        &__wrapper {
            display: flex;
            min-height: 14rem;
            background-image: url('~@/assets/images/header.png');
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
</style>