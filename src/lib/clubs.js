import { persisted } from 'svelte-persisted-store';
export const clubs = persisted('presets', [
	{
		name: 'Programming Club',
        id: 'programming-club',
        //for image use {id}.png and put in icon folder
        categories: ['stem', 'competition', 'creativity'],
        sponsored: true,
        color: '#ffffff',
		room: 'Room 1809',
        day: 'Thursday',
        start_time: '3:30 PM',
        end_time: '4:15 PM',
        advisor: 'Mr. Peterson',
        officers: '',
        email: '',
		volunteer_hours: false,
        food: true,
        drinks: false,
        info: {
            hook: 'A club for casual and die-hard programmers alike',
            description: '',
        },
        special_notice: {
            title: '',
            subtitle: '',
            content: '',
        },
        links: {
            website: '',
            other_links: [],
        }
	},
	{
		name: 'Korean Culture Club',
        id: 'korean-culture-club',
        categories: ['culture'],
        sponsored: true,
        color: '#ffffff',
		room: 'Portable 1',
        day: 'Monday',
        start_time: '3:30 PM',
        end_time: '4:00 PM',
        advisor: 'Mr. Kessler',
        officers: 'Inue Kang',
        email: '',
		volunteer_hours: false,
        food: true,
        drinks: true,
        info: {
            hook: '',
            description: '',
        },
        special_notice: {
            title: '',
            subtitle: '',
            content: '',
        },
        links: {
            website: '',
            other_links: [],
        }
	},
    {
		name: 'Ping-Pong Club',
        id: 'ping-pong-club',
        categories: ['sports', 'competition'],
        sponsored: false,
        color: '#ffffff',
		room: 'Upper Gym',
        day: 'Wednesday',
        start_time: '1:00 PM',
        end_time: '1:45 PM',
        advisor: '',
        officers: '',
        email: '',
		volunteer_hours: false,
        food: false,
        drinks: false,
        info: {
            hook: '',
            description: '',
        },
        special_notice: {
            title: '',
            subtitle: '',
            content: '',
        },
        links: {
            website: '',
            other_links: [],
        }
	},
]);
