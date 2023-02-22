<script lang="ts">
    import type {Player} from "../interfaces"
    import PlayerForm from "../components/PlayerForm.svelte"

    // export let submitPlayer: (p: Player) => Promise<any>
    export let player: Partial<Player>

    let editingPlayer: Player | undefined
</script>

<style lang="scss">
  .form-dialog {
    width: 100%;
    background: var(--color-white);
    border-radius: var(--border-radius);
    padding: var(--padding-md);
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
  }
</style>

<div class="form-dialog">
    <PlayerForm
            id={player.id}
            name={player.name}
            position={player.position}
            picture={player.picture}
            score={player.score}
            onUpdate={data => editingPlayer = data}
    />
</div>
