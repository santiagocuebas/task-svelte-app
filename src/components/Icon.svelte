<script>
	export let id;
	export let iconFunction;
	export let className;
	export let innerText;
</script>


<li on:mousedown={() => iconFunction(id)}>
	<i class={className}></i>
	<p>
		{innerText}
	</p>
</li>


<style>
	li {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 3px 10px;
		gap: 10px;
	}
	
	li:hover {
		background-color: #dddddd;
	}
	
	i {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		font-size: 20px;
	}
	
	p {
		display: flex;
		align-items: center;
		font-size: 20px;
	}
</style>
