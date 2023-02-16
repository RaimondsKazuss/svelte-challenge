<script>
    import Button from "./Button.svelte";
</script>

<style>
    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: var(--padding-sm) var(--padding-md);
        box-sizing: border-box;
        background: var(--color-white);
        box-shadow: var(--box-shadow);
    }

    .header-content-wrapper {
        max-width: 64rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<header>
    <div class="header-content-wrapper">
        <img src="/football.svg" alt="football">
        <!--TODO: trigger state change on btn click-->
        <!--    <Button id="add-player" on:click={() => isEditing = !isEditing}>-->
        <Button id="add-player" on:click={() => {}}>
            add player
        </Button>
    </div>

</header>
