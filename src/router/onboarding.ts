import { RouteRecordRaw } from "vue-router";

const onboarding: RouteRecordRaw[] = [
	{
		path: "/onboarding/start",
		name: "OnboardingStart",
		component: () => import("../views/onboarding/0-Start.vue")

	},
	{
		path: "/onboarding/datalocation",
		name: "DataLocation",
		component: () => import("../views/onboarding/1-DataLocation.vue")

	},
	{
		path: "/onboarding/selectfolder",
		name: "SelectFolder",
		component: () => import("../views/onboarding/2-SelectFolder.vue")
	},
	{
		path: "/onboarding/import",
		name: "OnboardingImport",
		component: () => import("../views/onboarding/3-Import.vue")
	},
	{
		path: "/onboarding/system",
		name: "OnboardingSystemSetup",
		component: () => import("../views/onboarding/4-System.vue")
	},
	{
		path: "/onboarding/member",
		name: "OnboardingMemberSetup",
		component: () => import("../views/onboarding/5-Member.vue")
	},
	{
		path: "/onboarding/end",
		name: "OnboardingEnd",
		component: () => import("../views/onboarding/6-End.vue")
	}
];

export default onboarding;