<script lang="ts">
	import { Card, Label } from '@c/ui'
	import ProfileImage from './ProfileImage.svelte'
	import SuggestedAction from './SuggestedAction.svelte'

	const userDisplayName = 'Axer Ivant'
</script>

<Card extendStyle="w-72 p-0 flex flex-col items-center">
	<ProfileImage />
	<div
		class="p-3 w-full mt-8 flex flex-col gap-6 justify-center"
	>
		<!-- greeting /-->
		<p class="font-semibold text-lg text-center">
			Hello, {userDisplayName}
		</p>
		<!-- suggested /-->
		<div class="flex flex-col gap-2">
			<Label>suggested</Label>
			<SuggestedAction
				action="Add a profile picture"
			/>
			<SuggestedAction action="Add a bio" />
			<SuggestedAction action="Grow your network" />
		</div>
	</div>
</Card>
