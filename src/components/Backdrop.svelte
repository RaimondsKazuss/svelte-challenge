<style lang="scss">
  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
    background: rgba(38, 35, 35, 0.7);
  }
</style>

<div class="backdrop">
    <slot></slot>
</div>
