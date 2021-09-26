<template>
    <main>
        <Breadcrumbs/>
        <router-view/>
    </main>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs'

    export default {
        name: 'Main',

        components: {
            Breadcrumbs
        },
    }
</script>