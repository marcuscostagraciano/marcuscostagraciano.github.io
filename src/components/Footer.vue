<script setup>
const contact_links = [
    { url: "https://github.com/marcuscostagraciano", icon: "mdi-github", name: "GitHub profile link" },
    { url: "https://www.instagram.com/marcus.costa.graciano/", icon: "mdi-instagram", name: "Instagram profile link" },
    { url: "https://www.linkedin.com/in/marcus-costa-graciano/", icon: "mdi-linkedin", name: "LinkedIn profile link" },
]

</script>

<template>
    <v-footer app class="d-flex justify-space-around">
        <p v-for="link in contact_links">
            <a :href="link.url" target="_blank">
                <v-icon aria-hidden="false" :icon=link.icon />
            </a>
        </p>
    </v-footer>
</template>

<style scoped></style>
