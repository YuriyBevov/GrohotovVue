<template>
    <div class="breadcrumbs">
        <div class="cmn__wrapper">
            <a href="#" class="breadcrumbs__link">Главная</a>
            <a href="#" class="breadcrumbs__link disabled">Корзина</a>
        </div>
    </div>
</template>

<style lang="scss">
    $col_active: #33374E;
    $col_disabled: #797B86;

    .breadcrumbs {
        padding: 3rem 0;
        
        &__link {
            position: relative;
            font-size: 1.4rem;
            line-height: 2.1rem;
            
            padding-right: 1.5rem;
            margin-right: 1rem;

            color: $col_active;

            &::after {
                position: absolute;
                top: 6px;
                right: 0;

                content: '';

                width: 5px;
                height: 8px;

                background-image: url("~@/assets/icons/icon-breadcrumbs-arr.svg");
                background-repeat: no-repeat;
                background-size: contain;
            }

            &.disabled {
                padding-right: 0;
                margin-right: 0;
                color: $col_disabled;

                &::after {
                    display: none;
                }
            }
        }
    }
</style>