import {
   accessTokenCustomClaims,
   onUserTokenGeneratedEvent,
   WorkflowSettings,
   WorkflowTrigger,

} from "@kinde/infrastructure";

export const workflowSettings: WorkflowSettings = {
   id: "userTokenGeneration",
   name: "Access token custom claims",
   failurePolicy: {
      action: "stop",
   },
   trigger: WorkflowTrigger.UserTokenGeneration,
   bindings: {
      "kinde.idToken": {}, // required to modify ID token claims
      "kinde.accessToken": {}, // required to modify access token claims
      url: {}, // required for url params
   },
};

export default async function handleUserTokens(event: onUserTokenGeneratedEvent) {

   const accessToken = accessTokenCustomClaims<{
      companyName: string;
   }>();

   accessToken.companyName = "Kinde";
};