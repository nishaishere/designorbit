// src/services/api.js
// Central API service — all backend calls go through here

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ── Generic fetch wrapper ─────────────────────────────────
async function request(endpoint, options = {}) {
  const token = localStorage.getItem('do_admin_token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }

  return data;
}

// ── Contact ───────────────────────────────────────────────
export const contactAPI = {
  submit: (payload) =>
    request('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};

// ── Newsletter Subscribe ──────────────────────────────────
export const subscribeAPI = {
  subscribe: (email) =>
    request('/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
  unsubscribe: (email) =>
    request(`/subscribe/unsubscribe?email=${encodeURIComponent(email)}`),
};

// ── Projects (public) ─────────────────────────────────────
export const projectsAPI = {
  getAll: () => request('/projects'),
  getOne: (id) => request(`/projects/${id}`),
};

// ── Auth (admin) ──────────────────────────────────────────
export const authAPI = {
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  getMe: () => request('/auth/me'),
};

export default request;
