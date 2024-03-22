<script setup lang="ts">
// You might choose this based on an API call or logged-in status
import AppAlert from "~/components/AppAlert.vue";
// const layout = "custom";
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <AppAlert>
        This is an auto-imported component.
    </AppAlert>
</template>