<script lang="ts">
    import {isModalOpen} from "../stores";

    let isOpen: boolean;

    isModalOpen.subscribe(value => {
        isOpen = value;
    });
</script>

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
    z-index: var(--zIndex-modal);
    background: rgba(34, 34, 34, 0.3);
    backdrop-filter: blur(1px);
  }
</style>

<div class="backdrop">
    <slot></slot>
</div>
