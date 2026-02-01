
export type Language = 'my' | 'en';

export interface WorkItem {
    myT: string;
    enT: string;
    myD: string;
    enD: string;
    color: string;
}

export interface RoadmapItem {
    phase: string;
    myTitle: string;
    enTitle: string;
    myDesc: string;
    enDesc: string;
    icon: string;
    status: 'completed' | 'ongoing' | 'future';
}

export interface ShowcaseItem {
    id: number;
    myTitle: string;
    enTitle: string;
    emoji: string;
    myDesc: string;
    enDesc: string;
    enFull: string;
    myFull: string;
    // New Details
    studentName: string;
    studentAge: string;
    myMaterials: string[];
    enMaterials: string[];
    mySteps: string[];
    enSteps: string[];
    myOutcome: string;
    enOutcome: string;
}

export interface JoinItem {
    myT: string;
    enT: string;
    iconUrl: string;
    border: string;
}

export type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};
