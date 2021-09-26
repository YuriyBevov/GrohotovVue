<template>
    <div class="cmn__modal status-modal" v-if="!!modalState.isModalOpened">
        <div class="cmn__modal-wrapper">
            <span>{{modalState.message}}</span>
            <button @click="changeStatusModal" class="cmn__modal-btn">ОК</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'InformationModal',

        computed: {
            ...mapGetters('modal', ['modalState']),
        },

        methods: {
            ...mapActions('modal', ['CHANGE_STATUS_MODAL']),

            changeStatusModal() {
                this.CHANGE_STATUS_MODAL(false)
            }
        }
    }
</script>