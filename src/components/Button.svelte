<script>
    export let btnType;
</script>

<style lang="scss">
  .button {
    padding: 0 var(--padding-md);
    height: 2rem;
    font-size: var(--fontSize-md);
    font-weight: 700;
    color: var(--color-blue);
    background: none;
    text-transform: uppercase;
    border: 2px solid var(--color-blue);
    border-radius: var(--border-radius-button);

    &:hover {
      cursor: pointer;
      color: var(--color-background);
      background: var(--color-blue);
    }

    &.red {
      color: var(--color-warning);
      border: 2px solid var(--color-warning);

      &:hover {
        color: var(--color-background);
        background: var(--color-warning);
      }
    }

    &.dark {
      color: var(--color-dark-blue);
      border: 2px solid var(--color-dark-blue);

      &:hover {
        color: var(--color-background);
        background: var(--color-dark-blue);
      }
    }

    &.wide {
      width: 100%;
      margin-right: var(--margin-md);

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>

<button class="button {btnType}" on:click>
    <slot></slot>
</button>




