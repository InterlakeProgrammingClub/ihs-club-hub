<svelte:head>
    <title>Search - IHS Club Hub</title>
	<meta name="description" content='The one and only official site to find clubs at Interlake High School!' />
</svelte:head>

<script>
    import { page } from '$app/stores';
    import { clubs } from '$lib/clubs.js';
    import { goto } from "$app/navigation";
    import IconStar from 'phosphor-svelte/lib/StarFour';
	import { HourglassSimple } from 'phosphor-svelte';

    let query = $page.url.searchParams.get('q');

    /**
	 * @type {boolean}
	 */
    let competitionCheck = false;
    /**
	 * @type {boolean}
	 */
     let creativityCheck = false;
     /**
	 * @type {boolean}
	 */
    let cultureCheck = false;
    /**
	 * @type {boolean}
	 */
     let sportsCheck = false;
    /**
	 * @type {boolean}
	 */
     let stemCheck = false;
    /**
	 * @type {boolean}
	 */
     let volunteerCheck = false;

    /**
	 * @type {boolean}
	 */
     let mondayCheck = false;
    /**
	 * @type {boolean}
	 */
     let tuesdayCheck = false;
    /**
	 * @type {boolean}
	 */
     let wednesdayCheck = false;
    /**
	 * @type {boolean}
	 */
     let thursdayCheck = false;
    /**
	 * @type {boolean}
	 */
     let fridayCheck = false;
    
    /**
	 * @type {boolean}
	 */
     let hourCheck = false;
    /**
	 * @type {boolean}
	 */
     let foodCheck = false;
    /**
	 * @type {boolean}
	 */
     let drinkCheck = false;

    /**
	 * @type {string[]}
	 */
    let filterList = [];

    /**
	 * @type {any[]}
	 */
    let filteredClubs = [];
    
    /*function searchAdvanced() {
        goto('/bap').then(
            () => goto(`/search?q=${searchTerm}`)
        );
    }*/
    
    // @ts-ignore
    function refresh(event) {
        const element = event.target;
        
        if (element.id.includes('competition')){
            competitionCheck = !competitionCheck;
        }
        if (element.id.includes('creativity')){
            creativityCheck = !creativityCheck;
        }
        if (element.id.includes('culture')){
            cultureCheck = !cultureCheck;
        }
        if (element.id.includes('sports')){
            sportsCheck = !sportsCheck;
        }
        if (element.id.includes('stem')){
            stemCheck = !stemCheck;
        }
        if (element.id.includes('volunteer')){
            volunteerCheck = !volunteerCheck;
        }
        if (element.id.includes('monday')){
            mondayCheck = !mondayCheck;
        }
        if (element.id.includes('tuesday')){
            tuesdayCheck = !tuesdayCheck;
        }
        if (element.id.includes('wednesday')){
            wednesdayCheck = !wednesdayCheck;
        }
        if (element.id.includes('thursday')){
            thursdayCheck = !thursdayCheck;
        }
        if (element.id.includes('friday')){
            fridayCheck = !fridayCheck;
        }
        if (element.id.includes('hours')){
            hourCheck = !hourCheck;
        }
        if (element.id.includes('food')){
            foodCheck = !foodCheck;
        }
        if (element.id.includes('drinks')){
            drinkCheck = !drinkCheck;
        }
        

        filterList = [];
        filteredClubs = [];
        if (competitionCheck) {
            filterList.push('competition');
        }
        if (creativityCheck) {
            filterList.push('creativity');
        }
        if (cultureCheck) {
            filterList.push('culture');
        }
        if (sportsCheck) {
            filterList.push('sports');
        }
        if (stemCheck) {
            filterList.push('stem');
        }
        if (volunteerCheck) {
            filterList.push('volunteer')
        }
        if (mondayCheck) {
            filterList.push('Monday');
        }
        if (tuesdayCheck) {
            filterList.push('Tuesday');
        }
        if (wednesdayCheck) {
            filterList.push('Wednesday');
        }
        if (thursdayCheck) {
            filterList.push('Thursday');
        }
        if (fridayCheck) {
            filterList.push('Friday')
        }
        if (hourCheck) {
            filterList.push('hours')
        }
        if (foodCheck) {
            filterList.push('food')
        }
        if (drinkCheck) {
            filterList.push('drinks')
        }

        $clubs.forEach((club) => {
            for (let i = 0; i < filterList.length; i++) {
                if (club.categories.includes(filterList[i]) || club.day.includes(filterList[i])) {
                    if (!filteredClubs.includes(club.id)) {
                        filteredClubs.push(club.id);
                    }
                } else if (filterList[i].includes('hours') && club.volunteer_hours) {
                    if (!filteredClubs.includes(club.id)) {
                        filteredClubs.push(club.id);
                    }
                } else if (filterList[i].includes('food') && club.food) {
                    if (!filteredClubs.includes(club.id)) {
                        filteredClubs.push(club.id);
                    }
                } else if (filterList[i].includes('drinks') && club.drinks) {
                    if (!filteredClubs.includes(club.id)) {
                        filteredClubs.push(club.id);
                    }
                }
            }
        });
        console.log(filteredClubs)
    }

