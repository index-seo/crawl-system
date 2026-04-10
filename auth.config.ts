import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname === '/';
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // লগইন না থাকলে লগইন পেজে পাঠাবে
      }
      return true;
    },
