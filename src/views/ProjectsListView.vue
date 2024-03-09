<script setup>
import fetchGitHubRepos from '../api/github_repos';
const gitUsername = 'marcuscostagraciano'

const fetched_repos = await fetchGitHubRepos(gitUsername)
console.log(fetched_repos)

</script>

<template>
    <h1 class="py-3">Projects page</h1>

    <v-container>
        <v-row>
            <v-col v-for="project in  fetched_repos " cols="auto">
                <v-card class="mx-auto" max-width="344">
                    <v-card-item>
                        <v-card-subtitle>{{ project.creation_date }}
                            <span v-if="project.language">- {{ project.language }}</span>
                        </v-card-subtitle>
                        <div>
                            <div class="project-title text-h5 mb-1">
                                {{ project.name }}
                            </div>
                            <div class="text-caption">{{ project.description }}</div>
                        </div>
                    </v-card-item>

                    <v-card-actions>
                        <a :href="project.url" target="_blank">
                            <v-btn width="100%">
                                Go to project!
                            </v-btn>
                        </a>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.project-title {
    text-transform: capitalize !important;
}

a {
    height: 100%;
    width: 100%;
    text-decoration: none;
}

button:hover {
    text-decoration: underline;
}
</style>
