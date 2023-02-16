<script lang="ts">
    import type {Player, Position} from "../interfaces"
    import {toPosition, readFileAsBase64} from "../utils"
    import Button from "./Button.svelte";

    export let id: string
    export let name: string = ""
    export let position: Position = "Goalkeeper"
    export let picture: string = ""
    export let score: number = 0
    export let goals: number = 0
    export let onUpdate: (player: Player) => void
    let error: string | undefined
    $: data = {
        id,
        name,
        position,
        picture,
        score,
        goals,
    }

    export let onClose: () => void
    export let submitPlayer: (p: Player) => Promise<any>

</script>

<style lang="scss">
  .form {
    max-width: 20rem;
    margin: auto;
    font-size: var(--fontSize-lg);

    &__field {
      label {
        font-size: var(--fontSize-sm);
        line-height: 1.5rem;
      }

      &__input, &__select {
        width: 100%;
        height: 2rem;
        margin-bottom: var(--margin-md);
        padding: var(--padding-sm);
        background: var(--color-white);
        border: 1px solid var(--color-light-blue);
        border-radius: var(--border-radius);
        box-sizing: border-box;
      }
    }

    &__upload-field {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 8rem;
      margin-bottom: var(--margin-md);
      text-align: center;
      padding: var(--padding-md);
      background: var(--color-background);
      color: var(--color-blue);
      font-size: var(--fontSize-sm);
      border: 1px solid var(--color-light-blue);
      border-radius: var(--border-radius);
      box-sizing: border-box;

      input {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;

        &:hover {
          cursor: pointer;
        }
      }

      img {
        width: 100%;
        height: 5rem;
        border-radius: var(--border-radius);
        object-fit: cover;
        margin: 0 auto var(--margin-sm);
      }

      //svg {
      //  width: 64px;
      //  height: 64px;
      //}
    }

    &__buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      box-sizing: border-box;
      margin-bottom: var(--margin-md);
    }
  }
</style>

<div class="form">
    <div class="form__field">
        <label class="form__field__label" for="name">Name</label>
        <input
                class="form__field__input"
                required
                id="name"
                name="name"
                on:change={e => {
        name = e.target.value
        onUpdate({ ...data, name })
    }}
                value={data.name}
        />
    </div>
    <div class="form__field">
        <label for="position">Position</label>
        <select
                bind:value={position}
                on:change={e => {
                    const nextPosition = toPosition(e.target.value)
                    if (nextPosition) {
                        position = nextPosition
                        onUpdate({ ...data, position })
                    }
                }}
                name="position"
                class="form__field__select"
                id="position"
        >
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
        </select>
    </div>
    <div class="form__field">
        <label class="form__field__label" for="score">Score</label>
        <input
                class="form__field__input"
                type="number"
                min=0
                max=100
                required
                id="score"
                name="score"
                on:change={e => {
                    const nextScore = parseInt(e.target.value, 10)
                    if (!isNaN(nextScore)) {
                        score = nextScore
                        onUpdate({ ...data, score })
                    }
                }}
                value={data.score || 0}
        />
    </div>
    <div class="form__field">
        <label class="form__field__label" for="goals">Goals</label>
        <input
                class="form__field__input"
                type="number"
                min=0
                max=100
                required
                id="goals"
                name="goals"
                on:change={e => {
                    const nextGoals = parseInt(e.target.value, 10)
                    if (!isNaN(nextGoals)) {
                        goals = nextGoals
                        onUpdate({ ...data, goals })
                    }
                }}
                value={data.goals || 0}
        />
    </div>
    <div class="form__field">
        <div class="form__upload-field">
            {#if data.picture}
                <img src={data.picture} alt="Player's preview"/>
                <span>Change picture (best 400x400)</span>
            {:else}
                <span>Pick a picture (best 400x400)</span>
            {/if}
            {#if error}
                <p class="error">{error}</p>
            {/if}
            <input
                    class="file-upload-field__input"
                    type="file"
                    accept="image/png, image/jpeg"
                    on:change={e => {
                        const file = e.currentTarget.files
                            ? e.currentTarget.files[0]
                            : null
                        if (file) {
                            readFileAsBase64(file).then(base64 => {
                                if (base64.length > 1048487) {
                                    error = "Image too large"
                                } else {
                                    picture = base64
                                    onUpdate({ ...data, picture })
                                }
                            })
                        }
                    }}
            />
        </div>
    </div>
    <div class="form__buttons">
        <Button btnType="wide" on:click={() => {
            // TODO: implement the "Add player" functionality
            throw new Error("Missing implementation for Add player")
        }}>
            Submit
        </Button>
        <Button btnType="red wide" on:click={e => {
            e.preventDefault()
            onClose()
        }}>
            Close
        </Button>
    </div>
</div>


