<svelte:head>
    <title>IHS Club Hub</title>
	<meta name="description" content='The one and only official site to find clubs at Interlake High School!' />
</svelte:head>

<script>
    import { clubs } from '$lib/clubs.js';
    import IconStar from 'phosphor-svelte/lib/StarFour';
    import IconCheckSquare from 'phosphor-svelte/lib/CheckSquare';
</script>

<main>

    <h1>Interlake Club Hub</h1>
    <p>The one and only official site to find clubs at Interlake High School!</p>
    <p>Brought to you by the Interlake Programming Club.</p>
    <br>
    <h2>Sponsored Clubs</h2>
    <div class="sponsored">
        {#each $clubs as club, i}
            {#if club.sponsored}
                <a href="/{club.id}" class="club" title="{club.name}">
                    <div class="left">
                        <h3 class='highlighted'>{club.name}</h3>
                        <p>{club.day}s ~ {club.start_time} - {club.end_time} ~ {club.room}</p>
                        <p>
                            {#if club.volunteer_hours}
                                Volunteer Hours <IconCheckSquare />
                            {/if}
                            {#if club.food}
                                Food <IconCheckSquare />
                            {/if}
                            {#if club.drinks}
                                Drinks <IconCheckSquare />
                            {/if}
                        </p>
                        <p>{club.info.hook}</p>
                    </div>
                    <div class="smallbuttons">
                        <IconStar style="font-size: 1.5rem;" />
                    </div>
                </a>
            {/if}
        {/each}
    </div>
    <h2>Other Clubs</h2>
    <div class="regular">
        {#each $clubs as club, i}
            {#if (!club.sponsored)}
                <a href="/{club.id}" class="club" title="{club.name}">
                    <div class="left">
                        <h3 class='highlighted'>{club.name}</h3>
                        <p>{club.day}s ~ {club.start_time} - {club.end_time} ~ {club.room}</p>
                        <p>
                            {#if club.volunteer_hours}
                                Volunteer Hours Provided
                            {/if}
                            {#if club.food}
                                Food Provided
                            {/if}
                            {#if club.drinks}
                                Drinks Provided
                            {/if}
                        </p>
                        <p>{club.info.hook}</p>
                    </div>
                    <div class="smallbuttons">
                        <IconStar style="font-size: 1.5rem;" />
                    </div>
                </a>
            {/if}
        {/each}
    </div>
</main>


<style>
    .sponsored {
        display: grid;
		grid-template-columns: 32.25% 32.25% 32.25%;
		gap: 1rem;
	}
    .regular {
        display: grid;
		grid-template-columns: 32.25% 32.25% 32.25%;
		gap: 1rem;
	}
    .club {
        background-color: rgb(80, 91, 110);
        padding: 1.1rem;
		backdrop-filter: blur(6px);
		border-radius: 1rem;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: start;
		transition: 0.2s;

		h3 {
			margin: 0;
			font-size: 1.3rem;
			font-weight: 300;
		}
        .highlighted {
            font-weight: 600;
        }

		p {
			margin: 0.5rem 0 0 0;
		}

		button,
		.icon-button {
			padding: 0.7rem;
			backdrop-filter: none;
		}

		&.create {
			padding: 1rem;
			margin-top: 1rem;
			justify-content: center;
			align-items: center;
			font-size: 1.2rem;

			span {
				margin-left: 0.5rem;
			}
		}

		.left {
			margin-left: 0.3rem;
            text-align: left;
		}

		&:hover:not(:has(button:hover)) {
			background-color: var(--bg-3);
		}
    }
</style>