<script lang="ts">
	import SearchBox from './SearchBox.svelte'
	import Logo from './Logo.svelte'
	import Nav from './nav/Nav.svelte'
</script>

<div class="bg-700 flex justify-between px-96 h-20 items-center">
	<div class="flex items-center gap-3">
		<Logo />
		<SearchBox />
	</div>
	<div class="flex">
		<Nav />
		<div>profile</div>
	</div>
</div>
