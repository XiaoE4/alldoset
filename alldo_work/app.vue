<script lang="ts" setup>
// You might choose this based on an API call or logged-in status
import AppAlert from "~/components/AppAlert.vue";
// const layout = "custom";
</script>

<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
    <AppAlert>
        我是自动输入组件.
        <br>
        another one!
    </AppAlert>
</template>