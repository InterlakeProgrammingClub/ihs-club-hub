<svelte:head>
    <title>IHS Club Hub</title>
	<meta name="description" content='The one and only official site to find clubs at Interlake High School!' />
</svelte:head>

<script>
    import { clubs } from '$lib/clubs.js';
</script>

<main>

    <h1>Interlake Club Hub</h1>
    <p>The one and only official site to find clubs at Interlake High School!</p>
    <p>Brought to you by the Interlake Programming Club.</p>
    <br>
    <h2>Sponsored Clubs</h2>
    {#each $clubs as club, i}
        {#if club.sponsored}
            <a href="/{club.id}" class="club" title="{club.name}">
                {club.name}
            </a>
        {/if}
    {/each}
    <br>
    <h2>Other Clubs</h2>
    {#each $clubs as club, i}
        {#if (!club.sponsored)}
            <a href="/{club.id}" class="club" title="{club.name}">
                {club.name}
            </a>
        {/if}
    {/each}
</main>


<style>
    main {
        
    }
</style>