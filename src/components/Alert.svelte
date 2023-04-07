<script>
	export let tasks;
	export let alert;
	export let id;

  const deleteTask = () => {
		tasks = tasks.filter(task => task.id !== id);
    id = '';
    alert = false;
  };
</script>

<div class="alert-container">
	<div class="alert-content">
		<p>Haven't yet completed this task. Do you want to delete it anyway?</p>
		<button class="cancel" on:click={() => alert = false}>
			Cancel
		</button>
		<button class="accept" on:click={deleteTask}>
			Accept
		</button>
	</div>
</div>

<style>
	.alert-container {
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
	
	.alert-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 400px;
		padding: 20px;
		outline: 1px solid #dddddd;
		border-radius: 8px;
		background-color: #ffffff;
		font-size: 20px;
		font-weight: 700;
		box-shadow: 0 0 10px #888888;
		gap: 8px;
	}
	
	p {
		width: 100%;
	}

	button {
		width: fit-content;
		margin: auto;
		padding: 8px 24px;
		border: none;
		border-radius: 8px;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.cancel {
		background-color: #f04425;
	}

	.cancel:hover {
		background-color: #ff4425;
	}

	.accept {
		background-color: #4588b6;
	}

	.accept:hover {
		background-color: #4588c6;
	}
</style>
