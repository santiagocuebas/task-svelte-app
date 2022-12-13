<script>
	export let id;
	export let see;
	export let option;
	export let complete;
	export let edit;
	export let text;
	export let tasks;
	export let textEdit;

	import { clickOutside } from "../helpers/clickOutside";

	const falseSee = () => see = false;

	const changeSee = () => {
    const reloadTasks = tasks.map(task => {
      if (task.id === id) {
        task.see = !task.see;
      } else task.see = false;
      return task;
    });

		tasks = reloadTasks;
  };
</script>

<div class='box-task'>
	<div class={`text-task ${option ? 'important-task' : ''} ${complete ? 'complete-task' : ''}`.trim()} contentEditable={edit}>
		{text}
	</div>
	<div class="box-icons">
		{#if edit}
		<div class="icon-task" on:mousedown={() => {textEdit(id); changeSee}}>
			<i class='fa-regular fa-square-check proper-icon'></i>
		</div>
		{:else}
		<div
			class="icon-task"
			use:clickOutside
			on:outclick={falseSee}
			on:mousedown={changeSee}
		>
			{#if see}
			<div class='list-icons'>
				<slot></slot>
			</div>
			{/if}
			<i class='fa-solid fa-grip-vertical proper-icon'></i>
		</div>
		{/if}
	</div>
</div>

<style>
	.box-task {
		display: flex;
		width: 100%;
		height: min-content;
	}
	
	.text-task {
		width: 100%;
		font-size: 28px;
		font-weight: 700;
	}
	
	.important-task {
		color: #c73636;
	}
	
	.complete-task {
		color: #33b812;
	}
	
	.box-icons {
		display: flex;
		align-items: center;
		row-gap: 5px;
	}
	
	.icon-task {
		padding-left: 16px;
		cursor: pointer;
	}

	.list-icons {
		position: absolute;
		width: 150px;
		height: min-content;
		margin-top: 20px;
		margin-left: -70px;
		padding: 5px 0;
		background-color: #ffffff;
		border-radius: 2px;
		box-shadow: 1px 1px 2px #cccccc;
		z-index: 50;
	}
	
	.proper-icon {
		width: 16px;
		height: 16px;
	}	
</style>
