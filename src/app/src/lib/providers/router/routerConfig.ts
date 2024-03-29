import { AppRoutes } from "@utils/types";

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.DEFAULT]: '/',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.SHELL]: '/shell'
}