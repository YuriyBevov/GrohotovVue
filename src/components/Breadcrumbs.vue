<template>
    <div class="breadcrumbs">
        <div class="cmn__wrapper">
            <span
                class="breadcrumbs__link"
                v-for="(path, i) of this.$route.meta.breadcrumbs"
                :key="'path_' + i"
            >
                <router-link 
                    :to=path.link
                    v-if="path.link"
                >
                    {{path.name}}
                </router-link>

                <span v-else>{{path.name}}</span>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
    $col_active: #33374E;
    $col_disabled: #797B86;

    .breadcrumbs {
        padding: 3rem 0;
        
        &__link {
            
            a {
                position: relative;
                font-size: 1.4rem;
                line-height: 2.1rem;
                
                padding-right: 1.5rem;
                margin-right: 1rem;

                color: $col_active;

                transition: opacity 0.2s ease-out;

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
                
                &:hover,
                &:focus {
                    opacity: 0.8;
                }

                &:active {
                    opacity: 0.9;
                }
            }

            span {
                font-size: 1.4rem;
                line-height: 2.1rem;

                color: $col_disabled;
            }
        }
    }
</style>