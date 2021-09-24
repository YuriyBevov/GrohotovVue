<template>
    <div class="slider">
        <div class="custom-slider-container">
            <ul class="custom-slider-wrapper">
                <li 
                    class="slider__item custom-slide"
                    v-for="(slide, i) of this.$props.slideList"
                    :key="'slide_' + i"
                >
                    <img  :src=getImgUrl(slide.img) :alt=slide.title width="245" height="245">
                    
                    <h3 class="slider__item-title">{{slide.title}}</h3>

                    <p class="slider__item-desc">{{slide.desc}}</p>

                    <div class="slider__item-price-ru">
                        <span>{{slide.priceFromRU}}</span>
                        <span>–</span>
                        <span>{{slide.priceToRU}} ₽</span>
                    </div>

                    <div class="slider__item-price-eu">
                        <span>{{slide.priceFromEU}} €</span>
                        <span>–</span>
                        <span>{{slide.priceToEU}} €</span>
                    </div>

                    <router-link to="#" class="slider__item-more">Подробнее</router-link>
                </li>
            </ul>
            <div class="slider__navigation">
                <button class="slider__btn slider__btn--prev" @click="onClickSlideBack" />
    
                <div class="slider__amount">
                    <span class="slider__amount-current">{{this.currentSlide}} - {{this.currentSlide + (slidesPerView - 1)}}</span>
                    <span class="slider__amount-total"> / {{this.$props.slideList.length}}</span>
                </div>
                
                <button class="slider__btn slider__btn--next" @click="onClickSlideForward"/>
            </div>
        </div>


    </div>
</template>

<script>
    import { SuperSlider } from '../plugins/SuperSlider';
    export default {
        name: "Slider",

        props: {
            slideList: {type: Array}
        },

        data() {
            return {
                currentSlide: 1,
                slidesPerView: 4
            }
        },

        methods: {
            onClickSlideBack() {
                this.currentSlide !== 1 ?
                this.currentSlide -= 1 : null
            },

            onClickSlideForward() {
                this.currentSlide !== this.$props.slideList.length - this.slidesPerView + 1 ?
                this.currentSlide += 1 : null
            },

            getImgUrl(img) {
                return require('@/assets/images/' + img)
            }
        },

        mounted() {
            new SuperSlider('.custom-slider-container', {
                slidesPerView: this.slidesPerView,
                spaceBetween: 20,

                navigation: {
                    prevBtn: '.slider__btn--prev',
                    nextBtn: '.slider__btn--next'
                }
            }).init()
        }
    }
</script>

<style lang="scss">
    @import "@/assets/styles/variables.scss";
    $col_btn-bg: #90a2b5;
    $col_current-slide: #212121;
    $col_slide-bg: #f6f8fa;

    .slider {
        position: relative;

        &__item {
            display: flex;
            flex-direction: column;
            padding: 2.5rem;
            //min-width: 30.5rem !important;
            border-radius: 5px;
            background: $col_slide-bg;

            img{
                margin-bottom: 0.5rem;
            }

            &-title {
                font-family: $font_bold;
                font-size: 2.2rem;
                line-height: 2.7rem;
                margin-bottom: 1rem;

                color: $col_black;
            }

            &-desc {
                font-size: 1.4rem;
                line-height: 2rem;
                margin-bottom: auto;

                color: $col_black;
            }

            &-price-ru {
                font-family: $font-sec_med;
                font-size: 2.2rem;
                line-height: 2.9rem;

                letter-spacing: 0.005em;
                margin-bottom: 0.3rem;
                margin-top: 6rem;

                color: $col_black;
            }

            &-price-eu {
                font-family: $font-sec_med;
                font-size: 1.6rem;
                line-height: 2.3rem;
                margin-bottom: 2rem;

                color: $col_lightgray;
            }

            &-more {
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: $font_semi;
                font-size: 1.6rem;
                line-height: 2.3rem;

                width: 100%;

                padding: 1.4rem;
                border-radius: 4px;
                background: $col_blue;
                color: $col_white;

                transition: opacity $tr_rules;

                &:hover,
                &:focus {
                    opacity: 0.8;
                }

                &:active {
                    opacity: 0.9;
                }
            }
        }


        &__navigation {
            position: absolute;

            top: -10rem;
            right: 0;
            display: flex;
            align-items: center;
        }

        &__btn {
            width: 5rem;
            height: 5rem;

            padding: 0;

            border: 0;
            border-radius: 50%;
            background-color: $col_btn-bg;
            background-image: url("~@/assets/icons/icon-arrow.svg");
            background-size: 8px 18px;
            background-repeat: no-repeat;
            background-position: center;

            &.disabled {
                cursor: initial;
                opacity: 0.5;
            }

            &--prev {
                transform: rotate(180deg);
            }

            transition: opacity $tr_rules;

            &:not(.disabled):hover,
            &:not(.disabled):focus {
                opacity: 0.8;
            }

            &:not(.disabled):active {
                opacity: 0.9;
            }
        }

        &__amount {
            margin-left: 2rem;
            margin-right: 1.5rem;

            &-current {
                font-family: $font_med;
                font-size: 2.4rem;
                line-height: 3.6rem;

                color: $col_current-slide;
            }

            &-total {
                font-size: 1.8rem;
                line-height: 2.7rem;

                color: $col_lightgray;
            }
        }
    }
</style>