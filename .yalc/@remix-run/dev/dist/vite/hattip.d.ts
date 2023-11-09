import { type ServerBuild } from "@remix-run/node";
import { type HattipHandler } from "@hattip/core";
export declare const createHattipHandler: (build: ServerBuild, { mode, criticalCss, }: {
    mode?: string | undefined;
    criticalCss?: string | undefined;
}) => HattipHandler;
