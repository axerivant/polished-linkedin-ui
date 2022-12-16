<script lang="ts">
	export let type: string

	const colors: any = {
		photo: '#80B3F3',
		video: '#8EBF6A',
		event: '#DDA652',
		article: '#E89C83'
	}

	let iconSrc = '/' + type + '.svg'
	let color: any = colors[type]
</script>

<button
	class="flex justify-center items-center gap-1 p-3 bg-600 hover:brightness-125 cursor-pointer transition-all rounded"
>
	<img src={iconSrc} />
	<p
		class="uppercase text-xs font-semibold tracking-wider"
		style:color
	>
		{type}
	</p>
</button>
