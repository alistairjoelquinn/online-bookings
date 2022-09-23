import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: { label: 'Password', type: 'password', placeholder: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.password) return null;
        if (credentials.password === process.env.NEXT_AUTH_PASSWORD) {
          return {
            name: 'logged in user',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/bookings',
  },
  secret: process.env.NEXT_AUTH_SECRET,
  debug: true,
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
});
