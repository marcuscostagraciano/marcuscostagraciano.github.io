<script setup>
defineProps({
    projects: Object
})
</script>

<template>

    <v-col v-for="project in projects" cols="auto">
        <v-card class="card mx-auto">
            <v-card-item>
                <v-card-subtitle>{{ project.creation_date }}
                    <span v-if="project.language">- {{ project.language }}</span>
                </v-card-subtitle>
                <div>
                    <div class="project-title text-h5 mb-1">
                        {{ project.name }}
                    </div>
                    <div class="project-topics mb-2">
                        <div v-if="project.topics.length == 0">
                            ---
                        </div>
                        <div v-else>
                            <v-chip v-for="n in 3" size="small" density="comfortable">
                                {{ project.topics[n - 1] }}
                            </v-chip>
                        </div>
                    </div>
                    <div class="project-description text-caption">
                        {{ project.description }}
                    </div>
                </div>
            </v-card-item>

            <v-card-actions class="action">
                <a :href="project.url" target="_blank">
                    <v-btn width="100%">
                        Go to project!
                    </v-btn>
                </a>
            </v-card-actions>
        </v-card>
    </v-col>

</template>

<style scoped>
.card:not(:hover) .project-title {
    opacity: 75%;
}

.card {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: auto;
    word-break: break-word;
    width: 85vw;
    height: 100%;

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
    font-size: 1.2em !important;
}

.project-topics {
    font-size: 0.7rem !important;
}

.project-topics div {
    display: flex;
    flex-direction: row;
}

.project-topics .v-chip {
    background-color: rgb(239, 239, 239, .1) !important;
    word-break: break-all;
    text-align: center;
    font-size: 0.7rem !important;
}

.project-description {
    max-height: 3rem;
    overflow: hidden;
}

.project-description:hover {
    max-height: 5rem;
    overflow-y: auto;
}

.action {
    background-color: rgb(0, 0, 238, 0.03);
    margin-top: auto;
}

a {
    height: 100%;
    width: 100%;
    text-decoration: none;
}

button:hover {
    text-decoration: none;
}
</style>
