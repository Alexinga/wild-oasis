import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
export function useSettingsFetch() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
