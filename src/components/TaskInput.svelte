<script>
	export let output;
</script>

<div class='container-input'>
	<div class='input-div'>
		<input
			type='text'
			class='input-task'
			bind:value={output}
		/>
	</div>
	<div class='container-buttons'>
		<slot></slot>
	</div>
</div>

<style>
	.input-div {
		width: 100%;
	}
	
	.input-task {
		display: block;
		min-width: 300px;
		width: 40%;
		max-width: 600px;
		margin: 10px auto;
		padding: 4px 8px;
		font-size: 1.2rem;
		border: none;
		outline: none;
		border-radius: 2px;
	}
	
	.container-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 0;
		gap: 15px;
	}
</style>
