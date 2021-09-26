<template>
    <section class="history">
        <div class="history__header">
            <h2 class="history__title">Просмотренные товары</h2>
        </div>

        <Slider
            :slideList="this.$props.products"
        />
    </section>
</template>

<script>
    import Slider from '@/components/Slider'
    import {mapGetters} from 'vuex'

    export default {
        name: "WatchedHistory",

        props: {
            products: { type: Array }
        },

        components: {
            Slider
        },

    }
</script>

<style lang="scss">
    $font_semi: 'Lato-SemiBold';
    $col_black:  #1F2432;

    .history {
        padding-bottom: 11.6rem;

        &__header {
            margin-bottom: 6rem;
        }

        &__title {
            font-family: $font_semi;
            font-size: 3rem;
            line-height: 3.6rem;
            padding-right: 40rem;

            color: $col_black;
        }
    }
</style>