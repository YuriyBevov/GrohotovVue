<template>
    <section class="history">
        <div class="history__header">
            <h2 class="history__title">Просмотренные товары</h2>
        </div>

        <Slider
            :slideList="this.watchedProductList"
        />
    </section>
</template>

<script>
    import Slider from '@/components/Slider'

    export default {
        name: "WatchedHistory",

        components: {
            Slider
        },

        data() {
            return {
                watchedProductList: [
                    {
                        img: 'product-item_1-big.png',
                        title: 'BXC',
                        desc: 'Вытяжное устройство для механической системы вентиляции',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    },

                    {
                        img: 'product-item_2-big.png',
                        title: 'G2H',
                        desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    },

                    {
                        img: 'product-item_3-big.png',
                        title: 'GHN',
                        desc: 'Вытяжное устройство с датчиком присутствия',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    },

                    {
                        img: 'product-item_4-big.png',
                        title: 'TDA',
                        desc: 'Вытяжное устройство с датчиком присутствия',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    },

                    {
                        img: 'product-item_2-big.png',
                        title: 'G2H',
                        desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    },

                    {
                        img: 'product-item_1-big.png',
                        title: 'TDA',
                        desc: 'Вытяжное устройство с датчиком присутствия',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    },

                    {
                        img: 'product-item_1-big.png',
                        title: 'BXC',
                        desc: 'Вытяжное устройство для механической системы вентиляции',
                        priceFromRU: '6 848',
                        priceToRU: '56 584',
                        priceFromEU: '77.60',
                        priceToEU: '643.86',
                    }
                ]
            }
        }
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