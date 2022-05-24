const SUPABASE_URL = 'https://pkhqeamibgddnonpbkxj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraHFlYW1pYmdkZG5vbnBia3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTg0OTAsImV4cCI6MTk2Nzg3NDQ5MH0.1eWFqsiEyUcJk0zKbtjDhgy3edUHWCLvimGYjE0WG-M';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');

    return checkError(response);
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function deleteParticipant(id) {
    const response = await client.from('participants').delete().eq('id', id);
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
