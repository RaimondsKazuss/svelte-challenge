<script lang="ts">
    import Button from "./Button.svelte";
    import {isEditing, isModalOpen} from "../stores";
    import type {Player} from "../interfaces";
    import Modal from "./Modal.svelte";

    export let player: Player
    let modalOpen: boolean = false;

    const openEditForm = (): void => {
        isEditing.update(isEditing => !isEditing)
    }

    const toggleConfirm = (): void => {
        isModalOpen.update(isModalOpen => !isModalOpen)
        //TODO: implement player delete functionality
    }


    isModalOpen.subscribe(value => {
        modalOpen = value;
    });
</script>

<style lang="scss">
  .player-card {
    width: 100%;
    max-width: 20rem;
    margin-bottom: var(--margin-md);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background: var(--color-white);

    &__image {
      width: 100%;
      height: 14rem;
      object-fit: cover;
      object-position: 100% 0;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }

    &__title {
      padding: var(--padding-md);

      img {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin-right: var(--margin-sm);
        vertical-align: middle;
      }

      h3 {
        display: inline-block;
        font-size: var(--fontSize-lg);
        font-weight: 700;
        color: var(--color-dark-blue);
        vertical-align: middle;
      }
    }

    &__stats {
      padding: 0 var(--padding-md) var(--padding-md);
      box-sizing: border-box;
      line-height: 1.5rem;
      font-size: var(--fontSize-md);

      &__stat {
        display: inline-block;
        width: 40%;
      }

      &__value {
        display: inline-block;
        width: 55%;
        font-weight: 700;
      }
    }

    &__divider {
      width: calc(100% - 2 * var(--margin-md));
      height: 2px;
      margin: 0 var(--margin-md) var(--margin-md);
      border: none;
      background: var(--color-light-blue);
    }

    &__buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0 var(--padding-md) var(--padding-md);
      box-sizing: border-box;
    }
  }
</style>

{#if modalOpen}
    <Modal>
        <div class="modal__text">Are you sure you want to delete this player?</div>
        <div class="modal__buttons">
            <Button btnType="wide" on:click={toggleConfirm}>
                cancel
            </Button>
            <Button btnType="wide" on:click={toggleConfirm}>
                confirm
            </Button>
        </div>
    </Modal>
{/if}

<div class="player-card">
    <img
            class="player-card__image"
            src={player.picture}
            alt={`of ${player.name}`}
            title="Image title"
    />
    <div class="player-card__title">
        <img src="/shield.svg" alt="team logo">
        <h3>{player.name}</h3>
    </div>

    <div class="player-card__stats">
        <span class="player-card__stats__stat">position</span>
        <span class="player-card__stats__value">{player.position}</span>
        <span class="player-card__stats__stat">score</span>
        <span class="player-card__stats__value">{player.score}</span>
        <span class="player-card__stats__stat">goals</span>
        <span class="player-card__stats__value">{player.goals}</span>
    </div>

    <hr class="player-card__divider">

    <div class="player-card__buttons">
        <Button btnType="red wide" on:click={toggleConfirm}>
            Delete
        </Button>
        <Button btnType="wide" on:click={openEditForm}>
            Edit
        </Button>
    </div>
</div>
