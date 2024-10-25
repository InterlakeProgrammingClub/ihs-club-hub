<svelte:head>
    <title>Search - IHS Club Hub</title>
	<meta name="description" content='The one and only official site to find clubs at Interlake High School!' />
</svelte:head>

<script>
    import { page } from '$app/stores';
    import { clubs } from '$lib/clubs.js';

    let query = $page.url.searchParams.get('q');

</script>

<h1>Search Results</h1>

{#each $clubs as club, i}
    {#if query}
        {#if club.id.includes(query.toLowerCase())}
            <a href="/{club.id}" class="club" title="{club.name}">
                {club.name}
            </a>
        {/if}
    {:else}
        <a href="/{club.id}" class="club" title="{club.name}">
            {club.name}
        </a>
    {/if}
{/each}