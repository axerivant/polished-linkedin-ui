<script lang="ts">
	export let name: string
	export let icon: string
	export let isCurrent: boolean

	const getActiveIcon = (icon: string) => {
		return icon.replace('.svg', '') + '-active.svg'
	}
	$: iconToUse = isCurrent ? getActiveIcon(icon) : icon
</script>

<div class="cursor-pointer hover:brightness-125 transition-all">
	<div class="flex flex-col items-center gap-1">
		<img src={iconToUse} alt="" />
		<p
			class="uppercase text-xs tracking-wider text-500 font-semibold {isCurrent &&
				'text-100'}"
		>
			{name}
		</p>
	</div>

	{#if isCurrent}
		<div class="bg-100 h-1 w-10 mt-2 rounded absolute" />
	{/if}
</div>
