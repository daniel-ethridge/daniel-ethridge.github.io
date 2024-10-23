export interface Literature {
    title: string,
    year: number,

    month?: number,
    authors?: string[],
    link?: string,
    aims_questions?: string,
    methods?: string,
    results?: string,
    discussion?: string,
    tags?: string[],

    id?: number  // Automatically set. Manually set values in the json fileare overwritten
}

/**
 * Potential later ideas:
 * - create further optional slots for volume, issue, conference name, proceedings, and 
 */