<template>
    <div class="order">
        <span class="order__title">Итого</span>

        <div class="order__field">
            <h3 class="order__field-title">Сумма заказа</h3>
            <span class="order__field-value">50 576 ₽</span>
        </div>

        <div class="order__field">
            <h3 class="order__field-title">Количество</h3>
            <span class="order__field-value">4 шт</span>
        </div>

        <div class="order__field">
            <h3 class="order__field-title">Установка</h3>
            <span class="order__field-value">Нет</span>
        </div>

        <div class="order__price">
            <h3 class="order__price-title">Стоимость товаров</h3>
            <span class="order__price-value">50 576 ₽</span>
        </div>

        <button class="order__btn">Оформить заказ</button>
        <button class="order__btn order__btn--bordered">Купить в 1 клик</button>
    </div>
</template>

<script>
    export default {
        name: 'Order',
    }
</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';
    $col_bg:        #f6f8fa;
    $col_price-brd: #aeb0b6;

    .order {
        width: 100%;
        max-width: 42.5rem;
        padding: 3.5rem 3rem;
        border-radius: 5px;
        background-color: $col_bg;

        &__title {
            font-family: $font_semi;
            font-size: 2.4rem;
            line-height: 2.9rem;
            margin-bottom: 3.1rem;

            color: $col_black;
        }

        &__field {
            margin-bottom: 1.7rem;

            &:last-child {
                margin-bottom: 2.9rem;
            }

            &-title {
                font-family: $font_med;
                font-size: 1.6rem;
                line-height: 2.3rem;

                color: $col_black;
            }

            &-value {
                font-family: $font-sec_reg;
                font-size: 1.6rem;
                line-height: 2.3rem;

                color: $col_black;
            }
        }

        &__price {
            padding-top: 1rem;
            margin-bottom: 3rem;
            border-top: 1px solid $col_price-brd;
            &-title {
                font-family: $font_semi;
                font-size: 1.8rem;
                line-height: 2.6rem;

                color: $col_black;
            }

            &-value {
                font-family: $font-sec_bold;
                font-size: 2.6rem;
                line-height: 3.4rem;
                letter-spacing: 0.005em;

                color: $col_black;
            }
        }

        &__btn {
            width: 100%;
            font-family: $font_semi;
            font-size: 1.8rem;
            line-height: 2.6rem;

            padding: 1.4rem;

            &:not(:last-child) {
                margin-bottom: 1.2rem;
            }

            border: 1px solid transparent;
            color: $col_white;
            background-color: $col_blue;
            border-radius: 4px;

            transition: opacity $tr_rules, border $tr_rules, color $tr_rules, background-color $tr_rules;

            &:not(&--bordered):hover,
            &:not(&--bordered):focus {
                opacity: 0.8;
            }

            &:not(&--bordered):active {
                opacity: 0.9;
            }

            &--bordered {
                border: 1px solid $col_blue;

                color: $col_blue;
                background-color: transparent;

                &:hover,
                &:focus {
                    border: 1px solid transparent;
                    color: $col_white;
                    background-color: $col_blue;
                }

                &:active {
                    opacity: 0.9;
                }
            }


        }
    }
</style>