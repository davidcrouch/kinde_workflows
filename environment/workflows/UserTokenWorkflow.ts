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
      "kinde.accessToken": {}
   },
};

export default async function handleUserTokens(event: onUserTokenGeneratedEvent) {

   const accessToken = accessTokenCustomClaims<{
      account_id: string;
      application_id: string;
   }>();

   accessToken.account_id = "123";
   accessToken.application_id = "456";
};