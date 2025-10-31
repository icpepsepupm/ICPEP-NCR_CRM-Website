// Keep loader minimal to avoid runtime issues during app boot

function AppLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#89E9FF] border-t-transparent" />
        <span className="text-sm opacity-80">Loading…</span>
      </div>
    </div>
  );
}

export default AppLoader;
