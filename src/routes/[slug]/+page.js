import { clubs } from '$lib/clubs.js';
import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';

export const ssr = false;
export const prerender = false;

export async function load({ params }) {
	const { slug } = params;
	const clubList = get(clubs);
	const verified_club = clubList.find((club) => club.id === slug);

	if (verified_club) {
		return { verified_club };
	}

	throw error(404, 'Club not found');
}
