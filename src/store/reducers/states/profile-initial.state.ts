import { ProfileState } from '../types/profile-state.interface';

export const INITIAL_STATE: ProfileState = {
    profile: {
        name: '',
        repos_url: '',
        avatar_url: '',
    }
};