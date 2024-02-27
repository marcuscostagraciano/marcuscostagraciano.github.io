<script setup>
const contact_links = [
    { url: "https://github.com/marcuscostagraciano", logo: "src/assets/img/github-mark-white.png", name: "GitHub profile link" },
    { url: "https://www.linkedin.com/in/marcus-costa-graciano/", logo: "src/assets/img/LI-In-Bug.png", name: "LinkedIn profile link" },
]

</script>

<template>
    <v-footer>
        <p v-for="link in contact_links">
            <a v-bind:href="link.url" target="_blank">
                <img v-bind:src="link.logo" v-bind:alt="link.name">
            </a>
        </p>
    </v-footer>
</template>

<style scoped>
footer {
    display: flex;
    width: 100%;
    align-content: space-between;
}

footer img {
    height: 50px;
}

footer p {
    margin: 0 3vw;
}
</style>
