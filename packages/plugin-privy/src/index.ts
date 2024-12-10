import { Plugin } from "@ai16z/eliza";
import { getWalletForTwitter } from "./actions/twitterWallet";
import { privyProvider } from "./providers/privy";

export const privyPlugin: Plugin = {
    name: "privy",
    description: "Privy Plugin for Eliza",
    actions: [getWalletForTwitter],
    providers: [privyProvider],
};

export default privyPlugin;
