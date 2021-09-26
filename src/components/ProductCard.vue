<template>
    <div class="product-card">
        <img :src=setImgUrl(this.$props.img) :alt=this.$props.title width="100" height="100">

        <div class="product-card__content">
            <h3 class="product-card__title">{{this.$props.title}}</h3>
            <span class="product-card__chars" >{{this.concatenateStrings(this.$props.chars)}}</span>
            <span class="product-card__article">Артикул: {{this.$props.article}}</span>
        </div>

        <div class="product-card__counter">
            <button @click="onClickDecQuantity" :disabled="this.$props.quantity === 1 ? true : false"/>
            <span>{{this.$props.quantity}}</span>
            <button @click="onClickIncQuantity"/>
        </div>

        <span class="product-card__total">
            {{this.setPrice(this.$props.price * this.$props.quantity) }} ₽
        </span>

        <button class="product-card__remove" @click="onClickRemoveItem"/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { priceFormatter } from '@/functions/priceFormatter.js'
    import { getImgUrl } from '@/functions/getImgUrl.js'

    export default {
        name: "ProductCard",

        props: { 
            id:       { type: String },
            img:      { type: String },
            title:    { type: String },
            chars:    { type: Array },
            price:    { type: Number },
            article:  { type: String },
            quantity: { type: Number }
        },

        data() {
            return {
                productQuantity: ''
            }
        },

        computed: {
            ...mapGetters('cart', ['cart'])
        },

        methods: {
            ...mapActions('cart', ['DELETE_PRODUCT_FROM_CART', 'ADD_PRODUCT_TO_CART', 'REMOVE_PRODUCT_FROM_CART']),

            concatenateStrings(arr) {
                return arr.join(' / ' )
            },

            onClickIncQuantity() {
                this.ADD_PRODUCT_TO_CART(this.$props.id)
            },

            onClickDecQuantity() {
                this.REMOVE_PRODUCT_FROM_CART(this.$props.id)
            },

            onClickRemoveItem() {
                this.DELETE_PRODUCT_FROM_CART(this.$props.id)
            },

            setImgUrl(img) {
                return getImgUrl(img)
            },

            setPrice(price) {
                return priceFormatter(price)
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';
    $col_gray:        #c4c4c4;
    $col_button-brd:  #ffffff;

    .product-card {
        position: relative;

        display: flex;
        flex-wrap: wrap;
        align-items: center;

        padding: 2rem 1.5rem;
        margin-bottom: 2.5rem;

        &:not(:last-child) {
            border: 1px solid $col_gray;
        }

        img{
            margin-right: 3.1rem;
        }

        &__content {
            max-width: 28.5rem;
            padding: 0 1rem;
            margin-right: auto;
        }

        &__title {
            font-family: $font_semi;
            font-size: 1.6rem;
            line-height: 2.3rem;

            margin-bottom: 0.6rem;

            color: $col_black;
        }

        &__chars {
            display: block;
            font-size: 1.2rem;
            line-height: 1.8rem;

            margin-bottom: 0.7rem;

            color: $col_lightblack;
        }

        &__article {
            display: block;
            font-size: 1.4rem;
            line-height: 2.1rem;

            color: $col_lightgray;
        }

        &__counter {
            display: flex;

            width: 10.2rem;
            height: 3.4rem;

            border-radius: 4px;
            background: #F6F8FA;

            button {
                padding: 0;
                
                width: 3.4rem;
                height: 3.4rem;
                
                border: 0;

                background-color: transparent;

                &:first-child,
                &:last-child {
                    background-size: content;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                
                &:first-child {
                    border-right: 2px solid $col_button-brd;
                    background-image: url("~@/assets/icons/icon-minus.svg");
                }

                &:last-child {
                    border-left: 2px solid $col_button-brd;
                    background-image: url("~@/assets/icons/icon-plus.svg");
                }

                &:not(:disabled):hover,
                &:not(:disabled):focus {
                    opacity: 0.8;
                }

                &:not(:disabled):active {
                    opacity: 0.9;
                }

                &:disabled {
                    cursor: initial;
                    opacity: 0.5;
                }
            }

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                
                font-size: 1.4rem;
                line-height: 2.1rem;

                width: fit-content;
                min-width: 3.4rem;
                height: 3.4rem;

                color: $col_black;
            }
        }

        &__total {
            font-family: $font-sec_med;
            font-size: 1.8rem;
            line-height: 2.6rem;
            text-align: right;

            width: 12rem;
            padding-left: 1rem;

            color: $col_black;
        }

        &__remove {
            position: absolute;
            top: -1rem;
            right: -1rem;

            width: 4rem;
            height: 4rem;

            border: 0;
            padding: 0;

            background-color: transparent;
            background-image: url("~@/assets/icons/icon-close.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 1.2rem 1.2rem;

            &:hover,
            &:focus {
                opacity: 0.8;
            }
        }
    }
</style>