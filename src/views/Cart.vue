<template>
    <section class="cart">
        <div class="cmn__wrapper cart__wrapper">
            <div class="cart__main">
                <div class="cart__header">
                    <h2 class="cmn__title cart__content-title">Ваша корзина</h2>
                    <span class="cart__content-count">4 товара</span>
                    <button class="cart__content-clean">Очистить корзину</button>
                </div>
                <div class="cart__content">
                    
                    <!-- будет список -->
                    <ul>
                        <ProductCard/>
                    </ul>

                    <div class="cart__content-footer">
                        <input type="checkbox" id="mount_request">
                        <label for="mount_request">
                            <span>Установка</span>
                            <p>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
                        </label>
                    </div>
                </div>
                <div class="cart__total">
                    <CartOrder/>
                </div>
            </div>

            <div class="cart__footer">
                <WatchedHistory/>
            </div>
        </div>
    </section>
</template>

<script>
    import ProductCard from '@/components/ProductCard'
    import CartOrder from '@/components/CartOrder'
    import WatchedHistory from '@/components/WatchedHistory'

    export default {
        name: "Cart",

        components: {
            ProductCard,
            CartOrder,
            WatchedHistory
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';
    $col_footer-bg: #f6f8fa;
    
    .cart {

        &__main {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 9.5rem;
        }

        &__header {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            width: 100%;
            max-width: 80rem;
            margin-bottom: 5rem;
        }

        &__content {
            width: 65%;
            max-width: 80rem;
            margin-right: auto;

            &-title {
                margin-right: 2.2rem;
            }

            &-count {
                font-size: 1.8rem;
                line-height: 2.6rem;

                color: $col_lightgray;
            }

            &-clean {
                display: flex;
                align-items: flex-end;
                width: fit-content;
                min-height: 4rem;

                font-size: 1.4rem;
                line-height: 2.1rem;

                padding: 0;
                margin-left: auto;
                
                border: 0;
                border-bottom: 1px solid $col_lightgray;

                color: $col_lightgray;
                background-color: transparent;
            }

            &-footer {
                padding: 2.5rem;
                
                border-radius: 5px;
                background-color: $col_footer-bg;

                input {
                    display: none;
                }

                label {
                    position: relative;
                    display: block;
                    padding-left: 11rem;
                    cursor: pointer;

                    span {
                        font-family: $font_semi;
                        font-size: 1.6rem;
                        line-height: 2.3rem;

                        color: $col_black;
                    }
                    
                    p {
                        font-size: 1.4rem;
                        line-height: 2.1rem;

                        color: $col_lightgray;
                    }

                    &::before {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translateY(-50%);

                        content: '';

                        width: 2rem;
                        height: 2rem;

                        border: 1px solid $col_lightgray;
                        border-radius: 2px;
                        box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);

                        background-color: $col_white;
                    }

                    &::after {
                        position: absolute;
                        top: 50%;
                        left: 4rem;
                        transform: translateY(-50%);

                        content: '';

                        width: 5rem;
                        height: 5rem;

                        border-radius: 4px;
                        
                        background-color: $col_white;
                        background-image: url("~@/assets/icons/icon-mount.svg");
                        background-repeat: no-repeat;
                        background-size: 3rem 3rem;
                        background-position: center;
                    }
                }

                input:checked + label::before {
                    background-image: url("~@/assets/icons/icon-accept.svg");
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                }
            }
        }

        &__total {
            width: 35%;
            max-width: 42.5rem;
        }
    }
</style>