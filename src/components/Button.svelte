<script>
	export let text;
	export let addTask;
</script>

<button class={text.toLowerCase()} on:click={() => addTask(text)}>
  {text}
</button>

<style>
	button {
		width: min-content;
		max-width: 112px;
		padding: 8px 24px;
		border: none;
		border-radius: 4px;
		color: #ffffff;
		font-weight: 700;
		font-size: 1.1rem;
		cursor: pointer;
	}
	
	.accept {
		background-color: #242294;
	}
	
	.cancel {
		background-color: #da0f0f;
	}
	
	.accept:hover {
		background-color: #3432a4;
	}
	
	.cancel:hover {
		background-color: #ea1f1f;
	}
</style>
