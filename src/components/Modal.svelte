<script>
    import Backdrop from "./Backdrop.svelte";
</script>

<style lang="scss">
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20rem;
    min-height: 12rem;
    padding: var(--padding-md);
    background: var(--color-white);
    font-size: var(--fontSize-md);
    border-radius: var(--border-radius);
    box-sizing: border-box;
  }

  :global(.modal__text) {
    width: 100%;
    text-align: center;
    margin-top: var(--margin-md);
  }

  :global(.modal__buttons) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-sizing: border-box;
  }
</style>

<Backdrop>
    <div class="modal">
        <slot></slot>
    </div>
</Backdrop>
