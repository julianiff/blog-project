export declare type viewVariants = 'Intro' | 'Code' | 'Typescript' | 'Webcomponents' | 'StateManagement' | 'Azure' | 'Node';
declare type ViewType = {
    [key in viewVariants]: any[];
};
interface TextTitle {
    text: string;
    title: string;
}
export declare const leftSideText: (props: TextTitle) => {
    component: string;
    props: never[];
    innerText: string;
    slots: {
        slotName: string;
        component: string;
        props: never[];
        slots: {
            slotName: string;
            component: string;
            props: never[];
            slots: ({
                slotName: string;
                component: string;
                props: never[];
                innerText: string;
                slots: ({
                    slotName: string;
                    component: string;
                    props: {
                        width: string;
                    }[];
                    innerText: string;
                    slots: {
                        slotName: string;
                        component: string;
                        props: {
                            event: string;
                        }[];
                        innerText: string;
                        slots: {
                            slotName: string;
                            component: string;
                            props: {
                                styling: string;
                            }[];
                            innerText: string;
                            slots: never[];
                        }[];
                    }[];
                } | {
                    slotName: string;
                    component: string;
                    props: {
                        width: string;
                    }[];
                    innerText: string;
                    slots: {
                        slotName: string;
                        component: string;
                        props: {
                            level: string;
                        }[];
                        innerText: string;
                        slots: never[];
                    }[];
                })[];
            } | {
                slotName: string;
                component: string;
                props: never[];
                slots: {
                    slotName: string;
                    component: string;
                    props: {
                        level: number;
                    }[];
                    innerText: string;
                    slots: never[];
                }[];
                innerText?: undefined;
            })[];
        }[];
    }[];
}[];
export declare const Views: ViewType;
export {};
//# sourceMappingURL=views.d.ts.map