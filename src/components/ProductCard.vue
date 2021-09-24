<template>
    <li class="product-card">
        <img src="~@/assets/images/product-item_1.png" alt="Карточка товара мини" width="100" height="100">

        <div class="product-card__content">
            <h3 class="product-card__title">Вытяжное устройство G2H</h3>
            <p class="product-card__desc">12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия</p>
            <span class="product-card__article">Артикул: G2H1065</span>
        </div>

        <div class="product-card__counter">
            <button @click="onClickDecCount"/>
            <span>1</span>
            <button @click="onClickIncCount"/>
        </div>

        <span class="product-card__total">
            12 644 ₽
        </span>

        <button class="product-card__remove" @click="onClickRemoveItem"/>
    </li>
</template>

<script>
    export default {
        name: "ProductCard",

        methods: {
            onClickIncCount() {
                console.log('inc')
            },

            onClickDecCount() {
                console.log('dec')
            },

            onClickRemoveItem() {
                console.log('remove')
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
            max-width: 28rem;
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

        &__desc {
            font-size: 1.2rem;
            line-height: 1.8rem;

            margin-bottom: 0.7rem;

            color: $col_lightblack;
        }

        &__article {
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

                &:hover,
                &:focus {
                    opacity: 0.8;
                }

                &:active {
                    opacity: 0.9;
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
            
            padding-left: 1rem;
            margin-left: auto;

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