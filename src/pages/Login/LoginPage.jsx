import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";

const LoginPage = () => {
  return (
    <main className="grid min-h-screen bg-canvas font-body text-text-primary lg:grid-cols-[55%_45%]">
      <section className="hidden lg:block ">
        <LeftPanel />
      </section>
      <RightPanel />
    </main>
  );
};

export default LoginPage;
