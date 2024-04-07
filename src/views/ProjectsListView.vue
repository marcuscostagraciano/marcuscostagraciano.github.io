<script setup>

import ProjectCards from '../components/ProjectCards.vue';

import fetchGitHubRepos from '../api/github_repos';
const gitUsername = 'marcuscostagraciano'
const fetched_repos = await fetchGitHubRepos(gitUsername)

</script>

<template>
    <h1 class="py-3">Projects page</h1>

    <Suspense>
        <v-container>
            <v-row>
                <ProjectCards :projects="fetched_repos" />
            </v-row>
        </v-container>

        <template #fallback>
            Loading
        </template>
    </Suspense>
</template>

<style scoped>
.v-row {
    margin: auto;
    display: flex;
    align-content: center !important;
}
</style>
