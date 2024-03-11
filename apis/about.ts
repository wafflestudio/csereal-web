import { AboutContent, Club, Direction, Facilities, FutureCareers } from '@/types/about';

import { getRequest } from '.';

export const getOverview = () => getRequest<AboutContent>('/about/overview');

export const getGreetings = () => getRequest<AboutContent>('/about/greetings');

export const getHistory = () => getRequest<AboutContent>('/about/history');

export const getFutureCareeres = () => getRequest<FutureCareers>('/about/future-careers');

export const getClubs = () => getRequest<Club[]>('/about/student-clubs');

export const getFacilities = () => getRequest<Facilities>('/about/facilities');

export const getContact = () => getRequest<AboutContent>('/about/contact');

export const getDirections = () => getRequest<Direction[]>('/about/directions');
