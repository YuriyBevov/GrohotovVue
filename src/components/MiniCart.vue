<template>
    <router-link to="/cart" class="minicart">
        <h3 class="minicart__title" >
           {{this.$props.quantity > 0 ? 'Ваша корзина' : 'Ваша корзина пуста' }} 
        </h3>

        <span class="minicart__value" v-if="this.$props.quantity > 0">
            {{this.setQuantity(this.$props.quantity)}}
        </span>

        <span class="minicart__price" v-if="this.$props.quantity > 0">
            {{this.setPrice(this.$props.totalPrice)}} ₽
        </span>
    </router-link>
</template>

<script>
    import { getQuantityString } from '@/functions/getQuantityString.js'
    import { priceFormatter } from '@/functions/priceFormatter.js'

    export default {
        props: {
            totalPrice: { type: Number },
            quantity: { type: Number },
        },

        methods: {
            setQuantity(quantity) {
                return getQuantityString(quantity)
            },

            setPrice(price) {
                return priceFormatter(price)
            }
        }
    }
</script>

<style lang="scss">
    $col_lightblack: #1F2432;
    $col_gray: #797B86;

    .minicart {
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        
        width: fit-content;
        min-width: 13.2rem;
        height: 5.1rem;

        padding-left: 4.2rem;
        margin-top: auto;
        margin-left: auto;
        margin-bottom: 3rem;

        &::before {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);

            content: '';

            width: 3.2rem;
            height: 3.2rem;

            background-image: url("~@/assets/icons/icon-cart.svg");
            background-repeat: no-repeat;
            background-size: contain;
        }

        &__title {
            font-size: 1.4rem;
            line-height: 2.1rem;

            color:  $col_lightblack;
        }

        &__value,
        &__price {
            font-size: 1.2rem;
            line-height: 1.7rem;
        }

        &__value {
            color: $col_gray;
        }

        &__price {
            color: $col_lightblack;
        }
    }
</style>