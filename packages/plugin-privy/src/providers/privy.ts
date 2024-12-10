import { PrivyClient } from "@privy-io/server-auth";
import { elizaLogger, IAgentRuntime, Memory, Provider } from "@ai16z/eliza";

export class PrivyProvider {
    client: PrivyClient;
    runtime: IAgentRuntime;

    constructor(runtime: IAgentRuntime) {
        const privyAppId = runtime.getSetting("PRIVY_APP_ID");
        if (!privyAppId) throw new Error("PRIVY_APP_ID not configured");
        const privyAppSecret = runtime.getSetting("PRIVY_APP_SECRET");
        if (!privyAppSecret) throw new Error("PRIVY_APP_SECRET not configured");

        this.runtime = runtime;

        const createClient = () => {
            return new PrivyClient(privyAppId, privyAppSecret);
        };

        this.client = createClient();
    }
}

export const privyProvider: Provider = {
    get: async (runtime: IAgentRuntime, _message: Memory) => {
        if (
            !runtime.getSetting("PRIVY_APP_ID") ||
            !runtime.getSetting("PRIVY_APP_SECRET")
        ) {
            return null;
        }
        try {
            const privyProvider = new PrivyProvider(runtime);
            return privyProvider;
        } catch (error) {
            elizaLogger.error("Error in tradeProvider:", error);
            return [];
        }
    },
};
