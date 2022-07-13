<template>
<div class="empty">
    <InboxIcon/>  
    <span>Rien a afficer</span>
</div>
</template>

<script setup>
import { InboxIcon } from "@heroicons/vue/outline";
</script>

<style scoped>

.empty {
    display: flex;
    color: #1e3c87;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.empty > * {
    margin: auto;
}
svg{
    height: 2rem;
}
</style>