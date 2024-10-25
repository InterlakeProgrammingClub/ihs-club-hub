<script>
	export let data;
</script>

<svelte:head>
	<title>{data.verified_club.name} - IHS Club Hub</title>
	<meta name="description" content={data.verified_club.info.hook} />
</svelte:head>

<h1>{data.verified_club.name}</h1>
<p>Meets {data.verified_club.day}s in {data.verified_club.room} from {data.verified_club.start_time} to {data.verified_club.end_time}.</p>

