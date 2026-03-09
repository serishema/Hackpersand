<script setup lang="ts">
import { IonContent, 
         IonList, 
         IonPage, 
         IonIcon,  
         IonFab, 
         IonFabButton, 
         IonItem,  
         useIonRouter,
         IonRadio,
         IonRadioGroup } from "@ionic/vue";
//import { appConfig } from "../../lib/config";
import ArrowMD from "@material-symbols/svg-600/outlined/arrow_forward.svg";
import { appConfig } from "../../lib/config";

// @ts-ignore
const router = useIonRouter();

var location = "appdata";

async function selectedValueChanged(evt: { detail: { value: string; }; }) {
    location = evt.detail.value;
}

async function save() {
    if (location === "appdata") {
        appConfig.datastorageLocation.type = "appdata";
        appConfig.datastorageLocation.storageUri = null;
        router.replace('/onboarding/import');
    } else if (location === "selectedfolder") {
        appConfig.datastorageLocation.type = "selectedfolder";
        appConfig.datastorageLocation.storageUri = null;
        router.replace('/onboarding/selectfolder');
    } else {
        /* defaults set in lib/config/index.ts will handle this situation */
        console.log("Onboarding screen: no location was selected!");
    }
}

</script>

<template>
    <IonPage>
        <IonContent>
            <div class="container">
                <h1> {{ $t('onboarding:dataLocationScreen.header') }}</h1>

                <IonList>
                    <IonRadioGroup value="appdata" @ion-change="selectedValueChanged">
                     <IonItem>
                     <IonRadio color="primary" label-placement="end" value="appdata" justify="start"><h5>{{ $t('onboarding:dataLocationScreen.optionTextAppData')}}</h5><p>{{ $t("onboarding:dataLocationScreen.optionTextAppDataDetail") }}</p></IonRadio><br/>
                     </IonItem>
                     <IonItem>
                     <IonRadio color="primary" label-placement="end" value="selectedfolder" justify="start"> <h5>{{  $t('onboarding:dataLocationScreen.optionTextExternalFolder') }}</h5> <p>{{ $t("onboarding:dataLocationScreen.optionTextExtternalFolderDetail") }} </p></IonRadio><br />
                    </IonItem> 
                    </IonRadioGroup>
                </IonList>
            </div>

            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton @click="save">
                    <IonIcon :icon="ArrowMD" />
                </IonFabButton>
            </IonFab>
        </IonContent>
    </IonPage>
</template>

<style scoped>
.container {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
}

h1 {
    text-align: center;
}

ion-item {
    justify-content: left;
    padding-bottom: 25px;
    text-align: left;
}

 ion-list {
    width: 90%;
  }

  ion-radio.wrapped::part(label) {
    white-space: normal;
  }

</style>
