<script setup>

import ProjectCards from '../components/ProjectCards.vue';

import fetchGitHubRepos from '../api/github_repos';
const gitUsername = 'marcuscostagraciano'
const fetched_repos = await fetchGitHubRepos(gitUsername)

</script>

<template>
    <h1 class="pt-3 pb-2">Projects page</h1>

    <Suspense>
        <v-container class="projects-container">
            <ProjectCards v-for="project in fetched_repos" :project="project" />
        </v-container>

        <template #fallback>
            Loading projects...
        </template>
    </Suspense>
</template>

<style scoped>
.projects-container {
    display: grid;
    gap: 1.5rem;

    @media (width > 320px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (width >=768px) {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
