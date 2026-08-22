import { useEffect } from "react";

export function usePageTitle(fullTitle: string) {
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);
}
