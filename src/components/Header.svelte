<script>
    import Button from "./Button.svelte";
    import {isEditing} from '../stores'

    const setEditingState = () => {
        isEditing.set(true)
    }
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
        max-width: 62rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<header>
    <div class="header-content-wrapper">
        <a href="/">
            <img src="/football.svg" alt="football">
        </a>
        <Button on:click={setEditingState}>
            add player
        </Button>
    </div>
</header>
