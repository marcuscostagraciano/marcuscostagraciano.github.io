<script setup>
const contact_links = [
    {url:"https://github.com/marcuscostagraciano", logo:"./assets/img/github.png"},
    {url:"https://www.linkedin.com/in/marcus-costa-graciano/", logo:""},
    {url:"https://marcuscostagraciano.github.io/portfolio/", logo:""},
]

</script>

<template>
    <footer>
        <p v-for="link in contact_links">
            {{ link.url }}
        </p>
    </footer>
</template>

<style scoped>
    footer {
        display: flex;
        align-content: space-between;
    }
</style>
