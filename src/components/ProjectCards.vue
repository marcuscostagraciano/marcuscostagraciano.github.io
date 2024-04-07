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
    /* word-break: auto-phrase; */
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

.action {
    background-color: rgb(0, 0, 238, 0.03);
    margin-top: auto;
}

.project-title {
    text-transform: capitalize !important;
    font-size: 1.2em !important;
}

.project-description {
    max-height: 3rem;
    overflow: hidden;
}

.project-description:hover {
    max-height: 5rem;
    overflow-y: auto;
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
