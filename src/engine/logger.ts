import Pino from "pino";

export const JSGELogger = Pino({
    transport: {
        target: 'pino-pretty'
    }
});
