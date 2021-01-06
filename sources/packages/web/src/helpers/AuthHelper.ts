import Keycloak from "keycloak-js"
import store from "../store/index"

const keycloak = Keycloak({
  url: "https://dev.oidc.gov.bc.ca/auth/",
  realm: "jxoe2o46",
  clientId: "AEST-SIMS"
});

keycloak.init({ onLoad: "check-sso", responseMode: "query", checkLoginIframe: false })
    .then(() => {
        if(keycloak.authenticated){
            store.dispatch("auth/login");
        }
        else {
            store.dispatch("auth/logout");
        }

        console.log("init -> then");
        console.log(keycloak.authenticated);
        console.log(keycloak.realm);
        console.log(keycloak.realmAccess);
        console.log(keycloak);
    })
    .catch(() => {
        console.log("init -> catch");
        console.log(keycloak.authenticated);
        console.log(keycloak.realm);
        console.log(keycloak.realmAccess);
    });

export default keycloak;