<script setup>
import fetchGitHubRepos from '../api/github_repos';
const gitUsername = 'marcuscostagraciano'

const fetched_repos = await fetchGitHubRepos(gitUsername)

</script>

<template>
    <h1 class="py-3">Projects page</h1>

    <v-container>
        <v-row>
            <v-col v-for="project in  fetched_repos" cols="auto">
                <v-card class="card mx-auto">
                    <v-card-item>
                        <v-card-subtitle>{{ project.creation_date }}
                            <span v-if="project.language">- {{ project.language }}</span>
                        </v-card-subtitle>
                        <div>
                            <div class="project-title text-h5 mb-1">
                                {{ project.name }}
                            </div>
                            <div class="project-description text-caption">{{ project.description }}</div>
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
.v-row {
    margin: auto;
    display: flex;
    align-content: center !important;
}

.card:not(:hover) .project-title {
    opacity: 75%;
}

.card {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: auto;
    word-break: auto-phrase;
    width: 85vw;

    @media screen and (min-width: 480px) {
        width: 41.5vw;
    }

    @media screen and (min-width: 768px) {
        width: 20vw;
    }

    @media screen and (min-width: 960px) {
        width: 18vw;
    }

}

.project-title {
    text-transform: capitalize !important;
    max-height: 100pxrem;
}

.project-description {
    max-height: 5rem;
    overflow: hidden;
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
