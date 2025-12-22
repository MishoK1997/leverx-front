import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "grid" | "list";

interface ViewContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

/**
 * This context with simple custom hook allows to handle grid and list view
 */

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <ViewContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error(
      "useViewMode must be used within a ViewProvider!!!!!!! just reminder",
    );
  }
  return context;
}