</script>

<div class="main">
    <div class="filter-container">
        <fieldset>
            <div class="categories">
                <legend>Select categories:</legend>
                <input type="checkbox" name="competition" id="competition" value="competition" bind:checked={competitionCheck} on:click={refresh}/><label for="competition">Competition</label><br />
                <input type="checkbox" name="creativity" id="creativity" value="creativity" bind:checked={creativityCheck} on:click={refresh}  /><label for="creativity">Creativity</label><br />
                <input type="checkbox" name="culture" id="culture" value="culture" bind:checked={cultureCheck} on:click={refresh} /><label for="culture">Culture</label><br />
                <input type="checkbox" name="sports" id="sports" value="sports" bind:checked={sportsCheck} on:click={refresh} /><label for="sports">Sports</label><br />
                <input type="checkbox" name="stem" id="stem" value="stem" bind:checked={stemCheck} on:click={refresh} /><label for="stem">STEM</label><br />
                <input type="checkbox" name="volunteer" id="volunteer" value="volunteer" bind:checked={volunteerCheck} on:click={refresh} /><label for="volunteer">Volunteer</label><br />
            </div>
        </fieldset>
        <fieldset>
            <div class="weekdays">
                <legend>Select days:</legend>
                <input type="checkbox" name="monday" id="monday" value="monday" bind:checked={mondayCheck} on:click={refresh} /><label for="monday">Monday</label><br />
                <input type="checkbox" name="tuesday" id="tuesday" value="tuesday" bind:checked={tuesdayCheck} on:click={refresh}  /><label for="tuesday">Tuesday</label><br />
                <input type="checkbox" name="wednesday" id="wednesday" value="wednesday" bind:checked={wednesdayCheck} on:click={refresh} /><label for="wednesday">Wednesday</label><br />
                <input type="checkbox" name="thursday" id="thursday" value="thursday" bind:checked={thursdayCheck} on:click={refresh} /><label for="thursday">Thursday</label><br />
                <input type="checkbox" name="friday" id="friday" value="friday" bind:checked={fridayCheck} on:click={refresh} /><label for="friday">Friday</label><br />
            </div>
        </fieldset>
        <fieldset>
            <div class="other">
                <legend>Other options:</legend>
                <input type="checkbox" name="hours" id="hours" value="hours" bind:checked={hourCheck} on:click={refresh} /><label for="hours">Volunteer Hours</label><br />
                <input type="checkbox" name="food" id="food" value="food" bind:checked={foodCheck} on:click={refresh}  /><label for="food">Food</label><br />
                <input type="checkbox" name="drinks" id="drinks" value="drinks" bind:checked={drinkCheck} on:click={refresh} /><label for="drinks">Drinks</label><br />
            </div>
        </fieldset>
    </div>
    <div class="block">
        <p>You shouldn't see this lol</p>
    </div>
    <div class="content">
        <h1>Search Results</h1>
        <div class="search-results">
            {#if query && !query.includes('undefined')}
                {#each $clubs as club, i}
                    {#if club.id.includes(query.toLowerCase()) && club.sponsored}
                        {#if filterList.length > 0}
                            {#each filteredClubs as fclub, j}
                                {#if club.id.includes(fclub)}
                                    <a href="/{club.id}" class="club" id='result' title="{club.name}">
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
                        {:else}
                            <a href="/{club.id}" class="club" id='result' title="{club.name}">
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
                    {/if}
                {/each}
                {#each $clubs as club, i}
                    {#if club.id.includes(query.toLowerCase()) && !club.sponsored}
                        {#if filterList.length > 0}
                            {#each filteredClubs as fclub, j}
                                {#if club.id.includes(fclub)}
                                    <a href="/{club.id}" class="club" id='result' title="{club.name}">
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
                                        </div>
                                    </a>
                                {/if}
                            {/each}
                        {:else}
                            <a href="/{club.id}" class="club" id='result' title="{club.name}">
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
                                </div>
                            </a>
                        {/if}
                    {/if}
                {/each}
            {:else}
                {#each $clubs as club, i}
                    {#if club.sponsored}
                        {#if filterList.length > 0}
                            {#each filteredClubs as fclub, j}
                                {#if club.id.includes(fclub)}
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
                        {:else}
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
                    {/if}
                {/each}
                {#each $clubs as club, i}
                    {#if !club.sponsored}
                        {#if filterList.length > 0}
                            {#each filteredClubs as fclub, j}
                                {#if club.id.includes(fclub)}
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
                                        </div>
                                    </a>
                                {/if}
                            {/each}
                        {:else}
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
                                </div>
                            </a>
                        {/if}
                    {/if}
                {/each}
            {/if}
        </div>
        <br />
    </div>
    
</div>


<style>
    fieldset {
        text-align: left;
    }
    .main {
        display: flex;
    }
    .filter-container {
        position:fixed;
        background-color: rgb(80, 91, 110);
        box-sizing: border-box;
        bottom: 0rem;
        left: 0rem;
        width: 20%;
        top: 3rem;
    }
    .block {
        flex: 20%;
    }
    .content {
        flex: 80%;
        padding-left: 1rem;
    }
    .search-results {
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