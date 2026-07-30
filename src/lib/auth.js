import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const globalForMongo = global;
if (!globalForMongo._mongoClient) {
  globalForMongo._mongoClient = new MongoClient(process.env.MONGODB_URI);
}
const client = globalForMongo._mongoClient;

// Dynamically resolve base URL to support local development and Vercel production
const getBaseURL = () => {
  let url = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL;
  if (!url && process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}`;
  }
  if (!url) {
    url = "http://localhost:3000";
  }
  // Ensure protocol prefix and strip trailing slash
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }
  return url.replace(/\/$/, "");
};

export const auth = betterAuth({
  database: mongodbAdapter(client.db("online_bookverse")),
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_key_for_development_12345",
  baseURL: getBaseURL(),
  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "https://online-book-borrowing-platform-ten.vercel.app",
    process.env.BETTER_AUTH_URL ? process.env.BETTER_AUTH_URL.replace(/\/$/, "") : "",
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
    process.env.NEXT_PUBLIC_APP_URL ? process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "") : "",
  ].filter(Boolean),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});
