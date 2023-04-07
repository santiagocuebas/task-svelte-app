<script>
	export let message;

	const changeMessage = () => message = false;
</script>

<div class="message-container">
	<div class="message-content">
		<p>Can't delete a task marked as important</p>
		<button class="message-button" on:click|preventDefault={changeMessage}>
			Ok
		</button>
	</div>
</div>

<style>
	.message-container {
		display: grid;
		position: absolute;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		min-height: 100%;
		padding-top: 80px;
		background-color: #ffffffdf;
		z-index: 1000;
	}
	
	.message-content {
		display: grid;
		grid-auto-rows: min-content;
		justify-content: center;
		width: 400px;
		padding: 20px;
		outline: 1px solid #dddddd;
		border-radius: 8px;
		background-color: #ffffff;
		font-size: 20px;
		font-weight: 700;
		box-shadow: 0 0 10px #888888;
		row-gap: 8px;
	}

	button {
		width: fit-content;
		margin: auto;
		padding: 8px 24px;
		border: none;
		border-radius: 8px;
		background-color: #4588b6;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #4588c6;
	}
</style>
