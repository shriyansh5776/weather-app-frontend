import { Link } from "react-router-dom";
import React from "react";

const RegistrationPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-surface-1 px-6 py-8 lg:px-12 font-body text-text-primary">
      <div className="w-full max-w-[440px] flex flex-col gap-8">
        <header className="space-y-2 mb-8">
          <h1 className="font-display text-5xl font-bold tracking-tight text-text-primary">Create your Atlas account</h1>
          <p className="text-base leading-relaxed text-text-secondary">Free forever. Verify your email to save favorites.</p>
        </header>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary" 
            htmlFor="displayName">Display Name</label>
            <input className="w-full h-12 px-4 rounded-md border border-border-subtle bg-surface-2 text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-accent-cyan focus:outline-none"
            placeholder="Enter your display name"
              type="text"
              autoComplete="username"
              name="displayName"
              id="displayName"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary" htmlFor="email">Email</label>
            <input placeholder="Enter your email" className="w-full h-12 px-4 rounded-md border border-border-subtle bg-surface-2 text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-accent-cyan focus:outline-none"
              type="email"
              autoComplete="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm  text-text-secondary" htmlFor="password">Password</label>
            <div className="relative flex items-center">
              <input className="w-full h-12 px-4 rounded-md border border-border-subtle bg-surface-2 text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-accent-cyan focus:outline-none"
                type="password"
                autoComplete="new-password"
                name="password"
                id="password"
                required
                placeholder="Create a password"
              />
              <p className="text-xs font-medium text-success">Strong</p>
            </div>
            <ul className="list-inside list-disc space-y-1 text-xs text-text-tertiary">
              <li>At least 12 characters</li>
              <li>One number</li>
              <li>One symbol</li>
            </ul>
          </div>
          <div className="flex items-start gap-3">
            <input className="mt-1 h-4 w-4 rounded border-border-subtle accent-accent-cyan" type="checkbox" name="terms" id="terms" required />
            <label className="text-sm leading-relaxed text-text-secondary font-medium " htmlFor="terms">
              I agree to the <Link to="/terms" className="font-medium text-accent-cyan transition-colors hover:text-accent-cyan-soft">Terms</Link> and{" "}
              <Link className="font-medium text-accent-cyan transition-colors hover:text-accent-cyan-soft" to="/privacy-policy">Privacy Policy</Link>
            </label>
          </div>
          <button type="submit" className="w-full h-12 rounded-md bg-accent-cyan text-canvas font-semibold transition-colors hover:bg-accent-cyan-soft">Create account</button>
          <div>
            <div className="flex items-center gap-4">
              <hr className="flex-1 border-border-subtle" />
              <span className="text-sm text-text-tertiary">or continue</span>
              <hr className="flex-1 border-border-subtle" />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 w-full h-12 rounded-md border border-border-subtle bg-surface-2 font-medium text-text-primary transition-colors hover:bg-surface-3" type="button">Continue with Google</button>
              <button className="flex items-center justify-center gap-3 w-full h-12 rounded-md border border-border-subtle bg-surface-2 font-medium text-text-primary transition-colors hover:bg-surface-3" type="button">Continue with Apple</button>
            </div>
          </div>
          <footer className="pt-2 text-center">
            <p>
              Already have an account?{" "} <Link className="font-semibold text-accent-cyan transition-colors hover:text-accent-cyan-soft" to={"/login"}>Sign in</Link>
            </p>
          </footer>
        </form>
      </div>
    </main>
  );
};

export default RegistrationPage;
