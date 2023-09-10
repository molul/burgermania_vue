<template>
    <div class="text-gray-900 text-3xl md:text-4xl font-semibold mb-8">{{ title.toUpperCase() }}</div>
</template>

<script>
export default {
    name: 'TitleComp',
    components: {
    },
    props: {
        title: {
            type: String,
            required: true,
        },
    },

}
</script>
