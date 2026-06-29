import { Link } from "react-router-dom";
import { FaApple, FaGoogle } from "react-icons/fa6";

const RightPanel = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-surface-1 px-6 py-8 lg:px-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-display text-5xl font-bold tracking-tight text-text-primary">
            Welcome back
          </h1>

          <p className="mt-2 text-base text-text-secondary">
            Sign in to your account
          </p>
        </header>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-text-primary"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="Enter your email"
              required
              className="h-12 placeholder:px-2  rounded-md border border-border-subtle bg-surface-2  text-base text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-text-primary "
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-accent-cyan transition-colors duration-200 hover:text-accent-cyan-soft"
              >
                Forgot?
              </Link>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="h-12 placeholder:px-2 px-2 rounded-md border border-border-subtle bg-surface-2  text-base text-text-primary placeholder:text-text-tertiary transition-all duration-200 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
            />
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="mt-2  flex h-12 w-full items-center justify-center rounded-md text-accent-blue font-medium  transition-all duration-200 hover:scale-[1.01] hover:bg-accent-cyan-soft active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-accent-cyan/30"
          >
            Sign in
          </button>

          {/* Divider */}
          <div className="my-2 flex items-center gap-4">
            <hr className="flex-1 border-border-subtle" />
            <span className="text-sm text-text-tertiary">or continue</span>
            <hr className="flex-1 border-border-subtle" />
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex h-12 items-center justify-center gap-3 rounded-md border border-border-subtle bg-surface-2 font-medium text-text-primary transition-colors duration-200 hover:bg-surface-3"
            >
              <FaGoogle size={18} />
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="flex h-12 items-center justify-center gap-3 rounded-md border border-border-subtle bg-surface-2 font-medium text-text-primary transition-colors duration-200 hover:bg-surface-3"
            >
              <FaApple size={20} />
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Footer */}
          <footer className="pt-2 text-center">
            <p className="text-sm text-text-secondary">
              New here?{" "}
              <Link
                to="/register"
                className="font-medium text-accent-cyan transition-colors duration-200 hover:text-accent-cyan-soft"
              >
                Create account
              </Link>
            </p>
          </footer>
        </form>
      </div>
    </section>
  );
};

export default RightPanel;
