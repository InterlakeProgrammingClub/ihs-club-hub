<script>
	import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    import { invalidate } from '$app/navigation';

    /**
	 * @type {any}
	 */
    let searchTerm;

    function search() {
        goto('/bap').then(
            () => goto(`/search?q=${searchTerm}`)
        );
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<div class="app">
    <div class="topnav">
        <div class="left">
            <a class="active" href="/">IHS Club Hub</a>
        </div>
        <div class="center">
            <div class="search-container">
                <form on:submit|preventDefault={() => search()}>
                    <input type="text" placeholder="Search for clubs..." name="q" bind:value={searchTerm}>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        <div class="right">
            <a class="side" href="/about">About</a>
            <a class="side" href="/settings">Settings</a>
        </div>
    </div>
    <div class="content">
        <slot />
    </div>
    
</div>

<style>
    /* Add a black background color to the top navigation bar */
    .topnav {
    overflow: hidden;
    background-color: #e9e9e9;
    display: flex;
    }
    .left{
        flex: 25%;
    }
    .center{
        flex: 50%;
    }
    .right{
        flex:25%;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
    /*float: right;*/
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    }

    /* Change the color of links on hover */
    .topnav a:hover {
    background-color: #ddd;
    color: black;
    }

    /* Style the "active" element to highlight the current page */
    .topnav a.active {
    background-color: #2196F3;
    color: white;
    float: left;
    }

    /* Style the search box inside the navigation bar */
    .topnav .search-container {
        align-items: center;
        text-align: center;
    }
    .topnav input[type='text'] {
        margin-top: .5rem;
        padding: 6px;
        border: none;
        width: 40rem;
        font-size: 17px;
    }
    .topnav .search-container button[type="submit"] {
        outline: none;
        position: absolute;
        top: .5rem;
        right: 27.6rem;
        padding: 6px 10px;
        background: hsla(0, 0%, 87%, 0);
        font-size: 17px;
        border: none;
        cursor: pointer;
    }

    .topnav .side { 
        float: right;
    }

    .content {
        padding: 0rem 1rem;
        align-items: center;
        align-self: center;
        align-content: center;
        text-align: center;
    }
</style>