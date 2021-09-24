<template>
    <header class="header">
        <div class="cmn__wrapper header__wrapper">
            <MiniCart/>
        </div>
    </header>
</template>

<script>
    import MiniCart from '@/components/MiniCart'

    export default {
        name: 'Header',

        components: {
            MiniCart
        },
        
        data() {
            return {
                
            }
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