import {writable} from "svelte/store";

export let isEditing = writable(false)
export let isModalOpen = writable(false)
