"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Use system theme as default, and resolvedTheme for current
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  console.log(resolvedTheme, theme)
  if (!resolvedTheme) return null

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div className="w-14 h-8 bg-muted rounded-full peer peer-checked:bg-primary transition-colors">
        <div
          className={`w-6 h-6 bg-background rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center translate-y-1 translate-x-1
          ${isDark ? "translate-x-7" : "translate-x-1"}`}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-primary" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-400" />
          )}
        </div>
      </div>
    </label>
  );
}
