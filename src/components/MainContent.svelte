<script lang="ts">
    import {nanoid} from "nanoid"
    import type {Player} from "../interfaces"
    import {toPosition} from "../utils"
    import PlayerEditor from "../components/PlayerEditor.svelte"
    import PlayerCard from "./PlayerCard.svelte";
    import Button from "./Button.svelte";

    export let players: Array<Player> = []
    let selectedPlayer: Player | undefined
    let isEditing = false

    const deletePlayer = (id: string) => {
        // TODO: add `DELETE` api request (endpoint: `/players`, accepted payload: player id)
        throw new Error("Delete request not implemented")
    }

    const updatePlayer = (player: Player) => {
        // TODO: add `PUT` api request (endpoint: `/players`, accepted payload: player)
        throw new Error("Put request not implemented")
    }

    const addPlayer = (player: Player) => {
        // TODO: add `POST` api request (endpoint: `/players`, accepted payload: player)
        throw new Error("Post request not implemented")
    }

    const getDefaultPlayer = () => {
        return {
            id: nanoid(),
            position: toPosition("Goalkeeper"),
            score: 0,
            goals: 0,
        }
    }
</script>

<style lang="scss">
  .page {
    padding: 0 var(--padding-md);
    box-sizing: border-box;
    width: 100%;
    max-width: 20rem;
    margin: auto;

    &__title {
      padding: var(--padding-lg) 0;
      font-size: var(--fontSize-lg);
      font-weight: 700;
    }

    @media (min-width: 768px) {
      max-width: 43rem;
    }

    @media (min-width: 1024px) {
      max-width: 64rem;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 20rem;

    @media (min-width: 768px) {
      display: grid;
      max-width: unset;
      grid-template-columns: 20rem 20rem;
      column-gap: var(--margin-md);
    }

    @media (min-width: 1024px) {
      display: grid;
      max-width: unset;
      grid-template-columns: 20rem 20rem 20rem;
      column-gap: var(--margin-md);
    }
  }
</style>

<div class="page">
    <!--    <h2 class="page__title">Player list</h2>-->
    <!--    <div class="card-container">-->
    <!--        {#each players as player (player.id)}-->
    <!--            <PlayerCard player={player}/>-->
    <!--        {/each}-->
    <!--    </div>-->
    <!--{#if isEditing || !!selectedPlayer}-->

    <!--TODO: add correct form title-->
    <!--{player.name ? `Edit ${player.name}` : "New player"}-->
    <h2 class="page__title">Add new player</h2>
    <PlayerEditor onClose={() => {
                        isEditing = false
                        selectedPlayer = undefined
                    }}
                  submitPlayer={player => {
                                    if (selectedPlayer) {
                                        return updatePlayer(player)
                                    } else {
                                        return addPlayer(player)
                                    }
                                }}
                  player={selectedPlayer || getDefaultPlayer()}
    />
</div>
<!--{/if}-->
