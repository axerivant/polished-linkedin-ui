<script lang="ts">
	export let name: string
	export let icon: string
	export let isCurrent: boolean

	const getActiveIcon = (icon: string) => {
		return icon.replace('.svg', '') + '-active.svg'
	}
	$: iconToUse = isCurrent ? getActiveIcon(icon) : icon
</script>

<div>
	<img src={iconToUse} alt="" />
</div>
