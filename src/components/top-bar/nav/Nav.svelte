<script lang="ts">
	import { page } from '$app/stores'
	import NavItem from './NavItem.svelte'

	const NavItems = [
		{
			name: 'home',
			icon: '/home.svg'
		},
		{
			name: 'network',
			icon: '/network.svg'
		},
		{
			name: 'jobs',
			icon: '/jobs.svg'
		},
		{
			name: 'messaging',
			icon: '/messaging.svg'
		},
		{
			name: 'notifications',
			icon: '/notifications.svg'
		}
	]

	// utils
	let currentRoute = $page.route.id?.replace('/', '')
	const isCurrentRoute = (route: string): boolean => {
		return currentRoute === route
	}
</script>

<nav class="flex gap-12">
	{#each NavItems as { name, icon }}
		<NavItem {name} {icon} isCurrent={isCurrentRoute(name)} />
	{/each}
</nav>
