<script lang="ts">
    import Header from "../components/Header.svelte";
</script>

<style>
    main {
        min-height: 100%;
        margin-top: 3rem;
        background-color: var(--color-background);
    }
</style>

<svelte:head>
    <title>Player list UI</title>
</svelte:head>

<Header/>

<main>
    <slot></slot>
</main>
