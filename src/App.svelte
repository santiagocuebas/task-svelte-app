<script>
	import Task from './components/Task.svelte';
	import TaskInput from './components/TaskInput.svelte';
	import Button from './components/Button.svelte';
	import Icon from './components/Icon.svelte';
	import MessageError from './components/Message.svelte';
	import MessageAlert from './components/Alert.svelte';
	import { randomId } from './helpers/random-id.js';

	let output = '';
	let tasks = [];
	let message = false;
	let alert = false;
	let taskId = false;

	const addTask = async value => {
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
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.option = !task.option;
        task.complete = false;
      }
      return task;
    });
  };

	const markComplete = id => {
		tasks = tasks.map(task => {
			if (task.id === id) {
				task.complete = !task.complete;
				task.option = false;
			}
			return task;
		});
	};

	const textEdit = id => {
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.edit = !task.edit;
      }
      return task;
    });
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
				<Task bind:task={task} bind:tasks={tasks} textEdit={textEdit}>
					<Icon
						id={task.id}
						iconFunction={textEdit}
						className='fa-solid fa-pen'
						innerText='Edit'
					/>
					<Icon
						id={task.id}
						iconFunction={markComplete}
						className='fa-regular fa-circle-check'
						innerText='Check'
					/>
					<Icon
						id={task.id}
						iconFunction={selectImportant}
						className='fa-solid fa-circle-exclamation'
						innerText='Important'
					/>
					<Icon
						id={task.id}
						iconFunction={deleteTask}
						className='fa-regular fa-trash-can'
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

	.main-container {
		width: 600px;
	}
	
	.container-task {
		display: grid;
		grid-template-columns: 1fr;
		align-content: flex-start;
		width: 100%;
		height: 600px;
		margin: 0 auto;
		margin-top: 20px;
		padding: 10px 20px;
		border-radius: 7px;
		background-color: #f3f2b8;
		overflow-y: auto;
		scrollbar-width: none;
		scrollbar-color: #dddddd #f3f2b8;
		overflow-wrap: anywhere;
		row-gap: 10px;
	}  
</style>
