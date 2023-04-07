<script>
	import { clickOutside } from "../helpers/click-outside";

	export let task;
	export let tasks;
	export let textEdit;

	const changeSee = () => {
    tasks = tasks.map(item => {
      if (item.id === task.id) {
        item.see = !item.see;
      } else item.see = false;
			
      return item;
    });
  };
</script>

<div class='box-task'>
	<div
		class={`text-task ${task.option ? 'important-task' : ''} ${task.complete ? 'complete-task' : ''}`.trim()}
		contentEditable={task.edit}
	>
		{task.text}
	</div>
	<div class="box-icons">
		{#if task.edit}
		<div class="icon-task" on:mousedown={() => {textEdit(task.id); changeSee}}>
			<i class='fa-regular fa-square-check'></i>
		</div>
		{:else}
		<div
			class="icon-task"
			use:clickOutside
			on:outclick={() => task.see = false}
			on:mousedown={changeSee}
		>
			{#if task.see}
			<ul>
				<slot></slot>
			</ul>
			{/if}
			<i class='fa-solid fa-grip-vertical'></i>
		</div>
		{/if}
	</div>
</div>

<style>
	.box-task {
		display: flex;
		position: relative;
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

	ul {
		position: absolute;
		width: 150px;
		height: min-content;
		right: 0;
		margin: 20px -10px 0 0;
		padding: 5px 0;
		background-color: #ffffff;
		border-radius: 2px;
		box-shadow: 0 0 5px #aaaaaa;
		z-index: 250;
	}
	
	i {
		width: 16px;
		height: 16px;
	}	
</style>
