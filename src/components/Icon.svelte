<script>
	export let id;
	export let iconFunction;
	export let className;
	export let innerText;
</script>


<div class='icon-child' on:mousedown={() => iconFunction(id)}>
	<i class={className}></i>
	<div class="icon-text">
		{innerText}
	</div>
</div>


<style>
	
	.icon-child {
		display: flex;
		width: 100%;
		padding: 3px 6px;
		gap: 5px;
	}
	
	.icon-child:hover {
		background-color: #dddddd;
	}
	
	.proper-icon-child {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
	}
	
	.icon-text {
		display: flex;
		align-items: center;
		font-size: 24px;
	}
</style>
