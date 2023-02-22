<script lang="ts">
    export let status: number
    export let error: Error

    const dev = process.env.NODE_ENV === "development"
</script>

<style lang="scss">
  .error-page {
    display: flex;
    height: calc(100vh - 3rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text);

    &__title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: var(--margin-md);
    }
  }
</style>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<div class="error-page">
    <h1 class="error-page__title">{status}</h1>

    <p>{error.message}</p>
</div>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}
