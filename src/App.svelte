<script>
	import Task from './components/Task.svelte';
	import TaskInput from './components/TaskInput.svelte';
	import Button from './components/Button.svelte';
	import Icon from './components/Icon.svelte';
	import MessageError from './components/Message.svelte';
	import MessageAlert from './components/Alert.svelte';
	import { randomId } from './helpers/randomId.js';

	let output = '';
	let tasks = [];
	let message = false;
	let alert = false;
	let taskId = false;

	const addTask = async (value) => {
		if (output && value === 'Accept') {
			const task = {
				id: randomId(),
				text: output,
				see: false,
				option: false,
				complete: false,
				edit: false
			};

			tasks = [task, ...tasks];
		}

		output = '';
	};
	
	const deleteTask = id => {
    const task = tasks.filter(task => task.id === id);

    if (task[0].option === true) {
			message = true;
		} else if (task[0].complete === false) {
			alert = true;
			taskId = id;
    } else if (task[0].complete === true) {
			tasks = tasks.filter(task => task.id !== id);
		}
	};

	const selectImportant = id => {
    const reloadTasks = tasks.map(task => {
      if (task.id === id) {
        task.option = !task.option;
        task.complete = false;
      }
      return task;
    });

		tasks = reloadTasks;
  };

	const markComplete = id => {
		const reloadTasks = tasks.map(task => {
			if (task.id === id) {
				task.complete = !task.complete;
				task.option = false;
			}
			return task;
		});

		tasks = reloadTasks;
	};

	const textEdit = id => {
    const reloadTasks = tasks.map(task => {
      if (task.id === id) {
        task.edit = !task.edit;
      }
      return task;
    });

		tasks = reloadTasks;
  };
</script>

<div class='App'>
	{#if message}
		<MessageError bind:message={message} />
	{/if}
	{#if alert}
		<MessageAlert
			bind:alert={alert}
			bind:tasks={tasks}
			id={taskId}
		/>
	{/if}
	<div class='container-logo'>
		<img
			class='logo'
			src='./freeCodeCampLogo.jpg'
			alt='Logo'
		/>
	</div>
	<div class='main-container'>
		<TaskInput bind:output={output}>
			<Button text='Accept' addTask={addTask} />
			<Button text='Cancel' addTask={addTask} />
		</TaskInput>
		<div class='container-task'>
			{#each tasks as task (task.id)}
				<Task {...task} bind:tasks={tasks} textEdit={textEdit}>
					<Icon
						id={task.id}
						iconFunction={textEdit}
						className='fa-solid fa-pen proper-icon-child'
						innerText='Edit'
					/>
					<Icon
						id={task.id}
						iconFunction={markComplete}
						className='fa-regular fa-circle-check proper-icon-child'
						innerText='Check'
					/>
					<Icon
						id={task.id}
						iconFunction={selectImportant}
						className='fa-solid fa-circle-exclamation proper-icon-child'
						innerText='Important'
					/>
					<Icon
						id={task.id}
						iconFunction={deleteTask}
						className='fa-regular fa-trash-can proper-icon-child'
						innerText='Delete'
					/>
				</Task>
			{/each}
		</div>
	</div>
</div>

<style>
	:global(*) {
		font-size: 18px;
	}
	
	:global(body) {
		background-color: #000000;
	}
	
	.App {
		display: grid;
		grid-auto-rows: min-content;
		align-items: flex-start;
		justify-content: center;
		min-height: fit-content;
		font-family: Lato, sans-serif;
	}
	
	.container-logo {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px
	}
	
	.logo {
		height: 50px;
	}
	
	.container-task {
		display: grid;
		grid-template-columns: 1fr;
		align-content: flex-start;
		min-width: 500px;
		width: 60%;
		min-height: 500px;
		margin: 0 auto;
		margin-top: 20px;
		padding: 10px 20px;
		border-radius: 7px;
		background-color: #f3f2b8;
		row-gap: 10px;
		overflow-wrap: anywhere;
	}  
</style>
