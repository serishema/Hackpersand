<script setup lang="ts">
import {
    IonContent,
    IonList,
    IonPage,
    IonIcon,
    IonFab,
    IonFabButton,
    IonItem,
    useIonRouter,
    IonInput,
    IonButton
} from "@ionic/vue";
import { open } from '@tauri-apps/plugin-dialog';
import { type } from "@tauri-apps/plugin-os";
//import { appConfig } from "../../lib/config";
import ArrowMD from "@material-symbols/svg-600/outlined/arrow_forward.svg";
import { appConfig } from "../../lib/config";

import { AndroidFs, AndroidFsUri } from "tauri-plugin-android-fs-api";
import { ref } from "vue";


// @ts-ignore
const router = useIonRouter();
var uri = ref("");

async function select() {
    if (type() === "android") {
        let androidUri: AndroidFsUri | null = await AndroidFs.showOpenDirPicker();
        if (androidUri != null) {
            AndroidFs.persistPickerUriPermission(androidUri);
            uri.value = androidUri.uri;
        }
    } else {
        var path = await open({
            multiple : false,
            directory : true
        });
        if (path != null) {
            uri.value = path;
        }
    }
}

async function save() {
    if (typeof (uri.value) === "string" && uri.value.length > 0) {
        appConfig.datastorageLocation.type = "selectedfolder";
        appConfig.datastorageLocation.storageUri = uri.value;
        router.replace("/onboarding/import")
    }
}

</script>

<template>
    <IonPage>
        <IonContent>
            <div class="container">
                <h1> {{ $t('onboarding:dataLocationScreen.header') }}</h1>
                <IonList>
                    <ion-item>
                        <IonInput label="Folder" v-model="uri"
                            placeholder="The path to your selected folder appears here." :readonly="true"></IonInput>
                        <IonButton shape="round" @click="select">Select Folder</IonButton>
                    </ion-item>
                </IonList>
            </div>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton :disabled="uri == undefined || uri == null || uri.length === 0" @click="save">
                    <IonIcon :icon="ArrowMD" />
                </IonFabButton>
            </IonFab>
        </IonContent>
    </IonPage>
</template>