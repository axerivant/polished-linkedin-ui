<script lang="ts">
	export let action: string
</script>

<div
	class="w-full flex justify-between items-center p-3 bg-500/20 rounded hover:brightness-125 transition-all cursor-pointer"
>
	<p class="text-sm opacity-60">{action}</p>
	<img class="h-4" src="/arrow.svg" alt="" />
</div>
