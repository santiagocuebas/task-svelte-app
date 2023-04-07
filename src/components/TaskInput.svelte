<script>
	export let output;
</script>

<div>
	<input type='text' bind:value={output} />
	<slot></slot>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-items: center;
		width: 100%;
	}

	input {
		grid-column: 1 / span 2;
		width: 450px;
		margin: 10px auto;
		padding: 4px 8px;
		font-size: 1.2rem;
		border: none;
		outline: none;
		border-radius: 2px;
	}
</style>
