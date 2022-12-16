<script lang="ts">
	import { Card } from '@c/ui'
	// internal components
	import CreatePostBtn from './CreatePostBtn.svelte'
	import PostTypeBtn from './PostTypeBtn.svelte'
</script>

<Card extendStyle="w-[36rem]">
	<CreatePostBtn />
	<div class="flex py-3 gap-3">
		<PostTypeBtn type="photo" />
		<PostTypeBtn type="video" />
		<PostTypeBtn type="event" />
		<PostTypeBtn type="article" />
	</div>
</Card>
