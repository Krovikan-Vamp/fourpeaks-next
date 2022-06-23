export interface UserInfo {
    "localId": string,
    "email": string,
    "passwordHash": string,
    "emailVerified": Boolean,
    "passwordUpdatedAt": number,
    "providerUserInfo": [
        {
            "providerId": string,
            "federatedId": string,
            "email": string,
            "rawId": string,
        }
    ],
    "validSince": string,
    "lastLoginAt": string,
    "createdAt": string,
    "lastRefreshAt": string
}
